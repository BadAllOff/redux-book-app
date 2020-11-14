import React, { useState, useEffect } from "react";

const ChaptersCount = ({ chapters }) => {
  const [subsectionsCount, setSubsectionsCount] = useState(0);

  useEffect(() => {
    const subsectionsCounter = chapters.reduce((agr, chapter) => {
      return chapter.subsections.length + agr;
    }, 0);

    setSubsectionsCount(subsectionsCounter);
  }, [chapters]);

  return (
    <>
      <div>Chapters count: {chapters.length}</div>
      <div>Subsections count: {subsectionsCount}</div>
    </>
  );
};

export default ChaptersCount;
