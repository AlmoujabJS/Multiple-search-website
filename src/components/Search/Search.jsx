import Paper from "../Paper/Paper";
import Select from "../Select/Select";
import { FiSearch } from "react-icons/fi";
import "./styles.css";

const ENGINES = {
  google: "https://www.google.com/search?q=",
  baidu: "https://www.baidu.com/s?ie=utf-8&f=8&rsv_bp=1&rsv_idx=1&tn=baidu&wd=",
  yandex: "https://yandex.com/search/?text=",
  bing: "https://www.bing.com/search?q="
};

const Search = () => {
  const SEARCH_ENGINES = ["Google", "Yandex", "Baidu", "Bing"];

  const handleSearch = (e) => {
    e.preventDefault();
    const selectedEngines = document
      .querySelector(".AMJ-Select")
      .dataset.value.split(",");
    const searchValue = new FormData(e.target).get("search");
    if (selectedEngines.length) {
      selectedEngines.forEach((engine) => {
        console.log(engine);
        const LINK = ENGINES[engine.toLowerCase().trim()];

        if (LINK && searchValue !== "") window.open(`${LINK}${searchValue}`);
      });
    }
  };

  return (
    <div className="container__search">
      <Paper className="search__paper" style={{ width: "max-content" }}>
        <form className="search__form" onSubmit={handleSearch}>
          <Select name="engines" list={SEARCH_ENGINES} />
          <span className="pipeline">|</span>
          <input
            name="search"
            className="search-box"
            type="text"
            placeholder="What are you looking for ?"
          />
          <button className="search__button">
            <FiSearch className="search__button__icon" />
          </button>
        </form>
      </Paper>
    </div>
  );
};

export default Search;
