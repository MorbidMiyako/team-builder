import React from "react";

const TeamMembers = props => {
  console.log(props)
  console.log("hit return of TeamMembers")
  return (
    <div >
      {props.teamMembers.map(teamMembers => {
        console.log("reran .map function", teamMembers)
        return (
        <div  key={teamMembers.id}>
          <h2>{teamMembers.name}</h2>
        </div>
  )})}
    </div>
  );
};

export default TeamMembers;
