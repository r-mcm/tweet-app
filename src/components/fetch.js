// import React from "react";
// // import { formData } from "./searches/ByHashtagSearch";
// // import store from "../store";

// class Fetch extends React.Component {
//   state = { isLoaded: false, models: [] };

//   componentDidMount() {
//     // console.log(store.getState());
//     var myHeaders = new Headers();
//     myHeaders.append("Content-Type", "application/json");

//     var raw = JSON.stringify({
//       query: "football",
//     });

//     var requestOptions = {
//       method: "POST",
//       headers: myHeaders,
//       body: raw,
//       redirect: "follow",
//     };

//     fetch("http://localhost:5000/twitter", requestOptions)
//       .then((response) => response.text())
//       .then((result) => console.log(result))
//       .catch((error) => console.log("error", error))
//       .then((res) => {
//         if (res.ok) {
//           return res.json();
//         } else {
//           throw Error(res.statusText);
//         }
//       })
//       .then((json) => {
//         this.setState({
//           models: json.results,
//           isLoaded: true,
//         });
//       });
//   }

//   render() {
//     const { isLoaded, models } = this.state;

//     if (!isLoaded) {
//       return <div>Loading...</div>;
//     }

//     return (
//       <div>
//         {models.map((model) => (
//           <div key={model.tweetid}>{model.text}</div>
//         ))}
//       </div>
//     );
//   }
// }

// export default Fetch;
