import { connect } from "react-redux";
import ContentList from "./ContentList";
import * as chaptersActions from "../../redux/actionTypes/chapters";

const mapStateToProps = (state) => ({
  chapters: state.chapters,
});

const mapDispatchToProps = (dispatch) => ({
  addChapter: (title) =>
    dispatch({
      type: chaptersActions.ADD_CHAPTER,
      title,
    }),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContentList);
