import { connect } from "react-redux";
import { addSubsection } from "../../../../redux/slices/chapters";
import SubsectionList from "./SubsectionList";

const filters = {
  SHOW_ALL: () => true,
  SHOW_READY: (subsections) => !!subsections.ready,
  SHOW_NOTREADY: (subsections) => !subsections.ready,
};

const mapStateToProps = (state, ownProps) => {
  const subsections = {
    subsections: state.chapters.present.entries
      .find((e) => {
        return e._id === ownProps.chapter._id;
      })
      .subsections.filter(filters[state.visibilityFilter]),
  };

  return subsections;
};

const mapDispatchToProps = (dispatch) => ({
  addSubsection: (parentId, title) =>
    dispatch(
      addSubsection({
        chapterId: parentId,
        payload: { title: title, ready: false },
      })
    ),
});
export default connect(mapStateToProps, mapDispatchToProps)(SubsectionList);
