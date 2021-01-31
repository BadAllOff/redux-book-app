import { connect } from "react-redux";
import * as chaptersActions from "../../../../../redux/actionTypes/chapters";
import {
  deleteSubsection,
  editSubsection,
} from "../../../../../redux/actions/chapters";
import Subsection from "./Subsection";

const mapStateToProps = (state, ownProps) => {
  const subsection = {
    subsection: state.chapters.present.entries
      .find((e) => {
        return e._id === ownProps.chapterId;
      })
      .subsections.find((s) => {
        return s._id === ownProps.subsectionId;
      }),
  };
  return subsection;
};

const mapDispatchToProps = (dispatch) => ({
  toggleSubsectionReady: (chapterId, subsectionId) =>
    dispatch({
      type: chaptersActions.TOGGLE_SUBSECTION_READY,
      chapterId,
      subsectionId,
    }),
  deleteSubsection: (subsectionId) => dispatch(deleteSubsection(subsectionId)),
  editSubsection: (subsection, payload) =>
    dispatch(editSubsection(subsection, payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Subsection);
