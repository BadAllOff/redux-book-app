import React, { useState, useEffect } from "react";

const ChaptersCount = ({ chapters }) => {
  const [subsectionsCount, setSubsectionsCount] = useState(0);
  const [subsectionsReadyCount, setSubsectionsReadyCount] = useState(0);
  const [chaptersReadyCount, setChaptersReadyCount] = useState(0);

  useEffect(() => {
    let subsectionsReadyCounter = 0;
    let chaptersReadyCounter = 0;

    const subsectionsCounter = chapters.reduce((agr, chapter) => {
      if (chapter.ready) {
        chaptersReadyCounter++;
      }

      subsectionsReadyCounter += chapter.subsections.filter((subsection) => {
        return subsection.ready;
      }).length;
      console.log(subsectionsReadyCounter);

      return chapter.subsections.length + agr;
    }, 0);

    setSubsectionsCount(subsectionsCounter);
    setSubsectionsReadyCount(subsectionsReadyCounter);
    setChaptersReadyCount(chaptersReadyCounter);
  }, [chapters]);

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
