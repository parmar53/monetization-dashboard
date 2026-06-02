import { Metric, RevenueData, Promotion, Segment } from "@/types";

export const metrics: Metric[] = [
  { id: "1", label: "Total Revenue", value: "$1,284,500", change: "+12.4%", trend: "up" },
  { id: "2", label: "Active Players", value: "94,320", change: "+8.1%", trend: "up" },
  { id: "3", label: "Active Promotions", value: "14", change: "-2", trend: "down" },
  { id: "4", label: "Conversion Rate", value: "6.8%", change: "+1.2%", trend: "up" },
];

export const revenueData: RevenueData[] = [
  { month: "Jan", revenue: 85000, players: 7200 },
  { month: "Feb", revenue: 92000, players: 7800 },
  { month: "Mar", revenue: 105000, players: 8500 },
  { month: "Apr", revenue: 118000, players: 9100 },
  { month: "May", revenue: 134000, players: 10200 },
  { month: "Jun", revenue: 151000, players: 11400 },
];

export const promotions: Promotion[] = [
  { id: "1", name: "Summer Blast Sale", discount: 40, status: "Active", startDate: "2026-06-01", endDate: "2026-06-30", conversions: 1240 },
  { id: "2", name: "New Player Welcome Pack", discount: 25, status: "Active", startDate: "2026-05-01", endDate: "2026-07-31", conversions: 3870 },
  { id: "3", name: "Weekend Warrior Bundle", discount: 15, status: "Scheduled", startDate: "2026-06-07", endDate: "2026-06-08", conversions: 0 },
  { id: "4", name: "Spring Starter Offer", discount: 30, status: "Expired", startDate: "2026-03-01", endDate: "2026-05-31", conversions: 5620 },
  { id: "5", name: "VIP Loyalty Reward", discount: 50, status: "Active", startDate: "2026-06-01", endDate: "2026-12-31", conversions: 430 },
];

export const segments: Segment[] = [
  { id: "1", name: "High Spenders", description: "Players with lifetime spend > $500", playerCount: 8420, tags: ["VIP", "High Value"], avgRevenue: "$142.30" },
  { id: "2", name: "Lapsed Users", description: "No activity in the last 30 days", playerCount: 21340, tags: ["Re-engagement", "At Risk"], avgRevenue: "$18.50" },
  { id: "3", name: "New Players", description: "Registered within the last 7 days", playerCount: 5670, tags: ["Onboarding", "New"], avgRevenue: "$4.20" },
  { id: "4", name: "Casual Players", description: "Login 1–3 times per week", playerCount: 34200, tags: ["Mid-Tier", "Casual"], avgRevenue: "$22.80" },
  { id: "5", name: "Tournament Players", description: "Participated in 3+ tournaments", playerCount: 12800, tags: ["Competitive", "Engaged"], avgRevenue: "$67.40" },
];