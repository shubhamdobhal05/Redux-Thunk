import Register from './components/Register/Register';
import Login from "./components/Login/Login";
import Dashboard from "./components/Dashboard/Dashboard";
import {Routes, Route} from "react-router-dom";

function App() {
  return (
    <div>
        <Routes>
          <Route exact path= "/" element = {<Register/>}></Route>
          <Route exact path= "/login" element = {<Login/>}></Route>
          <Route path= "/dashboard" element = {<Dashboard/>}></Route>
          
          
        </Routes>
    </div>
  );
}

export default App;
