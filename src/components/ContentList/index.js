import { connect } from "react-redux";
import ContentList from "./ContentList";
import * as chaptersActions from "../../redux/actionTypes/chapters";

const filters = {
  SHOW_ALL: () => true,
  SHOW_READY: (chapters) => !!chapters.ready,
  SHOW_NOTREADY: (chapters) => !chapters.ready,
};

const mapStateToProps = (state) => ({
  chapters: state.chapters.filter(filters[state.visibilityFilter]),
});

const mapDispatchToProps = (dispatch) => ({
  toggleReady: (idx) =>
    dispatch({
      type: chaptersActions.TOGGLE_CHAPTER_READY,
      idx,
    }),
  toggleSubSectionReady: (idx, sectionIdx) =>
    dispatch({
      type: chaptersActions.TOGGLE_SUBSECTION_READY,
      idx,
      sectionIdx,
    }),
  addChapter: (title) =>
    dispatch({
      type: chaptersActions.ADD_CHAPTER,
      title,
    }),
  addSubsection: (chapId, title) =>
    dispatch({
      type: chaptersActions.ADD_SUBSECTION,
      chapId,
      title,
    }),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContentList);
