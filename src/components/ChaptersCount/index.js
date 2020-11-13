import { connect } from "react-redux";
import ChaptersCount from "./ChaptersCount";

const mapStateToProps = (state) => ({
    chapters: state.chapters,
});

export default connect(mapStateToProps)(ChaptersCount);
