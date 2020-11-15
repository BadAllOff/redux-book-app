import { connect } from "react-redux";
import ContentList from "./ContentList";
import * as chaptersActions from "../../redux/actionTypes/chapters";

const filters = {
  SHOW_ALL: () => true,
  SHOW_READY: (chapters) => !!chapters.ready,
  SHOW_NOTREADY: (chapters) => !chapters.ready,
};

const mapStateToProps = (state) => ({
  chapters: state.chapters.filter(filters[state.visibilityFilter]),
});

const mapDispatchToProps = (dispatch) => ({
  addChapter: (title) =>
    dispatch({
      type: chaptersActions.ADD_CHAPTER,
      title,
    }),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContentList);
