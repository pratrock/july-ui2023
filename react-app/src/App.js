import "./App.css";
import Greet from "./components/Greet";
import { Header } from "./components/Header";
import Parent from "./components/Parent";
import Welcome from "./components/Welcome";

function App() {
  const para = <p>Hello</p>;
  return (
    <div className="App">
      {/*  <Header>
        <div>
          <p>Hello people</p>
          <button>Click</button>
        </div>
      </Header>
      <div> {para}</div>
      <Welcome></Welcome>
      <Greet /> */}
      <Parent />
    </div>
  );
}

export default App;
