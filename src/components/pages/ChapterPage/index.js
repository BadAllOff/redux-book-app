import React from "react";
import { connect } from "react-redux";
import HeaderNavigation from "../../HeaderNavigation/HeaderNavigation";
import Chapter from "../../ContentList/Chapter";
import UndoBtn from "../../UndoBtn";
import GoBackBtn from "../../GoBackBtn";

const ChapterPage = ({ chapter, isLoading }) => {
  return (
    <div className="main">
      <HeaderNavigation></HeaderNavigation>
      <div className="content-wrapper">
        <div className="content">
          {isLoading ? (
            <div>Loading ...</div>
          ) : chapter ? (
            <Chapter chapter={chapter}></Chapter>
          ) : (
            <div>
              <p>There is nothing to show.</p>
              <p>Go back and try again.</p>
            </div>
          )}
          <hr />
          <GoBackBtn />
          <UndoBtn />
        </div>
      </div>
    </div>
  );
};

const ChapterContainer = connect((state, ownProps) => ({
  isLoading: state.chapters.present.isLoading,
  chapter: state.chapters.present.entries.find(
    (chapter) => chapter._id === ownProps.match.params.id
  ),
}))(ChapterPage);

export default ChapterContainer;
