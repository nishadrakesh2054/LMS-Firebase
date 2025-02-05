import React from "react";
import { Link } from "react-router-dom";
import { Row, Col, Card, Button } from "react-bootstrap";

// components
import PageTitle from "../../../components/PageTitle";
import Table from "../../../components/Table";

// dummy data
import { students } from "./data";

/* name column render */
const NameColumn = ({ row }: { row: any }) => {
  return (
    <div className="table-user">
      <img src={row.original.avatar} alt="" className="me-2 rounded-circle" />
      <Link to="#" className="text-body fw-semibold">
        {row.original.name}
      </Link>
    </div>
  );
};

/* action column render */
const ActionColumn = () => {
  return (
    <React.Fragment>
      <Link to="#" className="action-icon">
        {" "}
        <i className="mdi mdi-eye"></i>
      </Link>
      <Link to="#" className="action-icon">
        {" "}
        <i className="mdi mdi-square-edit-outline"></i>
      </Link>
      <Link to="#" className="action-icon">
        {" "}
        <i className="mdi mdi-delete"></i>
      </Link>
    </React.Fragment>
  );
};

// columns to render
const columns = [
  {
    Header: "Student Name",
    accessor: "name",
    sort: true,
    Cell: NameColumn,
    classes: "table-user",
  },
  {
    Header: "Phone",
    accessor: "phone",
    sort: true,
  },
  {
    Header: "Date of Birth",
    accessor: "dob",
    sort: true,
  },
  {
    Header: "Age",
    accessor: "age",
    sort: true,
  },
  {
    Header: "Grade",
    accessor: "grade",
    sort: true,
  },
  {
    Header: "Gender",
    accessor: "gender",
    sort: true,
  },
  {
    Header: "Action",
    accessor: "action",
    sort: false,
    Cell: ActionColumn,
  },
];

// give page size
const sizePerPageList = [
  {
    text: "10",
    value: 10,
  },
  {
    text: "25",
    value: 25,
  },
  {
    text: "All",
    value: students.length,
  },
];

// main component
const Customers = () => {
  return (
    <React.Fragment>
      <PageTitle
        breadCrumbItems={[
          { label: "Library ", path: "/apps/ecommerce/customers" },
          {
            label: "books",
            path: "/apps/ecommerce/customers",
            active: true,
          },
        ]}
        title={"Customers"}
      />

      <Row>
        <Col>
          <Card>
            <Card.Body>
              <Row>
                <Col sm={4}>
                  <Button className="btn btn-danger mb-2">
                    <i className="mdi mdi-plus-circle me-2"></i> Add Books
                  </Button>
                </Col>

                <Col sm={8}>
                  <div className="text-sm-end">
                    <Button className="btn btn-success mb-2 me-1">
                      <i className="mdi mdi-cog-outline"></i>
                    </Button>

                    <Button className="btn btn-light mb-2 me-1">Import</Button>

                    <Button className="btn btn-light mb-2">Export</Button>
                  </div>
                </Col>
              </Row>

              <Table
                columns={columns}
                data={students}
                pageSize={10}
                sizePerPageList={sizePerPageList}
                isSortable={true}
                pagination={true}
                isSelectable={true}
                isSearchable={true}
                tableClass="table-striped dt-responsive nowrap w-100"
                searchBoxClass="my-2"
              />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default Customers;
