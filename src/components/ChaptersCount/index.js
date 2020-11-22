import { connect } from "react-redux";
import ChaptersCount from "./ChaptersCount";

const mapStateToProps = (state) => {
  const chaps = state.chapters;
  let subsectionsReadyCounter = 0;
  let chaptersReadyCounter = 0;

  const subsectionsCounter = chaps.reduce((agr, chapter) => {
    if (chapter.ready) {
      chaptersReadyCounter++;
    }

    subsectionsReadyCounter += chapter.subsections.filter((subsection) => {
      return subsection.ready;
    }).length;

    return chapter.subsections.length + agr;
  }, 0);

  return {
    chapters: state.chapters,
    subsectionsCount: subsectionsCounter,
    subsectionsReadyCount: subsectionsReadyCounter,
    chaptersReadyCount: chaptersReadyCounter,
  };
};

export default connect(mapStateToProps)(ChaptersCount);
