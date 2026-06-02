import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Promotion } from "@/types";
import { promotions as initialPromotions } from "@/lib/mockData";

interface PromotionsState {
  items: Promotion[];
  filter: "All" | "Active" | "Scheduled" | "Expired";
}

const initialState: PromotionsState = {
  items: initialPromotions,
  filter: "All",
};

const promotionsSlice = createSlice({
  name: "promotions",
  initialState,
  reducers: {
    setFilter(state, action: PayloadAction<PromotionsState["filter"]>) {
      state.filter = action.payload;
    },
    addPromotion(state, action: PayloadAction<Promotion>) {
      state.items.unshift(action.payload);
    },
  },
});

export const { setFilter, addPromotion } = promotionsSlice.actions;
export default promotionsSlice.reducer;