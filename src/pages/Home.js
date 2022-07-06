import SearchList from "../components/searches/SearchList";

const SEARCH_OPTIONS = [
  {
    id: "1",
    title: "Search by industry",
  },
  {
    id: "2",
    title: "Search by Twitter handle",
  },
  {
    id: "3",
    title: "Search by hashtag",
  },
];

function HomePage() {
  return (
    <section>
      <h1>Tweets App</h1>
      <SearchList searches={SEARCH_OPTIONS} />
    </section>
  );
}

export default HomePage;
