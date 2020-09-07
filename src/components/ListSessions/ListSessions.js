import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { AddClimb } from "../AddClimb";
import { AddDrylandWorkout } from "../AddDrylandWorkout";
import { StyledListSessions } from "./ListSessions.styled";

function ListSessions(props) {
  return (
    <StyledListSessions>
      <Router>
        <div>
          <ul>
            <li>Date: {props.date}</li>
            <li>Type: {props.type}</li>
            <li>Title: {props.title}</li>
            <li>Id: {props.key}</li>
          </ul>

          <Link to={`/${props.type}/${props.key}`}>Edit</Link>

          <Switch>
            <Route path="/climb">
              <AddClimb />
            </Route>
            <Route path="/dryland">
              <AddDrylandWorkout />
            </Route>
          </Switch>
        </div>
      </Router>
    </StyledListSessions>
  );
}

export default ListSessions;
