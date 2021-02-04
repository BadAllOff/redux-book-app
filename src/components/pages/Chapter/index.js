import React from "react";
import { connect } from "react-redux";
import HeaderNavigation from "../../HeaderNavigation/HeaderNavigation";
import { useHistory } from "react-router-dom";

const Chapter = ({ chapter, isLoading }) => {
  let history = useHistory();
  return (
    <div className="main">
      <HeaderNavigation></HeaderNavigation>
      <div className="content-wrapper">
        <div className="content">
          {isLoading ? (
            <div>Loading ...</div>
          ) : (
            <>
              <h1>{chapter.title}</h1>
              <hr />
              <div>{chapter.title}</div>
              {console.log(history)}
              <div><button className='btn btn-outline-dark' onClick={history.goBack}>Go Back</button></div>
            </>
          )}
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
}))(Chapter);

export default ChapterContainer;
