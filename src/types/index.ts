export interface Metric {
  id: string;
  label: string;
  value: string;
  change: string;
  trend: "up" | "down";
}

export interface RevenueData {
  month: string;
  revenue: number;
  players: number;
}

export interface Promotion {
  id: string;
  name: string;
  discount: number;
  status: "Active" | "Scheduled" | "Expired";
  startDate: string;
  endDate: string;
  conversions: number;
}

export interface Segment {
  id: string;
  name: string;
  description: string;
  playerCount: number;
  tags: string[];
  avgRevenue: string;
}