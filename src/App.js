import logo from './logo.svg';
import './App.css';
import  Navigation  from "./component/Navigation"
import  Saving from "./component/Saving"
import How from "./component/How"
import LoanAccess from "./component/LoanAccess"
import Internship from "./component/Internship"
import Rate from "./component/Rate"
import Packages from "./component/Packages"


function App() {
  return (
    <div className="App">
      < Navigation />
      < Saving />
      < How />
      < LoanAccess />
      < Internship />
      < Rate />
      < Packages />
      
    </div>
  );
}

export default App;
