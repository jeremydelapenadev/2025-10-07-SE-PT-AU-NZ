import { useState, useEffect } from "react";
import { useData } from "../Hooks/useData"
import { useContext } from "react";
import { userContext } from "./UserProvider";

function ActivityFinder() {
  // Fetches a random activity
  const [participants, setParticipants] = useState(1);
  // const [activity, setActivity] = useState("");
  
  const {currentUser} = useContext(userContext)

  /* useEffect(() => {
    console.log("use effect called");
    fetch(
      "https://bored.api.lewagon.com/api/activity?" +
        "participants=" +
        participants,
    )
      .then((response) => response.json())
      .then((json) => {
        setActivity(json.activity);
      });
    return () => {
      console.log("cleanup called");
    };
  }, [participants]); */

  const data = useData("https://bored.api.lewagon.com/api/activity?participants="+participants,);

  const activity = data? data.activity : "not found";

  return (
    <>
    {currentUser.user?(
    <div className="ActivityFinder componentBox">
      <h3>Activity Finder</h3>
      <label>
        Choose number of participants:
        <select
          value={participants}
          onChange={(e) => setParticipants(e.target.value)}
        >
          <option>1</option>
          <option>2</option>
          <option>3</option>
        </select>
      </label>
      <div>
        <strong>Suggested Activity: </strong>
        {activity}
      </div>
    </div>)
    : (<p>No user has logged in.</p>)} </>
  );
}
// ++ Reference https://bored.api.lewagon.com/documentation and add a
// new dropdown to suggest an activity based on type

export default ActivityFinder;
