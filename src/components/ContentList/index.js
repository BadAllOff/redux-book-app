import { connect } from "react-redux";
import ContentList from "./ContentList";
import { addChapter, deleteChapter } from "../../redux/slices/chapters";
import { ActionCreators } from "redux-undo";

const mapStateToProps = (state) => ({
  isLoading: state.chapters.present.isLoading,
  chapters: state.chapters.present.entries,
});

const mapDispatchToProps = (dispatch) => ({
  addChapter: (payload) => dispatch(addChapter({...payload, subsections: []})),
  deleteChapter: (chapterId) => dispatch(deleteChapter(chapterId)),
  undo: () => dispatch(ActionCreators.undo()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContentList);
