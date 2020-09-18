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

export const addNewWorkout = createAsyncThunk(
  "workout/addNewWorkout",
  async (initialWorkout) => {}
);

export const fetchWorkouts = createAsyncThunk(
  "posts/fetchPosts",
  async () => {
    const response = await axios({method: 'get', url: '/api/session/'})
  }
);

const workoutsSlice = createSlice({
  name: "workouts",
  initialState,
  reducers: {
    workoutUpdated(state, action) {
      const { id, title, type, content} = action.payload;
      const existingWorkout = state.entities[id];
      if (existingWorkout) {
        existingWorkout.title = title;
        existingWorkout.content = content;
        existingWorkout.type = type;
      }
    },
  },
  extraReducers: {
    [fetchWorkouts.pending]: (state, action) => {
      state.status = "loading";
    },
    [fetchWorkouts.fulfilled]: (state, action) => {
      state.status = "succeeded";
      workoutsAdapter.upsertMany(state, action.payload);
    },
    [fetchWorkouts.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    },
    [addNewWorkout.fulfilled]: workoutsAdapter.addOne,
  },
});

export const { workoutUpdated } = workoutsSlice.actions;

export default createSlice.reducer;

export const {
    selectAll: selectAllWorkouts,
    selectById: selectWorkoutsById,
    selectIds: selectPostIds,
} = workoutsAdapter.getSelectors((state) => state.workouts)
}
