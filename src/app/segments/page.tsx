"use client";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store";
import { setSearch } from "@/store/slices/segmentsSlice";
import { motion } from "framer-motion";
import { Search, Users } from "lucide-react";

export default function SegmentsPage() {
  const dispatch = useDispatch();
  const { items, search } = useSelector((s: RootState) => s.segments);

  const filtered = items.filter(
    (seg) =>
      seg.name.toLowerCase().includes(search.toLowerCase()) ||
      seg.tags.some((t) => t.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Player Segments</h1>
<p className="text-gray-500 dark:text-gray-400 text-sm mt-1">Explore and target player groups for campaigns</p>
      </div>

      {/* Search */}
      <div className="relative w-full max-w-sm">
        <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
        <input
          type="text"
          placeholder="Search segments or tags..."
          value={search}
          onChange={(e) => dispatch(setSearch(e.target.value))}
          className="w-full bg-gray-100 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg pl-9 pr-4 py-2 text-sm text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>

      {/* Segment Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.map((seg, i) => (
          <motion.div
            key={seg.id}
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.08 }}
            className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-5 space-y-3"
          >
            <div className="flex items-center justify-between">
              <h3 className="font-semibold text-gray-900 dark:text-white">{seg.name}</h3>
              <div className="flex items-center gap-1 text-indigo-400 text-sm">
                <Users size={14} />
                <span>{seg.playerCount.toLocaleString()}</span>
              </div>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400">{seg.description}</p>
            <div className="flex flex-wrap gap-1">
              {seg.tags.map((tag) => (
                <span key={tag} className="bg-indigo-500/10 text-indigo-400 text-xs px-2 py-0.5 rounded-full">
                  {tag}
                </span>
              ))}
            </div>
            <p className="text-sm text-gray-500">Avg. Revenue: <span className="text-green-400 font-medium">{seg.avgRevenue}</span></p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}