import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/Home";
import SearchPage from "./pages/Search";
import ResultsPage from "./pages/Results";
import Layout from "./components/layout/Layout";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/results" element={<ResultsPage />} />
        </Routes>
      </Layout>
    </Provider>
  );
}

export default App;
