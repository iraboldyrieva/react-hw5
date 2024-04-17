import "./App.css";
import UseEffectComponent from "./components/UseEffectComponent";
import UseLayoutEffectComponent from "./components/UseLayoutEffectComponent";
import UseReducerComponent from "./components/UseReducerComponent";
import UseRefComponent from "./components/UseRefComponent";
import UseStateComponent from "./components/UseStateComponent";

function App() {
  return (
    <div className="App">
      <UseEffectComponent />
      <UseStateComponent />
      <UseReducerComponent />
      <UseRefComponent />
      <UseLayoutEffectComponent />
    </div>
  );
}

export default App;
