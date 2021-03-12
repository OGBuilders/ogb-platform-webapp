import { combineReducers } from "redux";
import contactReducer from "./contactReducer";

// Different reducers definition which is combined using combineRedeucer
// As our app grows more complex, we would want to split our reducing function into separate functions, each managing independent parts of the state. For this we use combineReducer()

export default combineReducers({
  customerContact: contactReducer,
});
