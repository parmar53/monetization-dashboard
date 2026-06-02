import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Segment } from "@/types";
import { segments as initialSegments } from "@/lib/mockData";

interface SegmentsState {
  items: Segment[];
  search: string;
}

const initialState: SegmentsState = {
  items: initialSegments,
  search: "",
};

const segmentsSlice = createSlice({
  name: "segments",
  initialState,
  reducers: {
    setSearch(state, action: PayloadAction<string>) {
      state.search = action.payload;
    },
  },
});

export const { setSearch } = segmentsSlice.actions;
export default segmentsSlice.reducer;