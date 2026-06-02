import { metrics } from "@/lib/mockData";
import MetricCard from "@/components/dashboard/MetricCard";
import RevenueChart from "@/components/dashboard/RevenueChart";
import ActivityFeed from "@/components/dashboard/ActivityFeed";

export default async function DashboardPage() {
  const data = metrics;

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">LiveOps Dashboard</h1>
        <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">Real-time monetization overview</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {data.map((metric, i) => (
          <MetricCard key={metric.id} metric={metric} index={i} />
        ))}
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2">
          <RevenueChart />
        </div>
        <ActivityFeed />
      </div>
    </div>
  );
}