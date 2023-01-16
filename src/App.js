import './App.css';
import { List } from './components/List/List';
import { Details } from './components/Details/Details';
import React, {useEffect, useState} from 'react';


function App() {
  const [listItem, setListItem] = useState([]);
  const [info, setInfo] = useState();

  const componentDidMount = () => {
    fetch('https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/users.json')
      .then(response => response.json())
      .then(data => setListItem(data))
  }
  useEffect(componentDidMount, [])

  function handleItemClick({target}) {
    setInfo({id: target.id, name: target.textContent});
  }

  return (
    <div className="App">
      <List open={handleItemClick} data={listItem} />
      {info ? <Details info={info} /> : null}
      {/* <Details info={info} /> */}
    </div>
  );
}

export default App;
