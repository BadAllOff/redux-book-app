import React, { useRef } from "react";
import MyModal from "../../Modal/Modal";
import SubsectionList from "./SubsectionList/";
import Filter from "../../Filter";
import Checkbox from "../../Checkbox";
import Field from "../../Field";
import FormGroup from "../../FormGroup";

const Chapter = ({ chapter, toggleReady, deleteChapter, editChapter }) => {
  const modal = useRef(null);
  const { textColor, message } = chapter.ready
    ? { textColor: "text-success", message: "ready" }
    : { textColor: "text-fail", message: "not ready" };
  return (
    <div>
      <h1>{chapter.title}</h1>
      {<div className={textColor}>({message})</div>}
      <Checkbox
        type="checkbox"
        name="ready"
        value={chapter.ready}
        onChange={() => toggleReady(chapter._id)}
        label="Mark as ready"
        htmlFor={["ready", chapter._id].join("_")}
        options={{
          className: "form-check-input",
          checked: chapter.ready,
          id: ["ready", chapter._id].join("_"),
        }}
      />
      <Filter />
      <hr />
      <button
        className="btn btn-outline"
        onClick={() => deleteChapter(chapter._id)}
      >
        Delete chapter
      </button>
      <button className="btn btn-outline" onClick={() => modal.current.open()}>
        Edit chapter
      </button>
      <MyModal ref={modal}>
        <ModalEdit chapter={chapter} editChapter={editChapter}></ModalEdit>
      </MyModal>

      <SubsectionList chapter={chapter} />
    </div>
  );
};

export default Chapter;

const ModalEdit = ({ chapter, editChapter }) => {
  const onSubmit = (e) => {
    e.preventDefault();
    editChapter(chapter._id, { title: e.target.title.value });
    e.target.title.value = "";
  };
  return (
    <FormGroup
      onSubmit={onSubmit}
      submitBtnText="Save Changes"
      legend="Edit chapter's title"
    >
      <Field
        name="title"
        label="Write in new title for the chapter"
        hint="enter the new title of the chapter"
        options={{
          defaultValue: chapter.title,
          className: "form-control form-control-lg",
        }}
      />
    </FormGroup>
  );
};
