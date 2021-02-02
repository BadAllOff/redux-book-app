import axios from "axios";
import * as chaptersActions from "../actionTypes/chapters";
import { API_CALL } from "../middleware/API";

export const addChapter = (payload) => (dispatch) => {
  dispatch({
    type: chaptersActions.ADD_CHAPTER_REQUEST,
  });

  return axios({
    url: `https://chapters-7962.restdb.io/rest/chapters`,
    method: "POST",
    data: payload,
    headers: { "x-apikey": "6011eda11346a1524ff12eca" },
  })
    .then((res) => {
      return dispatch({
        type: chaptersActions.ADD_CHAPTER_SUCCESS,
        response: res.data,
      });
    })
    .catch((res) =>
      dispatch({
        type: chaptersActions.ADD_CHAPTER_FAILURE,
        response: res.data,
      })
    );
};

export const editChapter = (chapterId, payload) => (dispatch) => {
  dispatch({
    type: chaptersActions.EDIT_CHAPTER_REQUEST,
  });

  return axios({
    url: `https://chapters-7962.restdb.io/rest/chapters/${chapterId}`,
    method: "PATCH",
    data: payload,
    headers: { "x-apikey": "6011eda11346a1524ff12eca" },
  })
    .then((res) => {
      return dispatch({
        type: chaptersActions.EDIT_CHAPTER_SUCCESS,
        response: res.data,
      });
    })
    .catch((res) =>
      dispatch({
        type: chaptersActions.EDIT_CHAPTER_FAILURE,
        response: res.data,
      })
    );
};

// child elements should be deleted on serverside
// I didn't find method in restbio API to do it by request
export const deleteChapter = (chapterId) => (dispatch) => {
  dispatch({
    type: chaptersActions.DELETE_CHAPTER_REQUEST,
  });

  return axios({
    url: `https://chapters-7962.restdb.io/rest/chapters/${chapterId}`,
    method: "DELETE",
    headers: { "x-apikey": "6011eda11346a1524ff12eca" },
  })
    .then((res) => {
      return dispatch({
        type: chaptersActions.DELETE_CHAPTER_SUCCESS,
        response: res.data,
      });
    })
    .catch((res) =>
      dispatch({
        type: chaptersActions.DELETE_CHAPTER_FAILURE,
        response: res.data,
      })
    );
};

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

export const fetchChapters = () => (dispatch) => {
  dispatch({
    type: chaptersActions.FETCH_CHAPTERS_REQUEST,
  });

  return axios({
    url: `https://chapters-7962.restdb.io/rest/chapters?fetchchildren=true&sort=sort`,
    method: "GET",
    headers: { "x-apikey": "6011eda11346a1524ff12eca" },
  })
    .then((res) =>
      dispatch({
        type: chaptersActions.FETCH_CHAPTERS_SUCCESS,
        response: res.data,
      })
    )
    .catch((res) =>
      dispatch({
        type: chaptersActions.FETCH_CHAPTERS_FAILURE,
        response: res.data,
      })
    );
};
