import {useDispatch, useSelector} from "react-redux";
import { Route, Switch } from "react-router-dom";
import styled from "styled-components";
import "../App.css";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Workspace from "./Workspace";

function App() {

  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={Workspace} />
        <Route path="/login" exact component={Login} />
        <Route path="/signup" exact component={Signup} />
      </Switch>
    </div>
  );
}

export default App;

