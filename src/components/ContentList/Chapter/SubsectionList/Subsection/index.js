import { connect } from "react-redux";
import {
  editSubsection,
  deleteSubsection,
  toggleSubsection,
} from "../../../../../redux/slices/chapters";
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
    dispatch(
      toggleSubsection({
        chapterId,
        subsectionId,
      })
    ),
  deleteSubsection: (subsectionId) => dispatch(deleteSubsection(subsectionId)),
  editSubsection: (subsectionId, payload) =>
    dispatch(editSubsection({ subsectionId: subsectionId, payload: payload })),
});

export default connect(mapStateToProps, mapDispatchToProps)(Subsection);
