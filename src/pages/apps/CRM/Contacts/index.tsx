import React from "react";
import { Row, Col } from "react-bootstrap";

// components
import PageTitle from "../../../../components/PageTitle";

import ContactsDetails from "./ContactsDetails";

// dummy data
import { contacts } from "./data";

const Contacts = () => {
  return (
    <>
      <PageTitle
        breadCrumbItems={[
          { label: "CRM", path: "/apps/crm/contacts" },
          { label: "Contacts", path: "/apps/crm/contacts", active: true },
        ]}
        title={"Contacts"}
      />

      <Row>
        <Col lg={12}>
          <ContactsDetails contactDetails={contacts} />
        </Col>
      </Row>
    </>
  );
};

export default Contacts;
