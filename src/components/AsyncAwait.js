import React, { useEffect, useState } from "react";
import { TwitterTweetEmbed } from "react-twitter-embed";

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

  const fetchData = async () => {
    const response = await fetch(
      "http://localhost:5000/twitter",
      requestOptions
    );
    const results = await response.json();
    setIsLoaded(true);
    const arr = [];
    for (let i = 0; i < Object.keys(results.data).length; i++) {
      // console.log(results.data[i]);
      arr.push(results.data[i]);
    }
    setUsers(arr);
    console.log(results);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      {!isLoaded && <p>loading...</p>}
      {isLoaded && (
        <React.Fragment>
          {users.map((user) => (
            <TwitterTweetEmbed tweetId={user.tweetid} />
          ))}
        </React.Fragment>
      )}
    </div>
  );
};

export default AsyncAwait;
