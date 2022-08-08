import { debounce, isEmpty, orderBy } from "lodash";
import { useCallback, useEffect, useMemo, useState } from "react";
import "./App.css";
import useFetchGithubRepos from "./App.hooks";
import RepoList from "./components/RepoList.component";
import SearchInput from "./components/SearchInput.component";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [repoCollection, setRepoCollection] = useState([]);
  const [sortType, setSortType] = useState("asc");
  const [pageSize, setPageSize] = useState(10);
  const fetchRepos = useFetchGithubRepos(inputValue, pageSize);

  useEffect(() => {
    if (!isEmpty(inputValue))
      fetchRepos.then((data) => {
        setRepoCollection(orderBy(data, ["name"], sortType));
      });
  }, [inputValue, pageSize]);

  const handleSearchChange = (e) => {
    const { value } = e.target;
    setInputValue(value);
  };

  const handleSort = () => {
    const sortedCollection = orderBy(repoCollection, ["name"], sortType);
    console.log("sort tp: ", sortType, sortedCollection);
    setSortType(sortType === "asc" ? "desc" : "asc");
    setRepoCollection(sortedCollection);
  };

  const debouncedHandleSearch = debounce(handleSearchChange, 300);

  return (
    <div className="App">
      <h1>Repo Search</h1>
      <SearchInput handleSearchChange={debouncedHandleSearch} />
      <u
        onClick={handleSort}
        style={{ cursor: "pointer", marginBottom: 10, marginTop: 10 }}
      >
        Sort {sortType === "desc" ? "DESC" : "ASC"}
      </u>
      <label>Page Size: </label>
      <select
        onChange={(e) => setPageSize(e.target.value)}
        placeholder="Select Page Size"
      >
        <option value="10" selected>
          10
        </option>
        <option value="20">20</option>
        <option value="50">50</option>
        <option value="100">100</option>
      </select>
      <br />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <RepoList repoCollection={repoCollection} />
      </div>
    </div>
  );
}

export default App;
