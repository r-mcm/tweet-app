import store from "../../store.js";
import Card from "../ui/Card";
import classes from "./SearchItem.module.css";
import { Link } from "react-router-dom";
import React, { useState } from "react";

//TODO dispatch the searchTermselector action to the store
// pass what is entered in the form as a prop to that action
//Fix the store not updating without a refresh
// https://linguinecode.com/post/how-to-get-form-data-on-submit-in-reactjs
// https://www.freecodecamp.org/news/pass-data-between-components-in-react/

function searchQuerySelector(query) {
  store.dispatch({
    type: "searchQuery",
    payload: {
      query,
    },
  });
}

function ByHashtagSearchPage() {
  console.log(store.getState());
  const initialFormData = Object.freeze({
    query: "",
  });

  const [formData, updateFormData] = React.useState(initialFormData);

  const handleChange = (e) => {
    updateFormData({
      ...formData,

      // Trimming any whitespace
      [e.target.name]: e.target.value.trim(),
    });
  };

  const handleSubmit = (e) => {
    searchQuerySelector(formData);
    console.log(formData);

    // e.preventDefault();
    // ... submit to API or something
  };

  return (
    <Card>
      <div className={classes.content}>
        <h3>Search by Hashtag</h3>
      </div>
      <div>
        <p>Please enter the hashtag you wish to search, i.e. #innovation </p>
        {/* <input type="text" name="term" /> */}
        <input name="query" onChange={handleChange} />
      </div>
      <div className={classes.actions}>
        <Link to="/results">
          <button
            onClick={() => {
              handleSubmit();
            }}
          >
            Search
          </button>
        </Link>
      </div>
    </Card>
  );
}

export var result;
export default ByHashtagSearchPage;
