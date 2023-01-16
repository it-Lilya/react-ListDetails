import React, {useState, useEffect} from "react";
import './Details.css';

export function Details({info}) {
  const [user, setUser] = useState({});

  const handle = () => {
    let url = `https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/${info.id}.json`;
      fetch(url)
        .then(response => response.json())
        .then(data => setUser(data))
  }
  useEffect(handle, [info.id]);
  console.log(user.details)
  
  return (
    <div className="details">
      <img src={`${user.avatar}?${Math.random()}`} alt='...' />
        {/* <div className="container">
          <h3 className="element">{user.name}</h3>
          <p className="element">City: {user.details.city}</p>
          <p className="element">Company: {user.details.company}</p>
          <p className="element">Position: {user.details.position}</p>
        </div> */}
    </div>
  );
}
