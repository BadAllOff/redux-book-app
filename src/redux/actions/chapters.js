import * as chaptersActions from '../actionTypes/chapters';

export const addChapter = (title) => ({
    type: chaptersActions.ADD_CHAPTER,
    title
});
export const toggleChapter = (idx) => ({
    type: chaptersActions.TOGGLE_CHAPTER_READY,
    idx
});
export const toggleSubsection = (idx, sectionIdx) => ({
    type: chaptersActions.TOGGLE_SUBSECTION_READY,
    idx,
    sectionIdx,
});
