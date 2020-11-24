import { connect } from "react-redux";
import ContentList from "./ContentList";
import * as chaptersActions from "../../redux/actionTypes/chapters";
import { ActionCreators } from "redux-undo";

const mapStateToProps = (state) => ({
  chapters: state.chapters.present,
});

const mapDispatchToProps = (dispatch) => ({
  addChapter: (title) =>
    dispatch({
      type: chaptersActions.ADD_CHAPTER,
      title,
    }),
  undo: () => dispatch(ActionCreators.undo()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContentList);
