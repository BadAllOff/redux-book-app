import React from "react";
import Subsection from "./Subsection";
import Field from "../../../Field";
import FormGroup from "../../../FormGroup";

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
  const onSubmit = (e) => {
    e.preventDefault();
    addSubsection(chapterId, e.target.title.value);
    e.target.title.value = "";
  };
  return (
    <FormGroup onSubmit={onSubmit} submitBtnText='Create subsection' legend="Add new subsection">
      <Field
        name="title"
        label="Title for the new subsection"
        hint="enter the title of the new subsection"
        options={{
          className: "form-control form-control-lg",
        }}
      />
    </FormGroup>
  );
};
