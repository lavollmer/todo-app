import "./App.css";
import Todo from "./component/Todo";
import Header from "./component/Header";

function App() {
  return (
    <>
      <div className="bg-black">
        <Header />
        <Todo />
      </div>
    </>
  );
}

export default App;
