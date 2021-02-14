import { connect } from "react-redux";
import {
  editChapter,
  deleteChapter,
  toggleChapter,
} from "../../../redux/slices/chapters";
import Chapter from "./Chapter";

const mapDispatchToProps = (dispatch) => ({
  toggleReady: (chapterId) => dispatch(toggleChapter({ chapterId: chapterId })),
  deleteChapter: (chapterId) => dispatch(deleteChapter(chapterId)),
  editChapter: (chapterId, payload) =>
    dispatch(editChapter({ chapterId: chapterId, payload: payload })),
});

export default connect(null, mapDispatchToProps)(Chapter);
