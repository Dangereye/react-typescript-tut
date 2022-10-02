import "./App.css";

// Components
import { Greet } from "./components/Greet";

function App() {
  return (
    <div className="App">
      <main>
        <Greet name="Craig" messageCount={10} isLoggedIn={false} />
      </main>
    </div>
  );
}

export default App;
