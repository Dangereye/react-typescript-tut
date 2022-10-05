import "./App.css";
import Button from "./components/Button";
import Container from "./components/Container";

// Components
import Greet from "./components/Greet";
import Heading from "./components/Heading";
import Input from "./components/Input";
import Oscar from "./components/Oscar";
import Person from "./components/Person";
import PersonList from "./components/PersonList";
import { LoggedIn } from "./components/state/LoggedIn";
import User from "./components/state/User";
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
        {/* <Greet name="Craig" isLoggedIn={true} /> */}
        {/* <Person name={personName} />*/}
        {/* <PersonList names={personNamesList} /> */}
        {/* <Status status="loading" />
        <Heading>Placeholder text</Heading> 
        <Oscar>
          <Heading>Oscar goes to Leonard Dicaprio!</Heading>
        </Oscar> */}
        {/* <Button
          handleClick={(event, id) => {
            console.log("Button Clicked", event, id);
          }}
        />
        <Input value="" handleChange={(event) => console.log(event)} /> */}
        {/* <Container styles={{ border: "1px solid black", padding: "1rem" }} /> */}
        {/* <LoggedIn /> */}
        <User />
      </main>
    </div>
  );
}

export default App;
