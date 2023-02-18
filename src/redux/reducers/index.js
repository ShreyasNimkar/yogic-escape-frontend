import { combineReducers } from "redux";
import eventReducer from "../slices/eventsSlice";

const rootReducer = combineReducers({
  events: eventReducer,
});

export default rootReducer;
