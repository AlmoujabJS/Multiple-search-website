import Header from "./components/Header/Header";
import Search from "./components/Search/Search";
import Main from "./components/Main/Main";
import "./styles.css";
export default function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <Main />
        <Search />
      </div>
    </div>
  );
}
