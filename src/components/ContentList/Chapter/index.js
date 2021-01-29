import { connect } from "react-redux";
import * as chaptersActions from "../../../redux/actionTypes/chapters";
import Chapter from "./Chapter";

const filters = {
  SHOW_ALL: () => true,
  SHOW_READY: (subsections) => !!subsections.ready,
  SHOW_NOTREADY: (subsections) => !subsections.ready,
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

export default connect(null, mapDispatchToProps)(Chapter);
