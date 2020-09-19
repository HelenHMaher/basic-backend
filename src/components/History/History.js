import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import ListSessions from "../ListSessions";
import { fetchWorkouts, selectWorkoutsById } from "../workoutsSlice";
import { StyledHistory } from "./History.styled";

let WorkoutExcerpt = ({ workoutId }) => {
  const workout = useSelector((state) => selectWorkoutsById(state, workoutId));
  return (
    <article className="workout-excertp" key={workout.id}>
      <h3>{workout.title}</h3>
      <div>
        <WorkoutType type={workout.type} />
        <Date date={workout.date} />
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
  const orderedWorkoutIds = useSelector(selectPostIds);
  const workoutStatus = useSelector((state) => state.workouts.status);
  const error = useSelector((state) => state.posts.error);

  useEffect(() => {
    if (workoutStatus === "idle") {
      dispatch(fetchWorkouts());
    }
  }, [workoutStatus, dispatch]);

  return (
    <StyledHistory>
      <Router>
        <div>
          {sessions.map((session) => (
            <ListSessions
              key={session["id"]}
              id={session["id"]}
              date={session["date"]}
              type={session["type"]}
              title={session["title"]}
            />
          ))}
        </div>

        <Switch>
          <Route path="/climb/:id">
            <AddClimb />
          </Route>
          <Route path="/dryland/:id">
            <AddDrylandWorkout />
          </Route>
        </Switch>
      </Router>
    </StyledHistory>
  );
}

export default History;
