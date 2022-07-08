import store from "../store";
import ByIndustrySearchPage from "../components/searches/ByIndustrySearch";
import ByHandleSearchPage from "../components/searches/ByHandleSearch";
import ByHashtagSearchPage from "../components/searches/ByHashtagSearch";

function SearchPage() {
  console.log(store.getState());
  if (store.getState()[0].id === "1") {
    return (
      <section>
        <ByIndustrySearchPage />
      </section>
    );
  } else if (store.getState()[0].id === "2") {
    return (
      <section>
        <ByHandleSearchPage />
      </section>
    );
  } else if (store.getState()[0].id === "3") {
    return (
      <section>
        <ByHashtagSearchPage />
      </section>
    );
  } else {
    return <section>"Search item not selected"</section>;
  }
}

export default SearchPage;
