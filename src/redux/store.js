import { createStore } from "redux";

const chapterReducer = function (state, action) {
  switch (action.type) {
    case "TOGGLE_CHAPTER_READY":
      return state.map((chapter, idx) =>
        idx === action.idx ? { ...chapter, ready: !chapter.ready } : chapter
      );
    case "TOGGLE_SUBSECTION_READY":
      return state.map((chapter, idx) =>
        idx === action.idx
          ? {
              ...chapter,
              subsections: chapter.subsections.map((subsection, sectionIdx) =>
                sectionIdx === action.sectionIdx
                  ? { ...subsection, ready: !subsection.ready }
                  : subsection
              ),
            }
          : chapter
      );

    case "ADD_CHAPTER":
      return state.concat({
        title: action.title,
        ready: false,
        subsections: [],
      });
    case "ADD_SUBSECTION":
      return state[action.chapId].subsections.concat({
        title: action.title,
        ready: false,
      });
    default:
      return state;
  }
};

const store = createStore(
  chapterReducer,
  [
    {
      title: "First Chapter",
      ready: false,
      subsections: [
        { title: "First sub", ready: false },
        { title: "Second sub", ready: false },
      ],
    },
  ],
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
