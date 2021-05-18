import "./App.css";
import { Question1, Question2, Question3, Question4, Question5 } from "./components";
import Home from "./components/reactjs3/Home";
import Profile from "./components/reactjs3/Profile";

function App() {
  return (
    <div className="App">
      <Question1 /><hr/>
      <Question2 /><hr/>
      <Question3/><hr/>
      <Question4/><hr/>
      <Home/>
      <Profile/><hr/>
      <Question5/>
    </div>
  );
}

export default App;
