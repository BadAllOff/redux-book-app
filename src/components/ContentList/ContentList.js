import React from "react";
import { Link } from "react-router-dom";
import Field from "../Field";
import FormGroup from "../FormGroup";
import Button from '../Button'

const ContentList = ({ chapters, addChapter, deleteChapter, isLoading }) => {
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
                <Button
                  btnText="Delete chapter"
                  onClick={() => deleteChapter(chapter._id)}
                  options={{ className: "btn btn-outline" }}
                />
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
  const onSubmit = (e) => {
    e.preventDefault();
    addChapter({ title: e.target.title.value });
    e.target.title.value = "";
  };

  return (
    <FormGroup
      onSubmit={onSubmit}
      submitBtnText="Create new chapter"
      legend="Add new chapter"
    >
      <Field
        name="title"
        label="Title for the new chapter"
        hint="enter the title of the new chapter"
        options={{
          className: "form-control form-control-lg",
        }}
      />
    </FormGroup>
  );
};
