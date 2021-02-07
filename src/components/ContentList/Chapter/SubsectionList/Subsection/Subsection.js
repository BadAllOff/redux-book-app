import React, { useRef } from "react";
import MyModal from "../../../../Modal/Modal";
import Field from "../../../../Field";
import FormGroup from "../../../../FormGroup";

const Subsection = ({
  chapterId,
  subsection,
  toggleSubsectionReady,
  deleteSubsection,
  editSubsection,
}) => {
  const modal = useRef(null);

  return (
    <li>
      <h2>{subsection.title}</h2>
      <button
        className="btn btn-outline"
        onClick={() => deleteSubsection(subsection._id)}
      >
        Delete subsection
      </button>
      <button className="btn btn-outline" onClick={() => modal.current.open()}>
        Edit subsection
      </button>
      <MyModal ref={modal}>
        <ModalEdit
          subsection={subsection}
          editSubsection={editSubsection}
        ></ModalEdit>
      </MyModal>

      <div className="form-group">
        <div className="form-check">
          <input
            onChange={() => toggleSubsectionReady(chapterId, subsection._id)}
            name="ready"
            type="checkbox"
            id={["readySubsection", chapterId, subsection._id].join("_")}
            className="form-check-input"
            defaultValue={subsection.ready}
            checked={subsection.ready}
          />
          <label
            title=""
            htmlFor={["readySubsection", chapterId, subsection._id].join("_")}
            className="form-check-label"
          >
            Mark as ready
          </label>
        </div>
      </div>
    </li>
  );
};

export default Subsection;

const ModalEdit = ({ subsection, editSubsection }) => {
  const onSubmit = (e) => {
    e.preventDefault();
    editSubsection(subsection._id, { title: e.target.title.value });
    e.target.title.value = "";
  };
  return (
    <FormGroup
      onSubmit={onSubmit}
      submitBtnText="Save Changes"
      legend="Edit Subsection"
    >
      <Field
        name="title"
        label="Edit title for subsection"
        hint="enter the new title of subsection"
        options={{
          defaultValue: subsection.title,
          className: "form-control form-control-lg",
        }}
      />
    </FormGroup>
  );
};
