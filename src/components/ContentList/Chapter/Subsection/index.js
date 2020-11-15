import { connect } from "react-redux";
import * as chaptersActions from "../../../../redux/actionTypes/chapters";
import Subsection from "./Subsection";

const mapDispatchToProps = (dispatch) => ({
  toggleSubSectionReady: (idx, sectionIdx) =>
    dispatch({
      type: chaptersActions.TOGGLE_SUBSECTION_READY,
      idx,
      sectionIdx,
    }),
});

export default connect(null, mapDispatchToProps)(Subsection);
