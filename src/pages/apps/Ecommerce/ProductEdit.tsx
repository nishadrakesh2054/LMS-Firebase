import React from "react";
import { Row, Col, Card, Form } from "react-bootstrap";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

// styles
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

// components
import PageTitle from "../../../components/PageTitle";
import { FormInput } from "../../../components/";

const ProductEdit = () => {
  /*
   * form validation schema
   */
  const schemaResolver = yupResolver(
    yup.object().shape({
      name: yup.string().required("Please enter Project Name"),
      reference: yup.string().required("Please enter Project Name"),
      summary: yup.string().required("Please enter Project Name"),
      price: yup.string().required("Please enter Project Name"),
      comment: yup.string().required("Please enter Project Name"),
      metatitle: yup.string().required("Please enter Project Name"),
      metakeywords: yup.string().required("Please enter Project Name"),
      metadescription: yup.string().required("Please enter Project Name"),
    })
  );

  /*
   * form methods
   */
  const methods = useForm({ resolver: schemaResolver });
  const {
    handleSubmit,
    register,
    control,
    formState: { errors },
  } = methods;

  /**
   * On editor body change
   */

  return (
    <>
      <PageTitle
        breadCrumbItems={[
          { label: "Ecommerce", path: "/apps/ecommerce/details" },
          {
            label: "Add / Edit Product",
            path: "/apps/ecommerce/details",
            active: true,
          },
        ]}
        title={"Add / Edit Book"}
      />

      <form onSubmit={handleSubmit(() => {})}>
        <Row>
          <Col lg={6}>
            <Card>
              <Card.Body>
                <h5 className="text-uppercase bg-light p-2 mt-0 mb-3">
                  Book Basic Details
                </h5>
                <FormInput
                  name="title"
                  label="Book Title"
                  placeholder="e.g : Enter book title"
                  containerClass={"mb-3"}
                  register={register}
                  key="bookTitle"
                  errors={errors}
                  control={control}
                />
                <FormInput
                  name="isbnNo"
                  label="ISBN Number"
                  placeholder="e.g : 978-3-16-148410-0"
                  containerClass={"mb-3"}
                  register={register}
                  key="isbnNo"
                  errors={errors}
                  control={control}
                />
                <FormInput
                  name="accessionNumber"
                  label="Accession Number"
                  placeholder="e.g : 12345"
                  containerClass={"mb-3"}
                  register={register}
                  key="accessionNumber"
                  errors={errors}
                  control={control}
                />

                <FormInput
                  name="sourceOfAcquisition"
                  label="Source of Acquisition"
                  placeholder="e.g : Donated"
                  containerClass={"mb-3"}
                  register={register}
                  key="sourceOfAcquisition"
                  errors={errors}
                  control={control}
                />

                <FormInput
                  name="language"
                  label="Language"
                  placeholder="e.g : English"
                  containerClass={"mb-3"}
                  register={register}
                  key="language"
                  errors={errors}
                  control={control}
                />

                <FormInput
                  name="bookNumber"
                  label="Book Number"
                  placeholder="e.g : Think and rich grow"
                  containerClass={"mb-3"}
                  register={register}
                  key="bookNumber"
                  errors={errors}
                  control={control}
                />

                <FormInput
                  name="classNumber"
                  label="Class Number"
                  placeholder="e.g : 123.45"
                  containerClass={"mb-3"}
                  register={register}
                  key="classNumber"
                  errors={errors}
                  control={control}
                />

                <FormInput
                  name="personalAuthor"
                  label="Personal Author"
                  placeholder="e.g : John Doe"
                  containerClass={"mb-3"}
                  register={register}
                  key="personalAuthor"
                  errors={errors}
                  control={control}
                />
                <FormInput
                  name="corporateAuthor"
                  label="Corporate Author"
                  placeholder="e.g : Company XYZ"
                  containerClass={"mb-3"}
                  register={register}
                  key="corporateAuthor"
                  errors={errors}
                  control={control}
                />

                <FormInput
                  name="conferenceAuthor"
                  label="Conference Author"
                  placeholder="e.g : richard"
                  containerClass={"mb-3"}
                  register={register}
                  key="conferenceAuthor"
                  errors={errors}
                  control={control}
                />

                <FormInput
                  name="statementOfResponsibility"
                  label="statement Of Responsibility"
                  placeholder="e.g : richard"
                  containerClass={"mb-3"}
                  register={register}
                  key="statementOfResponsibility"
                  errors={errors}
                  control={control}
                />
                <FormInput
                  name="editionStatement"
                  label="Edition Statement"
                  placeholder="e.g : richard"
                  containerClass={"mb-3"}
                  register={register}
                  key="editionStatement"
                  errors={errors}
                  control={control}
                />

                <FormInput
                  name="publisherName"
                  label="Publisher"
                  placeholder="e.g : Penguin Books"
                  containerClass={"mb-3"}
                  register={register}
                  key="publisherName"
                  errors={errors}
                  control={control}
                />

                <Form.Group className="mb-3">
                  <Form.Label>Date of Publication</Form.Label>
                  <Controller
                    name="dateOfPublication"
                    control={control}
                    render={({ field }) => (
                      <Form.Control
                        type="date"
                        {...field}
                        className="form-control"
                      />
                    )}
                  />
                </Form.Group>
              </Card.Body>
            </Card>
          </Col>

          <Col lg={6}>
            <Card>
              <Card.Body>
                <h5 className="text-uppercase mt-0 mb-3 bg-light p-2">
                  Book Additional Details
                </h5>

                <FormInput
                  name="callNo"
                  label="Call Number"
                  placeholder="e.g : 123.45"
                  containerClass={"mb-3"}
                  register={register}
                  key="callNo"
                  errors={errors}
                  control={control}
                />
                <Form.Group className="mb-3">
                  <Form.Label>Date</Form.Label>
                  <Controller
                    name="date"
                    control={control}
                    render={({ field }) => (
                      <Form.Control
                        type="date"
                        {...field}
                        className="form-control"
                      />
                    )}
                  />
                </Form.Group>
                <FormInput
                  name="barCode"
                  label="Bar Code"
                  placeholder="e.g : 123456789"
                  containerClass={"mb-3"}
                  register={register}
                  key="barCode"
                  errors={errors}
                  control={control}
                />
                <FormInput
                  name="seriesTitle"
                  label="Series Title"
                  placeholder="e.g : Programming Series"
                  containerClass={"mb-3"}
                  register={register}
                  key="seriesTitle"
                  errors={errors}
                  control={control}
                />

                <FormInput
                  name="seriesNo"
                  label="Series Number"
                  placeholder="e.g : 1"
                  containerClass={"mb-3"}
                  register={register}
                  key="seriesNo"
                  errors={errors}
                  control={control}
                />
                <FormInput
                  name="source"
                  label="Source"
                  placeholder="e.g : 5"
                  containerClass={"mb-3"}
                  register={register}
                  key="source"
                  errors={errors}
                  control={control}
                />
                <FormInput
                  name="price"
                  label="Price"
                  placeholder="Enter amount"
                  containerClass={"mb-3"}
                  register={register}
                  key="price"
                  errors={errors}
                  control={control}
                />
                <FormInput
                  name="notes"
                  label="Notes"
                  placeholder="Any additional notes"
                  containerClass={"mb-3"}
                  register={register}
                  key="notes"
                  errors={errors}
                  control={control}
                />

                <FormInput
                  name="noOfCopies"
                  label="Number of Copies"
                  placeholder="e.g : 5"
                  containerClass={"mb-3"}
                  register={register}
                  key="noOfCopies"
                  errors={errors}
                  control={control}
                />

                <FormInput
                  name="physicalDescription"
                  label="Physical Description"
                  placeholder="e.g : 5"
                  containerClass={"mb-3"}
                  register={register}
                  key="physicalDescription"
                  errors={errors}
                  control={control}
                />

                <FormInput
                  name="subjectAddedEntry"
                  label="Subject Added Entry"
                  placeholder="e.g : 5"
                  containerClass={"mb-3"}
                  register={register}
                  key="subjectAddedEntry"
                  errors={errors}
                  control={control}
                />

                <FormInput
                  name="addedEntryPersonalName"
                  label="Added Entry Personal Name"
                  placeholder="e.g : 5"
                  containerClass={"mb-3"}
                  register={register}
                  key="addedEntryPersonalName"
                  errors={errors}
                  control={control}
                />
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row>
          <Col>
            <div className="text-center mb-3">
              <button
                type="button"
                className="btn w-sm btn-light waves-effect me-1"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="btn w-sm btn-success waves-effect waves-light me-1"
              >
                Save
              </button>
              <button
                type="button"
                className="btn w-sm btn-danger waves-effect waves-light me-1"
              >
                Delete
              </button>
            </div>
          </Col>
        </Row>
      </form>
    </>
  );
};

export default ProductEdit;
