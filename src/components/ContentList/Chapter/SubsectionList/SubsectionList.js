import React from "react";
import Subsection from "./Subsection";

const SubsectionList = ({ chapter, subsections, addSubsection }) => {
  return (
    <>
      <ul>
        {subsections &&
          subsections.map((subsection) => (
            <Subsection
              key={subsection._id}
              chapterId={chapter._id}
              subsectionId={subsection._id}
            />
          ))}
      </ul>
      <SubsectionForm chapterId={chapter._id} addSubsection={addSubsection} />
    </>
  );
};

export default SubsectionList;

const SubsectionForm = ({ chapterId, addSubsection }) => {
  return (
    <fieldset>
      <legend>Add new subsection</legend>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          addSubsection(chapterId, e.target.title.value);
          e.target.title.value = "";
        }}
      >
        <div className="form-group">
          <label className="form-label">Title</label>
          <input className="form-control" type="text" name="title" />
          <small className="text-muted form-text">
            enter the title of subsection
          </small>
        </div>
        <button className="btn btn-outline" type="submit">
          Submit
        </button>
      </form>
    </fieldset>
  );
};
