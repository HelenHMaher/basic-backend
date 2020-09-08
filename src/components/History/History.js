import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AddDrylandWorkout } from "../AddDrylandWorkout";
import { AddClimb } from "../AddClimb";
import ListSessions from "../ListSessions";
import axios from "axios";
import { StyledHistory } from "./History.styled";

function History() {
  const [sessions, setSessions] = useState([{ date: "", type: "", title: "" }]);

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