import React, { useState, useEffect } from "react";
import { StyledAddSession } from "./AddSession.styled";
import axios from "axios";

function AddSession() {
  const [sessions, setSessions] = useState([{ date: "", type: "", title: "" }]);

  //get sessions
  function getSessions() {
    axios({
      method: "GET",
      url: "/api/session/",
    })
      .then((response) => {
        const sessionArray = [];
        response.data.forEach((ele) => {
          sessionArray.push({
            date: ele.date,
            type: ele.type,
            title: ele.title,
          });
        });
        console.log(sessionArray);
        if (sessions.length !== sessionArray.length) setSessions(sessionArray);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    getSessions();
  }, [sessions]);

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
      <div>
        <ul>
          <li>Date: {sessions[0]["date"]}</li>
          <li>Type: {sessions[0]["type"]}</li>
          <li>Title: {sessions[0]["title"]}</li>
        </ul>
      </div>
    </StyledAddSession>
  );
}

export default AddSession;
