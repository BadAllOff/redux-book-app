import React from "react";
import { Link } from "react-router-dom";
import UndoBtn from "../UndoBtn";

const ContentList = ({ chapters, addChapter, isLoading }) => {
  if (isLoading)
    return (
      <div>
        Loading ... <br />
        <hr />
      </div>
    );
  return (
    <>
      <ul>
        {chapters &&
          chapters.map((chapter) => {
            return (
              <li key={chapter._id}>
                <h2>{chapter.title}</h2>
                <Link to={`/chapters/${chapter._id}`}>
                  <button className="btn btn-outline">Preview</button>
                </Link>
              </li>
            );
          })}
      </ul>
      <ChapterForm addChapter={addChapter} />
      <hr />
    </>
  );
};

export default ContentList;

const ChapterForm = ({ addChapter }) => {
  return (
    <fieldset>
      <legend>Add new chapter</legend>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          addChapter({ title: e.target.title.value });
          e.target.title.value = "";
        }}
      >
        <div>
          <div className="form-group">
            <label>Title</label>
            <input
              className="form-control form-control-lg"
              type="text"
              name="title"
            />
            <small className="text-muted">enter the title of chapter</small>
          </div>
        </div>
        <button className="btn btn-outline" type="submit">
          Submit
        </button>
      </form>
    </fieldset>
  );
};
