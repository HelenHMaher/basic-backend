import React from "react";
import { StyledAddDrylandWorkouts } from "./AddDrylandWorkouts.styled";

function AddDrylandWorkouts() {
  return (
    <StyledAddDrylandWorkouts>
      <h2>Current Dryland Workout</h2>
      {/*Display Basic Workout Info*/}

      <h3>Add Exercise</h3>
      <form id="NewExercise">
        <input
          type="text"
          id="intensity"
          name="intensity"
          placeholder="intensity"
        />

        <input type="radio" id="cardio" name="workoutType" value="cardio" />
        <label for="cardio">Carido</label>
        <input type="radio" id="crossfit" name="workoutType" value="crossfit" />
        <label for="crossfit">Crossfit</label>
        <input
          type="radio"
          id="bodybuilding"
          name="workoutType"
          value="bodybuilding"
        />
        <label for="bodybuilding">Bodybuilding</label>
        <input type="radio" id="strength" name="workoutType" value="strength" />
        <label for="strength">Strength</label>

        <input type="textarea" id="notes" name="notes" placeholder="notes" />

        <button type="submit" value="Submit" id="newClimb">
          Submit
        </button>
      </form>

      <h3>Change Dryland Workout Details</h3>
      <form id="EditWorkoutForm">
        <input type="date" id="date" />
        <input type="text" id="location" placeholder="Location" />
        <input type="radio" id="indoor" name="indoorOutdoor" value="indoor" />
        <label for="indoor">Indoor</label>
        <input type="radio" id="outdoor" name="indoorOutdoor" value="outdoor" />
        <label for="outdoor">Outdoor</label>

        <button type="submit" value="Submit" id="newClimb">
          Submit Changes
        </button>
      </form>
    </StyledAddDrylandWorkouts>
  );
}

export default AddDrylandWorkouts;
