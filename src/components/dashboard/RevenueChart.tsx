"use client";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { useRevenueData } from "@/hooks/useMetrics";
import { useTheme } from "@/lib/ThemeContext";

export default function RevenueChart() {
  const { data, isLoading } = useRevenueData();
  const { theme } = useTheme();

  const isDark = theme === "dark";

  const gridColor = isDark ? "#1f2937" : "#e5e7eb";
  const axisColor = isDark ? "#6b7280" : "#9ca3af";
  const tooltipBg = isDark ? "#111827" : "#ffffff";
  const tooltipBorder = isDark ? "#374151" : "#e5e7eb";
  const tooltipText = isDark ? "#f9fafb" : "#111827";

  if (isLoading) return <div className="h-64 bg-gray-100 dark:bg-gray-900 rounded-xl animate-pulse" />;

  return (
    <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-5">
      <h2 className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-4">Revenue Over Time</h2>
      <ResponsiveContainer width="100%" height={240}>
        <AreaChart data={data}>
          <defs>
            <linearGradient id="revenueGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#6366f1" stopOpacity={0.3} />
              <stop offset="95%" stopColor="#6366f1" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke={gridColor} />
          <XAxis dataKey="month" stroke={axisColor} tick={{ fontSize: 12, fill: axisColor }} />
          <YAxis stroke={axisColor} tick={{ fontSize: 12, fill: axisColor }} tickFormatter={(v: number) => `$${v / 1000}k`} />
          <Tooltip
            formatter={(v) => {
              const value = typeof v === "number" ? `$${v.toLocaleString()}` : String(v);
              return [value, "Revenue"];
            }}
            contentStyle={{
              backgroundColor: tooltipBg,
              border: `1px solid ${tooltipBorder}`,
              color: tooltipText,
              borderRadius: "8px",
            }}
          />
          <Area type="monotone" dataKey="revenue" stroke="#6366f1" fill="url(#revenueGrad)" strokeWidth={2} />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}