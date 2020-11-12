import { connect } from "react-redux";
import ContentList from "./ContentList";

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
      type: "TOGGLE_CHAPTER_READY",
      idx,
    }),
  toggleSubSectionReady: (idx, sectionIdx) =>
    dispatch({
      type: "TOGGLE_SUBSECTION_READY",
      idx,
      sectionIdx,
    }),
  addChapter: (title) =>
    dispatch({
      type: "ADD_CHAPTER",
      title,
    }),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContentList);
