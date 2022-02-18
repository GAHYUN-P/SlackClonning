import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { createBrowserHistory } from "history";
import { connectRouter } from "connected-react-router";

import post from "./modules/post";
import category from "./modules/category";
import Comment from "./modules/comment";
import contributor from "./modules/contributor";

export const history = createBrowserHistory();

const rootReducer = combineReducers({
  post: post,
  category: category,
  router: connectRouter(history),
  comment: Comment,
  contributor: contributor,
});

// const middlewares = [thunk];

const middlewares = [thunk.withExtraArgument({ history: history })];

const enhancer = applyMiddleware(...middlewares);

let store = (initialStore) => createStore(rootReducer, enhancer);

export default store();
