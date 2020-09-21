import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import {
  fetchWorkouts,
  selectWorkoutsById,
  selectWorkoutIds,
} from "../workoutsSlice";
import { StyledHistory } from "./History.styled";

let WorkoutExcerpt = ({ workoutId }) => {
  const workout = useSelector((state) => selectWorkoutsById(state, workoutId));
  return (
    <article className="workout-excertp" key={workout.id}>
      <h3>{workout.title}</h3>
      <div>
        <h2>{workout.type}</h2>
        <h2>{workout.date}</h2>
      </div>
      <p className="workout-content">{workout.content.substring(0, 100)}</p>
      <Link to={`/workout/${workout.id}`} className="button mute-button">
        View Post
      </Link>
    </article>
  );
};

function History() {
  const dispatch = useDispatch();
  const orderedWorkoutIds = useSelector(selectWorkoutIds);
  const workoutStatus = useSelector((state) => state.workouts.status);
  const error = useSelector((state) => state.workouts.error);

  useEffect(() => {
    if (workoutStatus === "idle") {
      dispatch(fetchWorkouts());
    }
  }, [workoutStatus, dispatch]);

  let content;
  if (workoutStatus === "loading") {
    content = <div className="loader">Loading...</div>;
  } else if (workoutStatus === "succeeded") {
    content = orderedWorkoutIds.map((workoutId) => (
      <WorkoutExcerpt key={workoutId} workoutId={workoutId} />
    ));
  } else if (workoutStatus === "failed") {
    content = <div>{error}</div>;
  }

  return (
    <StyledHistory>
      <h2>Workouts</h2>
      {content}
    </StyledHistory>
  );
}

export default History;
