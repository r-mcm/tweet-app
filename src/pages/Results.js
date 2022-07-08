import store from "../store";

function ResultsPage() {
  console.log(store.getState());
  return <div>Results Page</div>;
}

export default ResultsPage;
