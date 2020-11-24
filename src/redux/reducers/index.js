import { combineReducers } from "redux";

import { chapters } from "./chapters";
import { visibilityFilter } from "./visibilityFilter";

import undoable from "redux-undo";

export default combineReducers({
  chapters: undoable(chapters),
  visibilityFilter,
});
