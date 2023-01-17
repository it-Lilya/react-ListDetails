import './App.css';
import { List } from './components/List/List';
import { Details } from './components/Details/Details';
import React, {useEffect, useRef, useState} from 'react';


function App() {
  const [listItem, setListItem] = useState([]);
  const [info, setInfo] = useState(null);
  const [user, setUser] = useState({});


  const componentDidMount = () => {
    fetch('https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/users.json')
      .then(response => response.json())
      .then(data => setListItem(data))
  }
  useEffect(componentDidMount, [])

  function handleItemClick({target}) {
    setInfo({id: target.id, name: target.textContent});
  }


  useEffect(() => {
    if (info !== null) {
      let url = `https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/${info.id}.json`;
      fetch(url)
        .then(response => response.json())
        .then(data => setUser(data));
    } 
  }, [info])
  
// console.log(user.id)
  // const isInitialMount = useRef(true);
  // useEffect(() => {
  //     if (isInitialMount.current) {
  //       isInitialMount.current = false;
  //     } else {
  //       if (info !== null) {
  //         let url = `https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/${info.id}.json`;
  //         console.log(url)
  //         fetch(url)
  //           .then((response) => response.json())
  //           .then((data) => setUser(data));
  //         isInitialMount.current = true;
  //       }
  //     }
  // });

  return (
    <div className="App">
     <List open={handleItemClick} data={listItem} />
      {info == null ? "loading..." : <Details info={user} />}
      {/* {info !== null ? 'Loading...' : <Details info={user} />} */}
    </div>
  );
}

export default App;
