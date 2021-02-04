import { connect } from "react-redux";
import { ActionCreators } from "redux-undo";
import UndoBtn from "./UndoBtn";

const mapDispatchToProps = (dispatch) => ({
  undo: () => dispatch(ActionCreators.undo()),
});

export default connect(null, mapDispatchToProps)(UndoBtn);