import "./App.css";
import Header from "./components/Header";
import Content from "./components/Content";

function App() {
  return (
    <div className="App bg-stone-700">
      <div className="container ">
        <Header />
        <Content />
      </div>
    </div>
  );
}

export default App;
