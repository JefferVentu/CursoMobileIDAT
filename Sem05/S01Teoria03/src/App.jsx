import "./App.css"
import React, { useEffect, useState } from 'react'

const App = () => {
  const [data, setData] = useState([]);
  
  useEffect(() => {
    fetch("https://random-data-api.com/api/users/random_user")
      .then(response => response.json())
      .then(data => setData([data])); 
  }, []);

  return (
    <div>
      {data.map((item, index) => (
        <p key={index}>{item.first_name}</p>
      ))}
    </div>
  );
}

export default App
