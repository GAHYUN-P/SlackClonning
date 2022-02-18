import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { createBrowserHistory } from "history";
import { connectRouter } from "connected-react-router";

export const history = createBrowserHistory();

const rootReducer = combineReducers({
  router: connectRouter(history),
});

// const middlewares = [thunk];

const middlewares = [thunk.withExtraArgument({ history: history })];

const enhancer = applyMiddleware(...middlewares);

let store = (initialStore) => createStore(rootReducer, enhancer);

export default store();
