



import React from "react";
import { Card, Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

interface UsersBalancesProps {
  balances: {
    id: number;
    userId: string;
    name: string;
    booksIssued: number;
    department: string;
  }[];
}

const UsersBalances = ({ balances }: UsersBalancesProps) => {
  return (
    <Card>
      <Card.Body>
        <Dropdown className="float-end" align="end">
          <Dropdown.Toggle as="a" className="card-drop cursor-pointer">
            <i className="mdi mdi-dots-vertical"></i>
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item>Edit Report</Dropdown.Item>
            <Dropdown.Item>Export Report</Dropdown.Item>
            <Dropdown.Item>Action</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        <h4 className="header-title mb-3">User List</h4>
        <div className="table-responsive">
          <table className="table table-borderless table-hover table-nowrap table-centered m-0">
            <thead className="table-light">
              <tr>
                <th>User ID</th>
                <th>User Name</th>
                <th>Books Issued</th>
                <th>Department</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {balances.map((item) => (
                <tr key={item.id}>
                  <td>{item.userId}</td>
                  <td>
                    <h5 className="m-0 fw-normal">{item.name}</h5>
                    <p className="mb-0 text-muted">
                     
                    </p>
                  </td>
                  <td>{item.booksIssued}</td>
                  <td>{item.department}</td>
                  <td>
                    <Link to="#" className="btn btn-xs btn-light">
                      <i className="mdi mdi-pencil"></i>
                    </Link>
                    <Link to="#" className="btn btn-xs btn-danger">
                      <i className="mdi mdi-delete"></i>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card.Body>
    </Card>
  );
};

export default UsersBalances;