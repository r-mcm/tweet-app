import store from "../../store.js";
import Card from "../ui/Card";
import classes from "./SearchItem.module.css";
import { Link } from "react-router-dom";

//TODO dispatch the searchTermselector action to the store
// pass what is entered in the form as a prop to that action
//Fix the store not updating without a refresh

function searchTermSelector(term) {
  store.dispatch({
    type: "searchTerm",
    payload: {
      term: term,
    },
  });
}

function ByHashtagSearchPage(props) {
  console.log(store.getState());
  return (
    <Card>
      <div className={classes.content}>
        <h3>Search by Hashtag</h3>
      </div>
      <div>
        <p>Please enter the hahstag you wish to search, i.e. #innovation </p>
        <input type="text" name="term" />
      </div>
      <div className={classes.actions}>
        <Link to="/results">
          <button
            onClick={() => {
              searchTermSelector(props.term);
            }}
          >
            Search {props.term}
          </button>
        </Link>
      </div>
    </Card>
  );
}
export default ByHashtagSearchPage;
