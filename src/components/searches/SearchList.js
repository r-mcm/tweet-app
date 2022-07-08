import SearchItem from "./SearchItem";
import classes from "./SearchList.module.css";

// List of search options mapped from the searchItems
function SearchList(props) {
  return (
    <ul className={classes.list}>
      {props.searches.map((search) => (
        <SearchItem key={search.id} id={search.id} title={search.title} />
      ))}
    </ul>
  );
}

export default SearchList;
