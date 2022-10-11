import React, { useEffect, useState } from "react";

var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
  query: "innovation",
});

var requestOptions = {
  method: "POST",
  headers: myHeaders,
  body: raw,
  redirect: "follow",
};

const AsyncAwait = () => {
  const [users, setUsers] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  console.log(users);

  const fetchData = async () => {
    const response = await fetch(
      "http://localhost:5000/twitter",
      requestOptions
    );
    const results = await response.json();
    setIsLoaded(true);
    setUsers(results.data);
    console.log(results.data);
    console.log(typeof results);
    console.log(typeof users);
  };

  useEffect(() => {
    fetchData();
    console.log(users);
  }, []);

  return (
    <div>
      {!isLoaded && <p>loading...</p>}
      {isLoaded && <p>loaded</p>}
    </div>
  );
};

export default AsyncAwait;
