import { combineReducers } from "redux";

import chapters from "../slices/chapters";
import { visibilityFilter } from "./visibilityFilter";
import undoable, { excludeAction } from "redux-undo";

export default combineReducers({
  chapters: undoable(chapters, {
    filter: excludeAction([
      "chapters/fetchChapters/pending",
      "chapters/addChapter/pending",
      "chapters/editChapter/pending",
      "chapters/deleteChapter/pending",
      "chapters/addSubsection/pending",
      "chapters/editSubsection/pending",
      "chapters/deleteSubsection/pending",
    ]),
  }),
  visibilityFilter,
});
