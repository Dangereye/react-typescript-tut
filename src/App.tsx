import "./App.css";

// Context
import ThemeContextProvider from "./components/context/ThemeContext";
import UserContextProvider from "./components/context/UserContext";

// Components
import Greet from "./components/Greet";
import Heading from "./components/Heading";
import Input from "./components/Input";
import Oscar from "./components/Oscar";
import Person from "./components/Person";
import PersonList from "./components/PersonList";
import Counter from "./components/state/Counter";
import { LoggedIn } from "./components/state/LoggedIn";
import User from "./components/state/User";
import User2 from "./components/state/User2";
import Status from "./components/Status";
import Button from "./components/Button";
import Container from "./components/Container";
import Box from "./components/context/Box";
import User3 from "./components/context/User3";
import { Counter2 } from "./components/class/Counter2";
import AuthPrivate from "./components/auth/AuthPrivate";
import AuthProfile from "./components/auth/AuthProfile";
import GenList from "./components/generics/GenList";
import RandomNumber from "./components/restriction/RandomNumber";
import Toast from "./components/templateliterals/Toast";
import WrapButton from "./components/html/WrapButton";

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
        {/* <User /> */}
        {/* <User2 /> */}
        {/* <Counter /> */}
        {/* <ThemeContextProvider>
          <Box />
        </ThemeContextProvider> */}
        {/* <UserContextProvider>
          <User3 />
        </UserContextProvider> */}
        {/* <Counter2 message="The count value is " /> */}
        {/* <AuthPrivate isLoggedIn={true} component={AuthProfile} /> */}
        {/* <GenList
          items={["batman", "superman", "Wonder woman"]}
          onClick={(item) => console.log(item)}
        />
        <GenList items={[1, 2, 3]} onClick={(item) => console.log(item)} /> */}
        {/* <RandomNumber value={50} isPositive /> */}
        {/* <Toast position="center" /> */}
        <WrapButton variant="primary">Primary button</WrapButton>
      </main>
    </div>
  );
}

export default App;
