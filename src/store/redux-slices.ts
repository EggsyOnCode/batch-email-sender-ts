import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";

// Define a type for the slice state
interface keyState {
  value: string
}

// Define the initial state using that type
const initialState: keyState = {
  value: '',
}

export const keySlice = createSlice({
  name: "appkey",
  initialState,
  reducers: {
    setKey: (state,action:PayloadAction<string>) => {
      state.value = action.payload;
    },
    
  },
});

// Action creators are generated for each case reducer function
export const { setKey } = keySlice.actions;

export const selectkey = (state: RootState) => state.keySlice.value;
export default keySlice.reducer;
