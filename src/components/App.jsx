import '/reset.css'
import React from "react";
import Profile from "./Profile/Profile";
import userData from "../userData.json";
import FriendList from './Friends/FriendsList';
import friends from './friends.json';

const App = () => {
  return (
    <div>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
            <FriendList friends={friends} />
    </div>
  );
};

export default App;

  
  