import Card from "../ui/Card";
import classes from "./SearchItem.module.css";
import { Link } from "react-router-dom";

import store from "../../store.js";

// Dispatches the selected search ID to the store
function searchSelector(selected) {
  store.dispatch({
    type: "searchSelected",
    payload: {
      id: selected,
      description: "search selected",
    },
  });
}

// Generate cards to populate search list, button onclick passes prop to searchSelector functions
function SearchItem(props) {
  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.content}>
          <h3>{props.title}</h3>
        </div>
        <div className={classes.actions}>
          <Link to="/search">
            <button
              onClick={() => {
                searchSelector(props.id);
              }}
            >
              Search {props.id}
            </button>
          </Link>
        </div>
      </Card>
    </li>
  );
}

export default SearchItem;
