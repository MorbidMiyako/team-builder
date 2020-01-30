import React, { useState } from "react";
import TeamMembers from "./components/TeamMembers"
import TeamForm from "./components/TeamForm";


function App() {
  console.log("reran App")
  const [teamMembers, setTeamMembers] = useState([
    {
      id: 1,
      name: "Bernd de Kruik",
    }
  ]);

  const addNewMember = member => {
    const newMember = {
      id: Date.now(),
      name: member.name,
    };
    setTeamMembers([...teamMembers, newMember]);
  };

  return (
 <div className="App">
      <h1>The A Team</h1>
      <TeamForm addNewMember={addNewMember} />
      <TeamMembers teamMembers={teamMembers} />
    </div>
    );
}

export default App;
