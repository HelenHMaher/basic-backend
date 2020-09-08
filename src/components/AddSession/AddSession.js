import React, { useState, useEffect } from "react";
import { StyledAddSession } from "./AddSession.styled";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AddDrylandWorkout } from "../AddDrylandWorkout";
import { AddClimb } from "../AddClimb";
import ListSessions from "../ListSessions";
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
            id: ele._id,
          });
        });
        console.log(
          sessionArray.sort((a, b) => {
            return new Date(b.date).getTime() - new Date(a.date).getTime();
          })
        );
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
      <Router>
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
    </StyledAddSession>
  );
}

export default AddSession;
