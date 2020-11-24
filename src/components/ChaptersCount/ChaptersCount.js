const ChaptersCount = ({
  chapters,
  subsectionsCount,
  subsectionsReadyCount,
  chaptersReadyCount,
}) => {
  return (
    <>
      <div>
        {chaptersReadyCount} from {chapters.length} Chapters are ready.
      </div>
      <div>
        {subsectionsReadyCount} from {subsectionsCount} Subsections are ready.
      </div>
    </>
  );
};

export default ChaptersCount;
