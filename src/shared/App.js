import {useDispatch, useSelector} from "react-redux";
import { Route, Switch } from "react-router-dom";
import styled from "styled-components";
import "../App.css";
import LoginForm from '../components/LoginForm';
import Header from "./Header";
function App() {

  return (
    <div className="App">
      <Header></Header>
      <Switch>
        <Route path="/login" exact component={LoginForm} />
      </Switch>
    </div>
  );
}

export default App;

