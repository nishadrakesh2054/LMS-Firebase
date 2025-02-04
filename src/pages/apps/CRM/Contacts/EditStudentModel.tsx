import React, { useEffect, useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import 'react-toastify/dist/ReactToastify.css';

interface Student {
  _id: string;
  name: string;
  phone: number;
  email: string;
  age: number;
  rollNo: string;
  grade: string;
}

interface EditStudentModalProps {
  show: boolean;
  onHide: () => void;
  student: Student;
  onSubmit: (updatedStudent: Student) => void;
}

const EditStudentModal: React.FC<EditStudentModalProps> = ({ show, onHide, student, onSubmit }) => {
  const [formData, setFormData] = useState<Student>(student);

  // Update form data when student changes
  useEffect(() => {
    setFormData(student);
  }, [student]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Edit Student</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          {["name", "phone", "email", "age", "rollNo", "grade"].map((field) => (
            <Form.Group controlId={field} key={field} className="mb-3">
              <Form.Label>{field.charAt(0).toUpperCase() + field.slice(1)}</Form.Label>
              <Form.Control
                type={field === "phone" || field === "age" ? "number" : "text"}
                name={field}
                value={formData[field as keyof Student]}
                onChange={handleChange}
              />
            </Form.Group>
          ))}
          <Button variant="primary" type="submit">
            Save Changes
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default EditStudentModal;
