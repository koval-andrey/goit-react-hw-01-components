import Profile from './components/social-profile/Profile';
import user from './components/social-profile/user.json';
import FriendsLists from './components/friend-list/FriendsLists';
import friends from './components/friend-list/friends.json';
import Statistics from './components/statistics/Statistics';
import stats from './components/statistics/statistical-data.json';
import TransactionHistory from './components/transaction-history/TransactionHistory';
import transactions from './components/transaction-history/transactions.json';



export default function App() {
  return (
      <div>
      < Profile
        avatar={user.avatar}
        name={user.name}
        tag={user.tag}
        location={user.location}
        stats={user.stats}/>
<FriendsLists friends={friends}/>
<Statistics stats={stats}/>
<TransactionHistory items={transactions}/>
    </div>
  );
}


