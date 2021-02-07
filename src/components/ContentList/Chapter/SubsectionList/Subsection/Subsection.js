import React, { useRef } from "react";
import MyModal from "../../../../Modal/Modal";
import Field from "../../../../Field";
import FormGroup from "../../../../FormGroup";
import Button from "../../../../Button";
import Checkbox from "../../../../Checkbox";

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

      <Button
        btnText="Delete subsection"
        onClick={() => deleteSubsection(subsection._id)}
        options={{ className: "btn btn-outline" }}
      />

      <Button
        btnText="Edit subsection"
        onClick={() => modal.current.open()}
        options={{ className: "btn btn-outline" }}
      />

      <MyModal ref={modal}>
        <ModalEdit
          subsection={subsection}
          editSubsection={editSubsection}
        ></ModalEdit>
      </MyModal>

      <Checkbox
        type="checkbox"
        name="ready"
        onChange={() => toggleSubsectionReady(chapterId, subsection._id)}
        label="Mark as ready"
        htmlFor={["readySubsection", chapterId, subsection._id].join("_")}
        options={{
          className: "form-check-input",
          defaultValue: subsection.ready,
          checked: subsection.ready,
          id: ["readySubsection", chapterId, subsection._id].join("_"),
        }}
      />
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
