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
    subsections: state.chapters[ownProps.idx].subsections.filter(
      filters[state.visibilityFilter]
    ),
  };
  return subsections;
};

const mapDispatchToProps = (dispatch) => ({
  toggleReady: (idx) =>
    dispatch({
      type: chaptersActions.TOGGLE_CHAPTER_READY,
      idx,
    }),
  addSubsection: (chapId, title) =>
    dispatch({
      type: chaptersActions.ADD_SUBSECTION,
      chapId,
      title,
    }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Chapter);
