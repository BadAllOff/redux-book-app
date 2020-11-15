const initialState = [
  {
    title: "First Chapter",
    ready: false,
    subsections: [
      { title: "First sub", ready: false },
      { title: "Second sub", ready: false },
    ],
  },
  {
    title: "Second Chapter",
    ready: false,
    subsections: [
      { title: "First sub", ready: false },
      { title: "Second sub", ready: false },
    ],
  },
];

export const chapters = function (state = initialState, action) {
  switch (action.type) {
    case "TOGGLE_CHAPTER_READY":
      return state.map((chapter, idx) =>
        idx === action.idx ? { ...chapter, ready: !chapter.ready } : chapter
      );

    case "TOGGLE_SUBSECTION_READY":
      const stateSub = state.map((chapter, idx) =>
        idx === action.idx
          ? {
              ...chapter,
              subsections: chapter.subsections.map((subsection, sectionIdx) => {
                return sectionIdx === action.sectionIdx
                  ? { ...subsection, ready: !subsection.ready }
                  : subsection;
              }),
            }
          : chapter
      );

      const countSubsections = stateSub[action.idx].subsections.length;
      const countReadySubsections = stateSub[action.idx].subsections.filter(
        (s) => s.ready === true
      ).length;

      const finalState = stateSub.map((chapter, idx) => {
        if (idx === action.idx) {
          if (countSubsections === countReadySubsections) {
            return { ...chapter, ready: true };
          } else {
            return { ...chapter, ready: false };
          }
        }
        return chapter;
      });

      return finalState;

    case "ADD_CHAPTER":
      return state.concat({
        title: action.title,
        ready: false,
        subsections: [],
      });
    case "ADD_SUBSECTION":
      console.log(state[action.chapId].subsections);
      console.log(action);
      // return state;

      return state.map((chapter, idx) =>
        idx === action.chapId
          ? {
              ...chapter,
              subsections: chapter.subsections.concat({
                title: action.title,
                ready: false,
              }),
              ready: false,
            }
          : chapter
      );
    default:
      return state;
  }
};
