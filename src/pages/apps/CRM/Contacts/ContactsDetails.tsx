import React, { useEffect, useState } from "react";
import { Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Table from "../../../../components/Table";
import AddContacts from "./AddContacts";

// action column render
const ActionColumn = ({
  row,
  deleteStudent,
}: {
  row: any;
  deleteStudent: (id: string) => void;
}) => {
  return (
    <>
      <Link to="#" className="action-icon" >
        <i className="mdi mdi-square-edit-outline"></i>
      </Link>
      <Link
        to="#"
        className="action-icon"
        onClick={() => deleteStudent(row.original._id)}
      >
        <i className="mdi mdi-delete"></i>
      </Link>
    </>
  );
};

const columns = (deleteStudent: (id: string) => void) => [
  {
    Header: "Student Name",
    accessor: "name",
    sort: true,
    className: "table-user",
  },
  {
    Header: "Phone",
    accessor: "phone",
    sort: true,
  },
  {
    Header: "Email",
    accessor: "email",
    sort: true,
  },
  {
    Header: "Age",
    accessor: "age",
    sort: true,
  },
  {
    Header: "Roll No.",
    accessor: "rollNo",
    sort: true,
  },
  {
    Header: "Grade",
    accessor: "grade",
    sort: true,
  },
  {
    Header: "Action",
    accessor: "action",
    sort: false,
    Cell: ({ row }: { row: any }) => (
      <ActionColumn row={row} deleteStudent={deleteStudent} />
    ),
  },
];
interface Student {
  _id: string;
  name: string;
  phone: number;
  email: string;
  age: number;
  rollNo: string;
  grade: string;
}

const ContactsDetails: React.FC = () => {
  const [students, setStudents] = useState<Student[]>([]);
  const [show, setShow] = useState<boolean>(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState<boolean>(false);

  const fileInputRef = React.useRef<HTMLInputElement | null>(null);

  const deleteStudent = async (id: string) => {
    if (!window.confirm("Are you sure you want to delete this student?"))
      return;

    try {
      const response = await fetch(`http://localhost:5000/api/students/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      setStudents((prevStudents) =>
        prevStudents.filter((student) => student._id !== id)
      );
      console.log("Student deleted successfully");
    } catch (error: any) {
      console.error("Error deleting student:", error.message || error);
    }
  };
  const onCloseModal = () => setShow(false);
  const onOpenModal = () => setShow(true);

  const onSubmit = () => {
    onCloseModal();
  };

  //   get all students data
  useEffect(() => {
    const controller = new AbortController(); // Create an abort controller
    const fetchStudents = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/students", {
          signal: controller.signal,
        });
        if (!response.ok)
          throw new Error(`HTTP error! Status: ${response.status}`);

        const data: Student[] = await response.json();
        setStudents(data);
      } catch (error: any) {
        if (error.name === "AbortError") {
          console.log("Fetch aborted");
        } else {
          console.error("Error fetching students:", error.message || error);
        }
      }
    };

    fetchStudents();

    return () => controller.abort(); // Cleanup function
  }, []);

  // Open file picker when "+" button is clicked
  const openFilePicker = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  // Handle file selection
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setSelectedFile(event.target.files[0]);
    }
  };
  // Upload Excel file to API
  const handleImport = async () => {
    if (!selectedFile) {
      alert("Please select a file first!");
      return;
    }

    const formData = new FormData();
    formData.append("file", selectedFile);

    try {
      setUploading(true);
      const response = await fetch(
        "http://localhost:5000/api/students/import",
        {
          method: "POST",
          body: formData,
        }
      );

      if (!response.ok)
        throw new Error(`Upload failed: ${response.statusText}`);

      alert("File uploaded successfully!");
      setSelectedFile(null);
      setUploading(false);
    } catch (error: any) {
      console.error("Error uploading file:", error.message);
      alert("Error uploading file. Please try again.");
      setUploading(false);
    }
  };

  // export excel file
  const exportExcel = async () => {
    try {
      const response = await fetch(
        "http://localhost:5000/api/students/export",
        {
          method: "GET",
          headers: {
            "Content-Type":
              "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
          },
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);

      // Create a temporary anchor element and trigger download
      const a = document.createElement("a");
      a.href = url;
      a.download = "students_data.xlsx"; // Change filename as needed
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);
    } catch (error: any) {
      console.error("Error exporting Excel file:", error.message || error);
    }
  };

  // Button in JSX
  <Button className="btn btn-light mb-2" onClick={exportExcel}>
    Export
  </Button>;

  return (
    <>
      <Card>
        <Card.Body>
          <Row className="justify-content-between">
            <Col>
              <Button
                variant="danger"
                className="waves-effect waves-light mb-2"
                onClick={onOpenModal}
              >
                <i className="mdi mdi-plus"></i>Add Students
              </Button>
            </Col>
            <Col>
              <div className="text-sm-end">
                <input
                  type="file"
                  accept=".xlsx, .csv"
                  ref={fileInputRef}
                  style={{ display: "none" }}
                  onChange={handleFileChange}
                />

                {/* "+" Button to Open File Picker */}
                <Button
                  className="btn btn-success mb-2 me-1"
                  onClick={openFilePicker}
                >
                  <i className="mdi mdi-upload"></i>{" "}
                  {selectedFile ? "File Selected" : ""}
                </Button>

                <Button
                  className="btn btn-light mb-2 me-1"
                  onClick={handleImport}
                  disabled={uploading}
                >
                  {uploading ? "Uploading..." : "Import"}
                </Button>

                <Button className="btn btn-light mb-2" onClick={exportExcel}>
                  Export
                </Button>
              </div>
            </Col>
          </Row>
          <Table
            columns={columns(deleteStudent)}
            data={students}
            pageSize={8}
            isSortable={true}
            pagination={true}
            isSearchable={true}
            tableClass="table-nowrap table-hover"
            searchBoxClass="my-2"
          />
        </Card.Body>
      </Card>

      {/* add contact modal */}
      <AddContacts
        show={show}
        onHide={onCloseModal}
        onSubmitSuccess={onSubmit}
      />
    </>
  );
};

export default ContactsDetails;
