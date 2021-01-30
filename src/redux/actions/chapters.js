import * as chaptersActions from "../actionTypes/chapters";
import { API_CALL } from "../middleware/API";

export const addChapter = (payload) => ({
  [API_CALL]: {
    endpoint: "/chapters",
    method: "POST",
    payload,
    types: [
      chaptersActions.ADD_CHAPTER_REQUEST,
      chaptersActions.ADD_CHAPTER_SUCCESS,
      chaptersActions.ADD_CHAPTER_FAILURE,
    ],
  }
});

export const addSubsection = (chapterId, payload) => ({
  [API_CALL]: {
    endpoint: `/chapters/${chapterId}/subsections`,
    method: "POST",
    payload,
    types: [
      chaptersActions.ADD_SUBSECTION_REQUEST,
      chaptersActions.ADD_SUBSECTION_SUCCESS,
      chaptersActions.ADD_SUBSECTION_FAILURE,
    ],
  },
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
    endpoint: "/chapters?fetchchildren=true&sort=sort",
    method: "GET",
    types: [
      chaptersActions.FETCH_CHAPTERS_REQUEST,
      chaptersActions.FETCH_CHAPTERS_SUCCESS,
      chaptersActions.FETCH_CHAPTERS_FAILURE,
    ],
  },
});