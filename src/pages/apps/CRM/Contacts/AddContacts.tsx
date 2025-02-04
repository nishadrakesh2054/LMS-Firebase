import React from "react";
import { Modal, Button } from "react-bootstrap";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

// components
import { VerticalForm, FormInput } from "../../../../components/";

interface AddContactsProps {
  show: boolean;
  onHide: () => void;
  //   onSubmit: (value: any) => void;
  onSubmitSuccess: () => void;
}

const schemaResolver = yupResolver(
  yup.object().shape({
    name: yup.string().required("Please enter name"),
    email: yup
      .string()
      .required("Please enter email")
      .email("Please enter valid email"),
    phone: yup
      .string()
      .required("Please enter phone")
      .matches(/^\d{10}$/, "Phone number is not valid"),
    rollNo: yup.number().required("Please enter Roll Number"),
    grade: yup.string().required("Please enter Grade"),
    age: yup
      .number()
      .typeError("Age must be a number")
      .required("Please enter Age"),
  })
);

const AddContacts = ({ show, onHide, onSubmitSuccess }: AddContactsProps) => {
  const onSubmit = async (values: any) => {
    try {
      const response = await fetch("http://localhost:5000/api/students", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });
      console.log("post response" + response);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      console.log("Student added successfully");
      onSubmitSuccess(); // Refresh the list after adding
      onHide(); // Close the modal
    } catch (error: any) {
      console.error("Error adding student:", error.message || error);
    }
  };

  return (
    <>
      <Modal
        show={show}
        onHide={onHide}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header className="bg-light" onHide={onHide} closeButton>
          <Modal.Title className="m-0">Add Students</Modal.Title>
        </Modal.Header>
        <Modal.Body className="p-4">
          <VerticalForm
            onSubmit={onSubmit}
            resolver={schemaResolver}
            defaultValues={{}}
          >
            <FormInput
              label="Name"
              type="text"
              name="name"
              placeholder="Enter name"
              containerClass="mb-3"
            />
            <FormInput
              label="Email address"
              type="email"
              name="email"
              placeholder="Enter email"
              containerClass="mb-3"
            />
            <FormInput
              label="Phone"
              type="number"
              name="phone"
              placeholder="Enter phone number"
              containerClass="mb-3"
            />
            <FormInput
              label="Roll No."
              type="number"
              name="rollNo"
              placeholder="Enter Roll No."
              containerClass="mb-3"
            />
            <FormInput
              label="Grade"
              type="text"
              name="grade"
              placeholder="Enter Grade"
              containerClass="mb-3"
            />
            <FormInput
              label="Age"
              type="number"
              name="age"
              placeholder="Enter Age"
              containerClass="mb-3"
            />

            <div className="text-end">
              <Button
                variant="success"
                type="submit"
                className="waves-effect waves-light me-1"
              >
                Save
              </Button>
              <Button
                variant="danger"
                type="submit"
                className="waves-effect waves-light"
                onClick={onHide}
              >
                Cancel
              </Button>
            </div>
          </VerticalForm>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default AddContacts;
