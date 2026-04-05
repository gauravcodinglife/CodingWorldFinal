"use client";

import { useMemo, useState } from "react";
import { format, subDays, eachDayOfInterval, startOfWeek, getDay } from "date-fns";

type DayActivity = {
  date: string; // "YYYY-MM-DD"
  count: number;
};

type Props = {
  data: DayActivity[];
  weeks?: number;
};

const LEVELS = [
  { min: 0, max: 0, bg: "bg-white/5", label: "No activity" },
  { min: 1, max: 2, bg: "bg-green-900", label: "1-2" },
  { min: 3, max: 5, bg: "bg-green-700", label: "3-5" },
  { min: 6, max: 9, bg: "bg-green-500", label: "6-9" },
  { min: 10, max: Infinity, bg: "bg-green-400", label: "10+" },
];

function getLevel(count: number) {
  return LEVELS.find((l) => count >= l.min && count <= l.max) ?? LEVELS[0];
}

const MONTH_LABELS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const DAY_LABELS = ["", "Mon", "", "Wed", "", "Fri", ""];

export function ActivityCalendar({ data, weeks = 52 }: Props) {
  const [tooltip, setTooltip] = useState<{ date: string; count: number; x: number; y: number } | null>(null);

  const activityMap = useMemo(() => {
    const map: Record<string, number> = {};
    data.forEach((d) => { map[d.date] = d.count; });
    return map;
  }, [data]);

  // Build grid: weeks columns, 7 rows (Sun-Sat)
  const today = new Date();
  const startDate = subDays(today, weeks * 7 - 1);
  // Align to the start of the week (Sunday)
  const gridStart = startOfWeek(startDate, { weekStartsOn: 0 });

  const allDays = eachDayOfInterval({ start: gridStart, end: today });

  // Group into columns of 7
  const columns: Date[][] = [];
  for (let i = 0; i < allDays.length; i += 7) {
    columns.push(allDays.slice(i, i + 7));
  }

  // Month label positions: find first column where month changes
  const monthPositions: { label: string; col: number }[] = [];
  let lastMonth = -1;
  columns.forEach((col, i) => {
    const firstDay = col[0];
    const m = firstDay.getMonth();
    if (m !== lastMonth) {
      monthPositions.push({ label: MONTH_LABELS[m], col: i });
      lastMonth = m;
    }
  });

  const cellSize = 13;
  const gap = 3;

  return (
    <div className="w-full overflow-x-auto">
      <div className="relative" style={{ minWidth: columns.length * (cellSize + gap) + 32 }}>
        {/* Month labels */}
        <div className="flex mb-1 ml-8">
          {columns.map((_, colIdx) => {
            const mp = monthPositions.find((m) => m.col === colIdx);
            return (
              <div
                key={colIdx}
                style={{ width: cellSize + gap, flexShrink: 0 }}
                className="text-[10px] text-muted-foreground overflow-visible"
              >
                {mp ? mp.label : ""}
              </div>
            );
          })}
        </div>

        <div className="flex gap-0">
          {/* Day labels */}
          <div className="flex flex-col mr-1" style={{ gap: gap }}>
            {DAY_LABELS.map((label, i) => (
              <div
                key={i}
                style={{ height: cellSize, lineHeight: `${cellSize}px` }}
                className="text-[10px] text-muted-foreground text-right pr-1 w-7"
              >
                {label}
              </div>
            ))}
          </div>

          {/* Calendar grid */}
          <div className="flex" style={{ gap }}>
            {columns.map((col, colIdx) => (
              <div key={colIdx} className="flex flex-col" style={{ gap }}>
                {Array.from({ length: 7 }).map((_, dayIdx) => {
                  const day = col[dayIdx];
                  if (!day || day > today) {
                    return (
                      <div
                        key={dayIdx}
                        style={{ width: cellSize, height: cellSize }}
                        className="rounded-sm bg-transparent"
                      />
                    );
                  }
                  const dateStr = format(day, "yyyy-MM-dd");
                  const count = activityMap[dateStr] ?? 0;
                  const level = getLevel(count);
                  return (
                    <div
                      key={dayIdx}
                      style={{ width: cellSize, height: cellSize }}
                      className={`rounded-sm ${level.bg} cursor-pointer transition-all hover:ring-1 hover:ring-green-400`}
                      onMouseEnter={(e) => {
                        const rect = (e.target as HTMLElement).getBoundingClientRect();
                        setTooltip({ date: dateStr, count, x: rect.left, y: rect.top });
                      }}
                      onMouseLeave={() => setTooltip(null)}
                    />
                  );
                })}
              </div>
            ))}
          </div>
        </div>

        {/* Legend */}
        <div className="flex items-center gap-2 mt-3 ml-8">
          <span className="text-[11px] text-muted-foreground">Less</span>
          {LEVELS.map((l, i) => (
            <div key={i} style={{ width: cellSize, height: cellSize }} className={`rounded-sm ${l.bg}`} />
          ))}
          <span className="text-[11px] text-muted-foreground">More</span>
        </div>
      </div>

      {/* Tooltip (fixed position) */}
      {tooltip && (
        <div
          className="fixed z-50 pointer-events-none px-3 py-1.5 rounded-lg bg-card border border-white/10 text-xs text-body shadow-xl"
          style={{ left: tooltip.x + 18, top: tooltip.y - 36 }}
        >
          <span className="font-semibold text-text">{tooltip.count} {tooltip.count === 1 ? "activity" : "activities"}</span>
          <span className="text-muted ml-1">on {format(new Date(tooltip.date + "T00:00:00"), "MMM d, yyyy")}</span>
        </div>
      )}
    </div>
  );
}
