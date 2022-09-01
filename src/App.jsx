import "./App.scss";
import FormCOmponent from "./components/Form/FormCOmponent";

function App() {
  return (
    <div className="App">
      <div className="text-div">
        <h1>Learn to code by watching others</h1>
        <p>
          See how experienced developers solve problems in real-time. Watching
          scripted tutorials is great, but understanding how developers think is
          invaluable.
        </p>
      </div>
      <div className="form-div">
        <FormCOmponent />
      </div>
    </div>
  );
}

export default App;
