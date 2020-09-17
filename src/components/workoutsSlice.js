import {
  createSlice,
  createAsyncThunk,
  createSelector,
  createEntityAdapter,
} from "@reduxjs/toolkit";

const workoutsAdapter = createEntityAdapter({
  sortComparer: (a, b) => b.date.localeCompare(a.date),
});

const initialState = workoutsAdapter.getInitialState({
  status: "idle",
  error: null,
});

const workoutsSlice = createSlice({
  name: "workouts",
  initialState,
  reducers: {
    workoutAdded(state, action) {},
    workoutUpdated(state, action) {},
  },
  extraReducers: {},
});

export const { workoutAdded, workoutUpdated } = workoutsSlice.actions;

export default createSlice.reducer;
