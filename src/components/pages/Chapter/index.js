import React from "react";
import { connect } from "react-redux";

const Chapter = ({ chapter, isLoading }) => {
  if (isLoading)
    return (
      <div>
        Loading ...
      </div>
    );

  return <div>{chapter.title}</div>;
};

const ChapterContainer = connect((state, ownProps) => ({
  isLoading: state.chapters.present.isLoading,
  chapter: state.chapters.present.entries.find(
    (chapter) => chapter._id === ownProps.match.params.id
  ),
}))(Chapter);

export default ChapterContainer;
