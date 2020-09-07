import React from "react";
import { StyledAddSession } from "./AddSession.styled";

function AddSession() {
  return (
    <StyledAddSession>
      <h2>New Training Session</h2>
      <form id="newSessionSession" action="/api/session/" method="POST">
        <input type="date" id="date" name="date" />

        <input type="radio" id="climb" name="type" value="climb" />
        <label for="climb">Climb</label>
        <input type="radio" id="dryland" name="type" value="dryland" />
        <label for="dryland">Dryland</label>

        <input type="text" id="title" name="title" placeholder="title" />

        <button type="submit" value="Submit" id="submitNewSession">
          Submit
        </button>
      </form>
    </StyledAddSession>
  );
}

export default AddSession;
