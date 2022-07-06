import store from "../store";
import ByIndustrySearchPage from "../components/searches/ByIndustrySearch";
import ByHandleSearchPage from "../components/searches/ByHandleSearch";
import ByHashtagSearchPage from "../components/searches/ByHashtagSearch";

function SearchPage() {
  console.log(store.getState());
  return (
    <section>
      <ByIndustrySearchPage />
      <ByHandleSearchPage />
      <ByHashtagSearchPage />
    </section>
  );
}

export default SearchPage;
