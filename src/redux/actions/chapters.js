import * as chaptersActions from "../actionTypes/chapters";
import { API_CALL } from "../middleware/API";

export const addChapter = (title) => ({
  type: chaptersActions.ADD_CHAPTER,
  title,
});

export const addSubsection = (chapId, title) => ({
  type: chaptersActions.ADD_SUBSECTION,
  chapId,
  title,
});
export const toggleChapter = (idx) => ({
  type: chaptersActions.TOGGLE_CHAPTER_READY,
  idx,
});
export const toggleSubsection = (idx, sectionIdx) => ({
  type: chaptersActions.TOGGLE_SUBSECTION_READY,
  idx,
  sectionIdx,
});

export const fetchChapters = () => ({
  [API_CALL]: {
    endpoint: "/chapters?fetchchildren=true",
    method: "GET",
    types: [
      chaptersActions.FETCH_CHAPTERS_REQUEST,
      chaptersActions.FETCH_CHAPTERS_SUCCESS,
      chaptersActions.FETCH_CHAPTERS_FAILURE,
    ],
  },
});