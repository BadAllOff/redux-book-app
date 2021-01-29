import { connect } from "react-redux";
import * as chaptersActions from "../../../redux/actionTypes/chapters";
import Chapter from "./Chapter";

const mapDispatchToProps = (dispatch) => ({
  toggleReady: (chapterId) =>
    dispatch({
      type: chaptersActions.TOGGLE_CHAPTER_READY,
      chapterId,
    })
});

export default connect(null, mapDispatchToProps)(Chapter);
