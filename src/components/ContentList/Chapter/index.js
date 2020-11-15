import { connect } from "react-redux";
import * as chaptersActions from "../../../redux/actionTypes/chapters";
import Chapter from "./Chapter";

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

export default connect(null, mapDispatchToProps)(Chapter);
