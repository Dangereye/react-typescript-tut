import "./App.css";

// Components
import Greet from "./components/Greet";
import Person from "./components/Person";
import PersonList from "./components/PersonList";

function App() {
  const personName = {
    first: "Bruce",
    last: "Wayne",
  };

  const personNamesList = [
    { first: "Peter", last: "Parker" },
    { first: "Clark", last: "Kent" },
    { first: "Bruce", last: "Banner" },
  ];

  return (
    <div className="App">
      <main>
        <Greet name="Craig" messageCount={10} isLoggedIn={false} />
        <Person name={personName} />
        <PersonList names={personNamesList} />
      </main>
    </div>
  );
}

export default App;
