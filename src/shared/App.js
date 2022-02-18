import {useDispatch, useSelector} from "react-redux";
import { Route, Switch } from "react-router-dom";
import styled from "styled-components";
import "../App.css";
import Post from "../components/Post";
import Detail from "../pages/Detail";
import Main from "../pages/Main";
import Write from "../pages/Write";
import MainCs from "../pages/MainCs";
import MainJava from "../pages/MainJava";
import MainJavascript from "../pages/MainJavascript";
import MainReact from "../pages/MainReact";
import MainSpring from "../pages/MainSpring";
import MainEtc from "../pages/MainEtc";

function App() {

  return (
    <div className="App">
      <Switch>
        <Route exact path="/write">
          <Write />
        </Route>
        <Route path="/detail/:id">
          {/* axios연결 후 detail parameter연결 */}
          <Detail />
        </Route>
        <Route exact path="/">
          <Main />
        </Route>
        <Route exact path="/CS">
          <MainCs />
        </Route>
        <Route exact path="/Java">
          <MainJava/>
        </Route>
        <Route exact path="/JavaScript">
          <MainJavascript/>
        </Route>
        <Route exact path="/React">
          <MainReact/>
        </Route>
        <Route exact path="/Spring">
          <MainSpring/>
        </Route>
        <Route exact path="/etc">
          <MainEtc/>
        </Route>
      </Switch>
    </div>
  );
}

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.backgroundColor};
`;

const Title = styled.h1`
  color: ${(props) => props.theme.textColor};
`;

export default App;

