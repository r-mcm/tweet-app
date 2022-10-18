import AsyncAwait from "../components/AsyncAwait";
import store from "../store";

function ResultsPage() {
  console.log(store.getState());
  return (
    <div>
      <h1>Results page</h1>
      <AsyncAwait />
    </div>
  );
}

export default ResultsPage;
