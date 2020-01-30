import React, {useState} from "react";

const TeamForm = props => {
  console.log("props", props);  
  const [teamMember, setTeamMember] = useState({
    name: "",
  });

  const handleChanges = e => {
    console.log(teamMember);
    setTeamMember({
      ...teamMember,
      [e.target.name]: e.target.value
    });
  };

  const submitForm = e => {
    e.preventDefault();
    props.addNewMember(teamMember);
    setTeamMember({ name: ""});
  };

  return (
    <form onSubmit={submitForm}>
      <label htmlFor="name">New member name</label>
      <input
        id="name"
        type="text"
        name="name"
        onChange={handleChanges}
        value={teamMember.name}
      />
      <button type="submit">Add TeamMember</button>
    </form>
  );
};

export default TeamForm;
