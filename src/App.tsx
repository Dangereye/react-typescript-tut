import "./App.css";

// Components
import Greet from "./components/Greet";
import Person from "./components/Person";

function App() {
  const personName = {
    first: "Bruce",
    last: "Wayne",
  };

  return (
    <div className="App">
      <main>
        <Greet name="Craig" messageCount={10} isLoggedIn={false} />
        <Person name={personName} />
      </main>
    </div>
  );
}

export default App;
