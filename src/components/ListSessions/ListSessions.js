import React from "react";
import PropTypes from "prop-types";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { AddClimb } from "../AddClimb";
import { AddDrylandWorkout } from "../AddDrylandWorkout";
import { StyledListSessions } from "./ListSessions.styled";

function ListSessions(props) {
  const { date, type, title, id } = props;

  return (
    <StyledListSessions>
      <Router>
        <div>
          <ul>
            <li>Date: {date}</li>
            <li>Type: {type}</li>
            <li>Title: {title}</li>
            <li>Id: {id}</li>
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

ListSessions.propTypes = {
  date: PropTypes.string,
  type: PropTypes.string,
  title: PropTypes.string,
  id: PropTypes.string,
};
