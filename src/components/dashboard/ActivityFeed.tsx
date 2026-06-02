"use client";
import { motion } from "framer-motion";
import { Zap, UserPlus, Tag, TrendingUp } from "lucide-react";

const activities = [
  { id: 1, icon: Zap, color: "text-yellow-400", text: "Summer Blast Sale triggered 142 conversions", time: "2 min ago" },
  { id: 2, icon: UserPlus, color: "text-green-400", text: "1,240 new players joined via Welcome Pack", time: "15 min ago" },
  { id: 3, icon: Tag, color: "text-indigo-400", text: "Weekend Warrior Bundle scheduled for Jun 7", time: "1 hr ago" },
  { id: 4, icon: TrendingUp, color: "text-blue-400", text: "Revenue crossed $1.2M milestone this month", time: "3 hr ago" },
  { id: 5, icon: Zap, color: "text-yellow-400", text: "VIP Loyalty Reward activated for 430 players", time: "5 hr ago" },
];

export default function ActivityFeed() {
  return (
    <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-5">
      <h2 className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-4">Recent Activity</h2>
      <div className="space-y-3">
        {activities.map((item, i) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.08 }}
            className="flex items-start gap-3"
          >
            <div className={`mt-0.5 ${item.color}`}>
              <item.icon size={15} />
            </div>
            <div className="flex-1">
              <p className="text-sm text-gray-700 dark:text-gray-300">{item.text}</p>
              <p className="text-xs text-gray-400 dark:text-gray-500 mt-0.5">{item.time}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}