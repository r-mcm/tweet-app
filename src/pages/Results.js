import AsyncAwait from "../components/AsyncAwait";
import Fetch from "../components/fetch";
import store from "../store";
// import { formData } from "../components/searches/ByHashtagSearch";

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
