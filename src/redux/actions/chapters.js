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
  },
});

export const editChapter = (chapterId, payload) => ({
  [API_CALL]: {
    endpoint: `/chapters/${chapterId}`,
    method: "PATCH",
    payload,
    types: [
      chaptersActions.EDIT_CHAPTER_REQUEST,
      chaptersActions.EDIT_CHAPTER_SUCCESS,
      chaptersActions.EDIT_CHAPTER_FAILURE,
    ],
  },
});

// child elements should be deleted on serverside
// I didn't find method in restbio API to do it by request
export const deleteChapter = (chapterId) => ({
  [API_CALL]: {
    endpoint: `/chapters/${chapterId}`,
    method: "DELETE",
    types: [
      chaptersActions.DELETE_CHAPTER_REQUEST,
      chaptersActions.DELETE_CHAPTER_SUCCESS,
      chaptersActions.DELETE_CHAPTER_FAILURE,
    ],
  },
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

export const editSubsection = (subsection, payload) => ({
  [API_CALL]: {
    endpoint: `/subsections/${subsection}`,
    method: "PATCH",
    payload,
    types: [
      chaptersActions.EDIT_SUBSECTION_REQUEST,
      chaptersActions.EDIT_SUBSECTION_SUCCESS,
      chaptersActions.EDIT_SUBSECTION_FAILURE,
    ],
  },
});

//wierd network error when trying to use normal nested route for API
// + CORS alert
export const deleteSubsection = (subsectionId) => ({
  [API_CALL]: {
    endpoint: `/subsections/${subsectionId}`,
    method: "DELETE",
    types: [
      chaptersActions.DELETE_SUBSECTION_REQUEST,
      chaptersActions.DELETE_SUBSECTION_SUCCESS,
      chaptersActions.DELETE_SUBSECTION_FAILURE,
    ],
  },
});

export const toggleChapter = (idx) => ({
  type: chaptersActions.TOGGLE_CHAPTER_READY,
  idx,
});
export const toggleSubsection = (chapterId, sectionId) => ({
  type: chaptersActions.TOGGLE_SUBSECTION_READY,
  chapterId,
  sectionId,
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
