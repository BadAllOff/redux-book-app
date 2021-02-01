import { combineReducers } from "redux";

import { chapters } from "./chapters";
import { visibilityFilter } from "./visibilityFilter";
import * as actionTypes from "../actionTypes/chapters";

import undoable, { excludeAction } from "redux-undo";

export default combineReducers({
  chapters: undoable(chapters, {
    filter: excludeAction([
      actionTypes.FETCH_CHAPTERS_REQUEST,
      actionTypes.ADD_CHAPTER_REQUEST,
      actionTypes.DELETE_CHAPTER_REQUEST,
      actionTypes.EDIT_CHAPTER_REQUEST,
      actionTypes.ADD_SUBSECTION_REQUEST,
      actionTypes.EDIT_SUBSECTION_REQUEST,
      actionTypes.DELETE_SUBSECTION_REQUEST,
    ]),
  }),
  visibilityFilter,
});
