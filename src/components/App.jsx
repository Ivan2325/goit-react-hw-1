import '/reset.css'
import Profile from "./Profile/Profile";
import userData from "/userData.json";
import FriendList from './Friends/FriendsList';
import friends from '/friends.json';
import transactions from "/transactions.json";
import TransactionHistory from './Transaction/TransactionHistory' ;

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
            <TransactionHistory items={transactions} />
    </div>
  );
};

export default App;

  
  