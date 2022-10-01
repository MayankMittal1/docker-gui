import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState, AppThunk } from "../../app/store";
import { supportedApps } from "../../constants/supportedApps";
const initialState = {
  app: {},
  isLoading: false,
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    loadApp: (state, action: PayloadAction<string>) => {
      state.app = action.payload;
    },
  },
  // The `extraReducers` field lets the slice handle actions defined elsewhere,
  // including actions generated by createAsyncThunk or in other slices.
  //   extraReducers: (builder) => {
  //     builder
  //       .addCase(incrementAsync.pending, (state) => {
  //         state.status = "loading";
  //       })
  //       .addCase(incrementAsync.fulfilled, (state, action) => {
  //         state.status = "idle";
  //         state.value += action.payload;
  //       })
  //       .addCase(incrementAsync.rejected, (state) => {
  //         state.status = "failed";
  //       });
  //   },
});

export const { loadApp } = appSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// i