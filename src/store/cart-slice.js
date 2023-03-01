import { createSlice } from "@reduxjs/toolkit";

const initialShowCartState = { isShow: true };

const showCartSlice = createSlice({
  name: "showCart",
  initialState: initialShowCartState,
  reducers: {
    toggle: (state) => {
      state.isShow = !state.isShow;
    },
  },
});

export const showCartActions = showCartSlice.actions;

export default showCartSlice.reducer;
