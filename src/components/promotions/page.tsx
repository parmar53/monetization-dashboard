"use client";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store";
import { setFilter } from "@/store/slices/promotionsSlice";
import { motion } from "framer-motion";

const STATUS_COLORS = {
  Active: "bg-green-500/20 text-green-400",
  Scheduled: "bg-yellow-500/20 text-yellow-400",
  Expired: "bg-gray-500/20 text-gray-400",
};

const FILTERS = ["All", "Active", "Scheduled", "Expired"] as const;

export default function PromotionsPage() {
  const dispatch = useDispatch();
  const { items, filter } = useSelector((s: RootState) => s.promotions);

  const filtered = filter === "All" ? items : items.filter((p) => p.status === filter);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-white">Promotions Manager</h1>
        <p className="text-gray-400 text-sm mt-1">Manage and track all active promotional campaigns</p>
      </div>

      {/* Filter Tabs */}
      <div className="flex gap-2">
        {FILTERS.map((f) => (
          <button
            key={f}
            onClick={() => dispatch(setFilter(f))}
            className={`px-4 py-1.5 rounded-full text-sm font-medium transition ${
              filter === f ? "bg-indigo-600 text-white" : "bg-gray-800 text-gray-400 hover:text-white"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Table */}
      <div className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-gray-800 text-gray-400">
            <tr>
              {["Promotion", "Discount", "Status", "Start", "End", "Conversions"].map((h) => (
                <th key={h} className="text-left px-4 py-3 font-medium">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filtered.map((promo, i) => (
              <motion.tr
                key={promo.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: i * 0.05 }}
                className="border-t border-gray-800 hover:bg-gray-800/50 transition"
              >
                <td className="px-4 py-3 font-medium text-white">{promo.name}</td>
                <td className="px-4 py-3 text-indigo-400 font-semibold">{promo.discount}% OFF</td>
                <td className="px-4 py-3">
                  <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${STATUS_COLORS[promo.status]}`}>
                    {promo.status}
                  </span>
                </td>
                <td className="px-4 py-3 text-gray-400">{promo.startDate}</td>
                <td className="px-4 py-3 text-gray-400">{promo.endDate}</td>
                <td className="px-4 py-3 text-white font-semibold">{promo.conversions.toLocaleString()}</td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}