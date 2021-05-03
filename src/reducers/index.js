import { combineReducers } from "redux";
import Contact from "../reducers/contact.reducers";

const rootReducer = combineReducers({
  Contact: Contact,
});

export default rootReducer;
