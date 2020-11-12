import { combineReducers } from "redux";

import {chapters} from "./chapters";
import {visibilityFilter} from "./visibilityFilter";

export default combineReducers({
  chapters,
  visibilityFilter,
});
