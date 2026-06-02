"use client";
import { useQuery } from "@tanstack/react-query";
import { metrics, revenueData } from "@/lib/mockData";

const fetchMetrics = async () => {
  await new Promise((r) => setTimeout(r, 500)); // simulate network delay
  return metrics;
};

const fetchRevenueData = async () => {
  await new Promise((r) => setTimeout(r, 600));
  return revenueData;
};

export const useMetrics = () =>
  useQuery({ queryKey: ["metrics"], queryFn: fetchMetrics, staleTime: 30_000 });

export const useRevenueData = () =>
  useQuery({ queryKey: ["revenueData"], queryFn: fetchRevenueData, staleTime: 30_000 });