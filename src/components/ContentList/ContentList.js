import React from "react";
import Chapter from "./Chapter";

const ContentList = ({ chapters, addChapter, undo, isLoading }) => {
  if (isLoading)
    return (
      <div>
        Loading ...{" "}
        <button
          onClick={() => {
            undo();
          }}
        >
          Undo
        </button>
      </div>
    );
  return (
    <>
      <ul>
        {chapters &&
          chapters.map((chapter) => (
            <Chapter key={chapter._id} chapter={chapter} />
          ))}
      </ul>
      <ChapterForm addChapter={addChapter} />
      <button
        onClick={() => {
          undo();
        }}
      >
        Undo
      </button>
    </>
  );
};

export default ContentList;

const ChapterForm = ({ addChapter }) => {
  return (
    <fieldset className="border p-2">
      <legend className="w-auto">Add new chapter</legend>
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
        <button variant="primary" type="submit">
          Submit
        </button>
      </form>
    </fieldset>
  );
};
