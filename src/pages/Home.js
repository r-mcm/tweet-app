import SearchList from "../components/searches/SearchList";

// props for the search options used in SearchList
const SEARCH_OPTIONS = [
  {
    id: "1",
    title: "Search by Industry",
  },
  {
    id: "2",
    title: "Search by Twitter Handle",
  },
  {
    id: "3",
    title: "Search by Hashtag",
  },
];

// Title and searchList component
function HomePage() {
  return (
    <section>
      <h1>Tweets App</h1>
      <SearchList searches={SEARCH_OPTIONS} />
    </section>
  );
}

export default HomePage;
