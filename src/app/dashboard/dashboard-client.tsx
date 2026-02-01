"use client";

import { useState, useTransition, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  AreaChart,
  Area,
} from "recharts";
import { Cpu, DollarSign, MemoryStick, Server, Timer } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { getDashboardSimulation } from "../actions";
import type { SimulateCloudDashboardOutput } from "@/ai/flows/simulate-cloud-dashboards";
import { Skeleton } from "@/components/ui/skeleton";

const FormSchema = z.object({
  userDescription: z
    .string()
    .min(10, { message: "Please describe your cloud needs in more detail." }),
});

const StatCard = ({
  title,
  value,
  icon,
  unit,
  isLoading,
}: {
  title: string;
  value: number;
  icon: React.ReactNode;
  unit: string;
  isLoading?: boolean;
}) => (
  <Card className="glass-card">
    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
      <CardTitle className="text-sm font-medium">{title}</CardTitle>
      {icon}
    </CardHeader>
    <CardContent>
      {isLoading ? (
        <Skeleton className="h-8 w-1/2" />
      ) : (
        <div className="text-2xl font-bold">
          {value.toFixed(1)}
          {unit}
        </div>
      )}
    </CardContent>
  </Card>
);

export function DashboardClient() {
  const [isPending, startTransition] = useTransition();
  const [simulationData, setSimulationData] =
    useState<SimulateCloudDashboardOutput | null>(null);
  const [chartData, setChartData] = useState<any[]>([]);

  const { toast } = useToast();

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      userDescription: "A small e-commerce website with 1000 daily visitors, running on a microservices architecture.",
    },
  });

  useEffect(() => {
    if (simulationData) {
      const interval = setInterval(() => {
        setSimulationData((prevData) => {
          if (!prevData) return null;
          const newCpu = Math.max(0, Math.min(100, prevData.cpuUsage + (Math.random() - 0.5) * 5));
          const newMemory = Math.max(0, Math.min(100, prevData.memoryUsage + (Math.random() - 0.5) * 5));
          return {
            ...prevData,
            cpuUsage: newCpu,
            memoryUsage: newMemory,
          };
        });
      }, 2000);
      return () => clearInterval(interval);
    }
  }, [simulationData]);

   useEffect(() => {
    if (simulationData) {
      setChartData((currentData) => [
        ...currentData.slice(-9),
        {
          name: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' }),
          cpu: simulationData.cpuUsage,
          memory: simulationData.memoryUsage,
        },
      ]);
    }
  }, [simulationData]);

  function onSubmit(values: z.infer<typeof FormSchema>) {
    setSimulationData(null);
    setChartData([]);
    startTransition(async () => {
      const { data, error } = await getDashboardSimulation(values);
      if (error) {
        toast({
          title: "Error",
          description: error,
          variant: "destructive",
        });
        return;
      }
      setSimulationData(data);
    });
  }

  return (
    <div className="grid gap-12">
      <Card className="glass-card">
        <CardHeader>
          <CardTitle>Cloud Simulator</CardTitle>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="userDescription"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Describe your application or use case</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="e.g., A high-traffic blog, a data processing pipeline, a small web app..."
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" disabled={isPending}>
                {isPending ? "Simulating..." : "Run Simulation"}
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>

      <div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5 mb-8">
          <StatCard
            title="CPU Usage"
            value={simulationData?.cpuUsage ?? 0}
            unit="%"
            icon={<Cpu className="h-4 w-4 text-muted-foreground" />}
            isLoading={isPending && !simulationData}
          />
          <StatCard
            title="Memory Usage"
            value={simulationData?.memoryUsage ?? 0}
            unit="%"
            icon={<MemoryStick className="h-4 w-4 text-muted-foreground" />}
            isLoading={isPending && !simulationData}
          />
          <StatCard
            title="Pods Running"
            value={simulationData?.podsRunning ?? 0}
            unit=""
            icon={<Server className="h-4 w-4 text-muted-foreground" />}
            isLoading={isPending && !simulationData}
          />
          <StatCard
            title="Estimated Cost"
            value={simulationData?.costEstimate ?? 0}
            unit=" USD/day"
            icon={<DollarSign className="h-4 w-4 text-muted-foreground" />}
            isLoading={isPending && !simulationData}
          />
          <StatCard
            title="Uptime"
            value={simulationData?.uptime ?? 0}
            unit="%"
            icon={<Timer className="h-4 w-4 text-muted-foreground" />}
            isLoading={isPending && !simulationData}
          />
        </div>

        <Card className="glass-card">
          <CardHeader>
            <CardTitle>Live Resource Usage</CardTitle>
          </CardHeader>
          <CardContent className="h-[350px] w-full">
            {isPending && !simulationData ? (
                <div className="w-full h-full flex items-center justify-center">
                    <Skeleton className="w-full h-full"/>
                </div>
            ) : simulationData && (
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                  data={chartData}
                  margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border)/0.5)" />
                  <XAxis dataKey="name" stroke="hsl(var(--muted-foreground))" />
                  <YAxis stroke="hsl(var(--muted-foreground))" unit="%"/>
                  <Tooltip
                    contentStyle={{
                        backgroundColor: 'hsl(var(--background))',
                        borderColor: 'hsl(var(--border))'
                    }}
                  />
                  <Legend />
                  <Area
                    type="monotone"
                    dataKey="cpu"
                    stroke="hsl(var(--primary))"
                    fill="hsl(var(--primary)/0.2)"
                    isAnimationActive={false}
                  />
                  <Area
                    type="monotone"
                    dataKey="memory"
                    stroke="hsl(var(--accent))"
                    fill="hsl(var(--accent)/0.2)"
                    isAnimationActive={false}
                  />
                </AreaChart>
              </ResponsiveContainer>
            )}
          </CardContent>
        </Card>
        
        {simulationData && (
            <Card className="glass-card mt-8">
                <CardHeader>
                    <CardTitle>AI Recommendations</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground">{simulationData.recommendations}</p>
                </CardContent>
            </Card>
        )}
      </div>
    </div>
  );
}
