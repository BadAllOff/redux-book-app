import { connect } from "react-redux";
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

export default connect(mapStateToProps)(SubsectionList);