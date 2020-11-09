import { connect } from "react-redux";
import ContentList from "./ContentList";

const mapStateToProps = (state) => ({
  chapters: state,
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
