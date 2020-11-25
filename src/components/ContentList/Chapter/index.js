import { connect } from "react-redux";
import Chapter from "./Chapter";
import * as chaptersActions from "../../../redux/actionTypes/chapters";

const filters = {
  SHOW_ALL: () => true,
  SHOW_READY: (subsections) => !!subsections.ready,
  SHOW_NOTREADY: (subsections) => !subsections.ready,
};

const mapStateToProps = (state, ownProps) => {
  const subsections = {
    subsections: state.chapters.present.entries
      .find((e) => {
        return e._id === ownProps.chapter._id;
      })
      .subsections.filter(filters[state.visibilityFilter]),
  };
  return subsections;
};

const mapDispatchToProps = (dispatch) => ({
  toggleReady: (chapterId) =>
    dispatch({
      type: chaptersActions.TOGGLE_CHAPTER_READY,
      chapterId,
    }),
  addSubsection: (chapterId, title) =>
    dispatch({
      type: chaptersActions.ADD_SUBSECTION,
      chapterId,
      title,
    }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Chapter);
