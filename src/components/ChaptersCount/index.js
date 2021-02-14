import { connect } from "react-redux";
import ChaptersCount from "./ChaptersCount";

const mapStateToProps = (state) => {
  const chapters = state.chapters.present.entries;

  const doneStats = chapters.reduce(
    (acc, chapter) => {
      const subsectionsReady = chapter.subsections.filter((s) => s.ready);

      return {
        chaptersReadyCounter: acc.chaptersReadyCounter + chapter.ready ? 1 : 0,
        subsectionsReadyCounter: acc.subsectionsReadyCounter + subsectionsReady.length,
        subsectionsCounter: chapter.subsections.length + acc.subsectionsCounter,
      };
    },
    {
      chaptersReadyCounter: 0,
      subsectionsReadyCounter: 0,
      subsectionsCounter: 0,
    }
  );

  return {
    chapters: state.chapters.present.entries.length,
    subsectionsCount: doneStats.subsectionsCounter,
    subsectionsReadyCount: doneStats.subsectionsReadyCounter,
    chaptersReadyCount: doneStats.chaptersReadyCounter,
  };
};

export default connect(mapStateToProps)(ChaptersCount);
