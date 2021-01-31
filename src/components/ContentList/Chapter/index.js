import { connect } from "react-redux";
import * as chaptersActions from "../../../redux/actionTypes/chapters";
import { deleteChapter } from "../../../redux/actions/chapters";
import Chapter from "./Chapter";

const mapDispatchToProps = (dispatch) => ({
  toggleReady: (chapterId) =>
    dispatch({
      type: chaptersActions.TOGGLE_CHAPTER_READY,
      chapterId,
    }),
  deleteChapter: (chapterId) => dispatch(deleteChapter(chapterId)),
});

export default connect(null, mapDispatchToProps)(Chapter);
