import { connect } from "react-redux";
import * as chaptersActions from "../../../../redux/actionTypes/chapters";
import Subsection from "./Subsection";

const mapDispatchToProps = (dispatch) => ({
  toggleSubsectionReady: (chapterId, sectionId) =>
    dispatch({
      type: chaptersActions.TOGGLE_SUBSECTION_READY,
      chapterId,
      sectionId,
    }),
});

export default connect(null, mapDispatchToProps)(Subsection);
