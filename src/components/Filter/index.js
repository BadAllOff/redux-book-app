import { connect } from "react-redux";
import Filter from "./Filter";

const mapStateToProps = (state) => ({
  currentFilter: state.visibilityFilter,
});

const mapDispatchToProps = (dispatch) => ({
  setFilter: (filter) =>
    dispatch({
      type: "SET_FILTER",
      filter,
    }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
