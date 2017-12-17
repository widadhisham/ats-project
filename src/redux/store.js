import { combineReducers } from "redux";
import thunkMiddleware from "redux-thunk";
import { createStore, applyMiddleware, compose } from "redux";
import { autoRehydrate } from "redux-persist";
import user from "./reducers/user";

const allReducers = combineReducers({
  user
});

const store = createStore(
  allReducers,
  compose(applyMiddleware(thunkMiddleware))
);

export default store;
