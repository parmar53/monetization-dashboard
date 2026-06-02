"use client";
import { motion } from "framer-motion";
import { TrendingUp, TrendingDown } from "lucide-react";
import { Metric } from "@/types";
import { useMetrics } from "@/hooks/useMetrics";
import { SkeletonCard } from "@/components/ui/Skeleton";

function MetricCardUI({ metric, index }: { metric: Metric; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-5"
    >
      <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">{metric.label}</p>
      <p className="text-2xl font-bold text-gray-900 dark:text-white">{metric.value}</p>
      <div className={`flex items-center gap-1 mt-2 text-sm ${metric.trend === "up" ? "text-green-400" : "text-red-400"}`}>
        {metric.trend === "up" ? <TrendingUp size={14} /> : <TrendingDown size={14} />}
        <span>{metric.change} vs last month</span>
      </div>
    </motion.div>
  );
}

export default function MetricCard({ metric, index }: { metric: Metric; index: number }) {
  const { isLoading } = useMetrics();
  if (isLoading) return <SkeletonCard />;
  return <MetricCardUI metric={metric} index={index} />;
}