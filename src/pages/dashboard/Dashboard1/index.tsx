import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import Statistics from "./Statistics";

// components
import HyperDatepicker from "../../../components/Datepicker";

import UsersBalances from "./UsersBalances";
import RevenueHistory from "./RevenueHistory";

import { balances, revenueHistory } from "./data";
import PageTitle from "../../../components/PageTitle";

const Dashboard1 = () => {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());

  const onDateChange = (date: Date) => {
    if (date) {
      setSelectedDate(date);
    }
  };

  return (
    <>
      <PageTitle
        breadCrumbItems={[
          { label: "Tickets", path: "/apps/tickets/list" },
          { label: "Hello Admin", path: "/apps/tickets/list", active: true },
        ]}
        title={"Hello Admin"}
      />
      <Row>
        <Col md={6} xl={3}>
          <Statistics
            icon="fe-tag"
            variant="primary"
            stats="1000"
            desc="Total Visitors"
          />
        </Col>
        <Col md={6} xl={3}>
          <Statistics
            icon="fe-clock"
            variant="warning"
            stats="350"
            desc=" Borrowed Books"
          />
        </Col>
        <Col md={6} xl={3}>
          <Statistics
            icon="fe-check-circle"
            variant="success"
            stats="34"
            desc="Overdue Books"
          />
        </Col>
        <Col md={6} xl={3}>
          <Statistics
            icon="fe-trash-2"
            variant="danger"
            stats="5000"
            desc="Total Members"
          />
        </Col>
      </Row>

      <Row>
        <Col>
          <div className="page-title-box">
            <div className="page-title-right">
              <form className="d-flex align-items-center mb-3">
                <div className="input-group input-group-sm">
                  <HyperDatepicker
                    value={selectedDate}
                    inputClass="border"
                    onChange={(date) => {
                      onDateChange(date);
                    }}
                  />
                </div>
                <button className="btn btn-blue btn-sm ms-2">
                  <i className="mdi mdi-autorenew"></i>
                </button>
                <button className="btn btn-blue btn-sm ms-1">
                  <i className="mdi mdi-filter-variant"></i>
                </button>
              </form>
            </div>
            <h4 className="page-title">Book and Student Data</h4>
          </div>
        </Col>
      </Row>

      <Row>
        <Col xl={6}>
          <UsersBalances balances={balances} />
        </Col>
        <Col xl={6}>
          <RevenueHistory revenueHistory={revenueHistory} />
        </Col>
      </Row>
    </>
  );
};

export default Dashboard1;
