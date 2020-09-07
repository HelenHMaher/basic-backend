import React from "react";
import { StyledListSessions } from "./ListSessions.styled";

function ListSessions(props) {
  return (
    <StyledListSessions>
      <ul>
        <li>Date: {props.date}</li>
        <li>Type: {props.type}</li>
        <li>Title: {props.title}</li>
      </ul>
    </StyledListSessions>
  );
}

export default ListSessions;
