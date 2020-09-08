import React from "react";
import PropTypes from "prop-types";
import { BrowserRouter as Router, Link } from "react-router-dom";
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

          <Link to={`/${type}/${id}`}>Edit</Link>
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
