"use client";

type Segment = {
  value: number;
  color: string;
  label: string;
  count: number;
  total: number;
};

type Props = {
  segments: Segment[];
  total: number;
  completed: number;
  size?: number;
  strokeWidth?: number;
};

export function CircularProgress({ segments, total, completed, size = 160, strokeWidth = 12 }: Props) {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const cx = size / 2;
  const cy = size / 2;

  // Calculate stroke offsets
  let cumulativePercent = 0;
  const totalValue = segments.reduce((s, seg) => s + seg.value, 0);

  return (
    <div className="relative inline-flex items-center justify-center" style={{ width: size, height: size }}>
      <svg width={size} height={size} style={{ transform: "rotate(-90deg)" }}>
        {/* Background track */}
        <circle
          cx={cx}
          cy={cy}
          r={radius}
          fill="none"
          stroke="rgba(255,255,255,0.06)"
          strokeWidth={strokeWidth}
        />
        {segments.map((seg, i) => {
          if (seg.value === 0) return null;
          const percent = totalValue > 0 ? seg.value / totalValue : 0;
          const strokeDash = percent * circumference;
          const strokeGap = circumference - strokeDash;
          const offset = circumference - cumulativePercent * circumference;
          cumulativePercent += percent;

          return (
            <circle
              key={i}
              cx={cx}
              cy={cy}
              r={radius}
              fill="none"
              stroke={seg.color}
              strokeWidth={strokeWidth}
              strokeDasharray={`${strokeDash} ${strokeGap}`}
              strokeDashoffset={offset}
              strokeLinecap="round"
              style={{ transition: "stroke-dasharray 0.6s ease" }}
            />
          );
        })}
      </svg>
      {/* Center text */}
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-2xl font-bold text-text">{completed}</span>
        <span className="text-xs text-muted">{total}</span>
      </div>
    </div>
  );
}
