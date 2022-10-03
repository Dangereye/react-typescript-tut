import "./App.css";

// Components
import Greet from "./components/Greet";
import Heading from "./components/Heading";
import Oscar from "./components/Oscar";
import Person from "./components/Person";
import PersonList from "./components/PersonList";
import Status from "./components/Status";

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
        {/* <Greet name="Craig" messageCount={10} isLoggedIn={false} />
        <Person name={personName} />
        <PersonList names={personNamesList} />
        <Status status="loading" />
        <Heading>Placeholder text</Heading> */}
        <Oscar>
          <Heading>Oscar goes to Leonard Dicaprio!</Heading>
        </Oscar>
      </main>
    </div>
  );
}

export default App;
