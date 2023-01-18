import './App.css';
import { List } from './components/List/List';
import { Details } from './components/Details/Details';
import React, {useEffect, useState} from 'react';


function App() {
  const [listItem, setListItem] = useState([]);
  // const [info, setInfo] = useState(null);
  // const info = null;
  const [user, setUser] = useState();
  // const [loading, setLoading] = useState(false);



  const componentDidMount = () => {
    fetch('https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/users.json')
      .then(response => response.json())
      .then(data => setListItem(data))
      
  }
  useEffect(componentDidMount, [])

  const fetchUser =  ({target})  => {
    let url = `https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/${target.id}.json`;
    fetch(url)
      .then(response => response.json())
      .then(data => setUser(data))
  }
  return (
    <div className="App">
     <List open={fetchUser} data={listItem} />
     {user !== undefined && <Details info={user} />}
    </div>
  );
}

export default App;
