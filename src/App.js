import React, { useEffect, useState } from "react";
import './App.css';
import Card from './component/Card';
function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("https://randomuser.me/api/?page=1&results=1&seed=abc")
      .then((response) => response.json())
      .then((data) => setUser(data.results[0]))
      .catch((error) => console.error("Error fetching user:", error));
  }, []);
  return (

    <div className="flex justify-center items-center min-h-screen bg-gray-100">
    {user ? <Card user={user} /> : <p>Loading...</p>}
  </div>
  

);
}

export default App;
