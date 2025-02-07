import { Row, Col, Card, Form } from "react-bootstrap";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";
import { format } from "date-fns";
import { yupResolver } from "@hookform/resolvers/yup";
import PageTitle from "../../../components/PageTitle";
import { FormInput } from "../../../components/";
import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from "react-toastify";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const schemaResolver = yupResolver(
  yup.object().shape({
    date: yup.date().nullable(),
    title: yup.string().required("Please enter Book Title"),
    accessionNumber: yup
      .number()
      .required("Please enter Accession Number")
      .min(1),
    isbnNo: yup.string().required("Please enter ISBN Number"),
    sourceOfAcquisition: yup
      .string()
      .required("Please enter Source of Acquisition"),
    language: yup.string().required("Please enter Language"),
    bookNumber: yup.number().required("Please enter Book Number").min(1),
    classNumber: yup.number().required("Please enter Class Number").min(1),
    personalAuthor: yup.string().nullable(),
    corporateAuthor: yup.string().nullable(),
    conferenceAuthor: yup.string().nullable(),
    statementOfResponsibility: yup.string().nullable(),
    editionStatement: yup.string().nullable(),
    publisherName: yup.string().required("Please enter Publisher Name"),
    dateOfPublication: yup.date().nullable(),
    price: yup.number().required("Please enter Price").min(0),
    noOfCopies: yup.number().required("Please enter Number of Copies").min(1),
    callNo: yup.string().required("Please enter Call Number"),
    barCodes: yup
      .array()
      .of(yup.string())
      .min(1, "At least one barcode is required")
      .required("Please enter Bar Code(s)"),
    seriesTitle: yup.string().nullable(),
    seriesNo: yup.number().nullable().min(1),
    notes: yup.string().nullable(),
    subjectAddedEntry: yup.string().nullable(),
    addedEntryPersonalName: yup.string().nullable(),
    physicalDescription: yup.string().nullable(),
    source: yup.string().nullable(),
  })
);
interface BookFormData {
  _id?: string;
  __v?: number;
  date: Date;
  title: string;
  accessionNumber: number;
  isbnNo: string;
  sourceOfAcquisition: string;
  language: string;
  bookNumber: number;
  classNumber: number;
  personalAuthor?: string | null;
  corporateAuthor?: string | null;
  conferenceAuthor?: string | null;
  statementOfResponsibility?: string | null;
  editionStatement?: string | null;
  publisherName: string;
  dateOfPublication?: Date | null;
  price: number;
  noOfCopies: number;
  callNo: string;
  barCodes: string[];
  seriesTitle?: string | null;
  seriesNo?: number | null;
  notes?: string | null;
  subjectAddedEntry?: string | null;
  addedEntryPersonalName?: string | null;
  physicalDescription?: string | null;
  source?: string | null;
}

interface IBooksResponse {
  status: number;
  message: string;
  data: {
    book: BookFormData;
  };
}

const EditBook: React.FC = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const {
    handleSubmit,
    register,
    control,
    formState: { errors },
    setValue,
  } = useForm<BookFormData>({
    resolver: schemaResolver,
  });

  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchBookData = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(`http://localhost:5000/api/books/${id}`);
        const data: IBooksResponse = await response.json();
        console.log("single Book data fetched ", data);
        if (response.ok && data.data.book) {
          Object.entries(data.data.book).forEach(([key, value]) => {
            setValue(key as keyof BookFormData, value);
          });
        } else {
          toast.error("Failed to fetch book data.");
        }
      } catch (error) {
        toast.error("Error fetching book data.");
      } finally {
        setIsLoading(false); // Reset loading state
      }
    };

    if (id) {
      fetchBookData();
    }
  }, [id, setValue]);

  // Handle Update  form submission
  const onSubmit = async (data: BookFormData) => {
    try {
      const { _id, __v, ...filteredData } = data;

      const response = await fetch(`http://localhost:5000/api/books/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(filteredData),
      });

      const result = await response.json();
      if (response.ok) {
        toast.success("Book updated successfully");
        setTimeout(() => {
            navigate("/apps/ecommerce/customers");

        }, 1000);
      } else {
        toast.error(result?.message || "Failed to update book");
      }
    } catch (error) {
      toast.error("Error submitting the form");
    }
  };
  if (isLoading) {
    return <div>Loading...</div>; // You can replace this with a spinner or skeleton loader
  }
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

      <form onSubmit={handleSubmit(onSubmit)}>
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
                  errors={errors}
                  control={control}
                  key="title"
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
                  placeholder="e.g : 24-04"
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
                    defaultValue={undefined} // Ensure empty string initially
                    render={({ field }) => (
                      <Form.Control
                        type="date"
                        {...field}
                        value={
                          field.value
                            ? format(new Date(field.value), "yyyy-MM-dd")
                            : ""
                        } // Convert Date to string
                        onChange={(e) => field.onChange(e.target.value)} // Ensure controlled component
                        className="form-control"
                      />
                    )}
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Date of Publication</Form.Label>
                  <Controller
                    name="dateOfPublication"
                    control={control}
                    defaultValue={undefined} // Ensure initial value consistency
                    render={({ field }) => (
                      <Form.Control
                        type="date"
                        {...field}
                        value={
                          field.value
                            ? format(new Date(field.value), "yyyy-MM-dd")
                            : ""
                        } // Convert Date to string
                        onChange={(e) => field.onChange(e.target.value)} // Handle change properly
                        className="form-control"
                      />
                    )}
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Bar Codes</Form.Label>
                  <Controller
                    name="barCodes"
                    control={control}
                    defaultValue={[]}
                    render={({ field }) => (
                      <Form.Control
                        {...field}
                        type="text"
                        placeholder="e.g : 123456789"
                        className="form-control"
                        onChange={(e) => {
                          const values = e.target.value
                            .split(",")
                            .map((v) => v.trim());
                          field.onChange(values);
                        }}
                      />
                    )}
                  />
                </Form.Group>

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

      <ToastContainer />
    </>
  );
};

export default EditBook;
