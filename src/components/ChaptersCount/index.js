import { connect } from "react-redux";
import ChaptersCount from "./ChaptersCount";

const mapStateToProps = (state) => {
  const chapters = state.chapters.present;

  const doneStats = chapters.reduce(
    (acc, chapter) => ({
      chaptersReadyCounter: chapter.ready
        ? acc.chaptersReadyCounter + 1
        : acc.chaptersReadyCounter,
      subsectionsReadyCounter:
        acc.subsectionsReadyCounter +
        chapter.subsections.filter((s) => s.ready).length,
      subsectionsCounter: chapter.subsections.length + acc.subsectionsCounter,
    }),
    {
      chaptersReadyCounter: 0,
      subsectionsReadyCounter: 0,
      subsectionsCounter: 0,
    }
  );

  return {
    chapters: state.chapters.present,
    subsectionsCount: doneStats.subsectionsCounter,
    subsectionsReadyCount: doneStats.subsectionsReadyCounter,
    chaptersReadyCount: doneStats.chaptersReadyCounter,
  };
};

export default connect(mapStateToProps)(ChaptersCount);
