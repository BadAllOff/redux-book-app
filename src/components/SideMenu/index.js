import { connect } from "react-redux";

import SideMenu from './SideMenu'

const mapStateToProps = (state) => ({
    isLoading: state.chapters.present.isLoading,
    chapters: state.chapters.present.entries,
  });

  export default connect(mapStateToProps)(SideMenu);