import logo from './logo.svg';
import './App.css';
import  Navigation  from "./component/Navigation"
import  Saving from "./component/Saving"
import How from "./component/How"

function App() {
  return (
    <div className="App">
      < Navigation />
      < Saving />
      < How />
    </div>
  );
}

export default App;
