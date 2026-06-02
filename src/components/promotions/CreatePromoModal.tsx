"use client";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addPromotion } from "@/store/slices/promotionsSlice";
import { Promotion } from "@/types";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

interface Props {
  open: boolean;
  onClose: () => void;
}

type FormData = Omit<Promotion, "id" | "conversions">;

export default function CreatePromoModal({ open, onClose }: Props) {
  const dispatch = useDispatch();
  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    dispatch(addPromotion({
      ...data,
      id: crypto.randomUUID(),
      discount: Number(data.discount),
      conversions: 0,
    }));
    reset();
    onClose();
  };

  return (
    <AnimatePresence>
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="bg-gray-900 border border-gray-700 rounded-2xl p-6 w-full max-w-md shadow-2xl"
          >
            <div className="flex items-center justify-between mb-5">
              <h2 className="text-lg font-semibold text-white">Create Promotion</h2>
              <button onClick={onClose} className="text-gray-400 hover:text-white transition">
                <X size={18} />
              </button>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div>
                <label className="text-sm text-gray-400 block mb-1">Promotion Name</label>
                <input
                  {...register("name", { required: "Name is required" })}
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="e.g. Summer Blast Sale"
                />
                {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name.message}</p>}
              </div>

              <div>
                <label className="text-sm text-gray-400 block mb-1">Discount (%)</label>
                <input
                  type="number"
                  {...register("discount", { required: "Discount is required", min: 1, max: 100 })}
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="e.g. 25"
                />
                {errors.discount && <p className="text-red-400 text-xs mt-1">Enter a valid discount (1–100)</p>}
              </div>

              <div>
                <label className="text-sm text-gray-400 block mb-1">Status</label>
                <select
                  {...register("status", { required: true })}
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                  <option value="Active">Active</option>
                  <option value="Scheduled">Scheduled</option>
                  <option value="Expired">Expired</option>
                </select>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-sm text-gray-400 block mb-1">Start Date</label>
                  <input
                    type="date"
                    {...register("startDate", { required: true })}
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
                <div>
                  <label className="text-sm text-gray-400 block mb-1">End Date</label>
                  <input
                    type="date"
                    {...register("endDate", { required: true })}
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
              </div>

              <div className="flex gap-3 pt-2">
                <button
                  type="button"
                  onClick={onClose}
                  className="flex-1 px-4 py-2 rounded-lg bg-gray-800 text-gray-300 hover:text-white text-sm transition"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-medium transition"
                >
                  Create
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}