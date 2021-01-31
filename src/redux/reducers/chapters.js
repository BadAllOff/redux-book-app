import * as chaptersActions from "../actionTypes/chapters";

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

    case chaptersActions.FETCH_CHAPTERS_REQUEST:
      return { ...state, isLoading: true };

    case chaptersActions.FETCH_CHAPTERS_SUCCESS:
      return { ...initialState, isError: false, entries: action.response };

    case chaptersActions.FETCH_CHAPTERS_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
        error: action.error.response.data.message,
      };

    case chaptersActions.ADD_CHAPTER_REQUEST:
      return { ...state, isLoading: true };
    case chaptersActions.ADD_CHAPTER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        entries: state.entries.concat(action.response),
      };
    case chaptersActions.ADD_CHAPTER_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
        error: action.error.response.data.message,
      };

    case chaptersActions.DELETE_CHAPTER_REQUEST:
      return { ...state, isLoading: true };
    case chaptersActions.DELETE_CHAPTER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        entries: state.entries.filter(
          (chapter) => chapter._id !== action.response.result[0]
        ),
      };
    case chaptersActions.DELETE_CHAPTER_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
        error: action.error.response.data.message,
      };

    // Subsections
    case chaptersActions.ADD_SUBSECTION_REQUEST:
      return { ...state, isLoading: true };

    case chaptersActions.ADD_SUBSECTION_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        entries: state.entries.map((chapter) =>
          chapter._id === action.response._parent_id
            ? {
                ...chapter,
                subsections: chapter.subsections.concat(action.response),
                ready: false,
              }
            : chapter
        ),
      };

    case chaptersActions.ADD_SUBSECTION_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
        error: action.error.response.data.message,
      };

    case chaptersActions.DELETE_SUBSECTION_REQUEST:
      return { ...state, isLoading: true };

    case chaptersActions.DELETE_SUBSECTION_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        entries: state.entries.map((chapter) => {
          return {
            ...chapter,
            subsections: chapter.subsections.filter(
              (subsection) => subsection._id !== action.response.result[0]
            ),
          };
        }),
      };

    case chaptersActions.DELETE_SUBSECTION_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
        error: action.error.response.data.message,
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

    default:
      return state;
  }
};
