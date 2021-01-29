import * as chaptersActions from "../actionTypes/chapters";
import uuid from "uuid-random";

const initialState = {
  isLoading: false,
  isError: false,
  error: null,
  entries: [],
};

export const chapters = function (state = initialState, action) {
  switch (action.type) {
    case chaptersActions.TOGGLE_CHAPTER_READY:
      return {
        ...state,
        entries: state.entries.map((chapter) =>
          chapter._id === action.chapterId
            ? {
                ...chapter,
                ready: !chapter.ready,
                subsections: chapter.subsections.map((subsection) => {
                  return {
                    ...subsection,
                    ready: !chapter.ready,
                  };
                }),
              }
            : chapter
        ),
      };

    case chaptersActions.TOGGLE_SUBSECTION_READY:
      const stateSub = {
        ...state,
        entries: state.entries.map((chapter) =>
          chapter._id === action.chapterId
            ? {
                ...chapter,
                subsections: chapter.subsections.map((subsection) => {
                  return subsection._id === action.sectionId
                    ? { ...subsection, ready: !subsection.ready }
                    : subsection;
                }),
              }
            : chapter
        ),
      };

      const countSubsections = stateSub.entries.find((e) => {
        return e._id === action.chapterId;
      }).subsections.length;
      const countReadySubsections = stateSub.entries
        .find((e) => {
          return e._id === action.chapterId;
        })
        .subsections.filter((s) => s.ready === true).length;

      const finalState = {
        ...state,
        entries: stateSub.entries.map((chapter) => {
          if (chapter._id === action.chapterId) {
            if (countSubsections === countReadySubsections) {
              return { ...chapter, ready: true };
            } else {
              return { ...chapter, ready: false };
            }
          }
          return chapter;
        }),
      };

      return finalState;

    case chaptersActions.ADD_CHAPTER:
      return state.entries.concat({
        title: action.title,
        ready: false,
        subsections: [],
      });

    case chaptersActions.ADD_SUBSECTION:
      return {
        ...state,
        entries: state.entries.map((chapter, idx) =>
          idx === action.chapId
            ? {
                ...chapter,
                subsections: chapter.subsections.concat({
                  id: uuid(),
                  title: action.title,
                  ready: false,
                }),
                ready: false,
              }
            : chapter
        ),
      };

    case chaptersActions.FETCH_CHAPTERS_REQUEST:
      return { ...state, isLoading: true };

    case chaptersActions.FETCH_CHAPTERS_SUCCESS:
      return { ...initialState, entries: action.response };

    case chaptersActions.FETCH_CHAPTERS_FAILURE:
      return { ...state, isError: true, error: action.error };

    default:
      return state;
  }
};
