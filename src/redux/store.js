import { combineReducers } from "redux";
import thunkMiddleware from "redux-thunk";
import { createStore, applyMiddleware, compose } from "redux";
import { autoRehydrate } from "redux-persist";
import user from "./reducers/user";
import modal from "./reducers/modal";
import plant from "./reducers/plant";

const allReducers = combineReducers({
  user,
  modal,
  plant
});

const store = createStore(
  allReducers,
  compose(applyMiddleware(thunkMiddleware))
);

export default store;
