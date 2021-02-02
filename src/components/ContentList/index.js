import { connect } from "react-redux";
import ContentList from "./ContentList";
import { addChapter } from "../../redux/slices/chapters";
import { ActionCreators } from "redux-undo";

const mapStateToProps = (state) => ({
  isLoading: state.chapters.present.isLoading,
  chapters: state.chapters.present.entries,
});

const mapDispatchToProps = (dispatch) => ({
  addChapter: (payload) => dispatch(addChapter({...payload, subsections: []})),
  undo: () => dispatch(ActionCreators.undo()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContentList);
