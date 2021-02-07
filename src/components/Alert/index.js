import { connect } from "react-redux";
import Alert from "./Alert";

const mapStateToProps = (state) => ({
    visibility: state.chapters.present.isError ? "show" : 'hide',
    message: state.chapters.present.error, 
})

export default connect(mapStateToProps)(Alert);