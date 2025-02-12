import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Row, Col, Card, Button } from "react-bootstrap";
import PageTitle from "../../../components/PageTitle";
import Table from "../../../components/Table";
import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from "react-toastify";



// Book interface based on the schema
export interface IBook {
  id: number;
  date: Date;
  accessionNumber: number;
  isbnNo: string;
  sourceOfAcquisition: string;
  language: string;
  bookNumber: number;
  classNumber: number;
  personalAuthor?: string;
  corporateAuthor?: string;
  conferenceAuthor?: string;
  title: string;
  statementOfResponsibility?: string;
  editionStatement?: string;
  publisherName: string;
  dateOfPublication: Date;
  physicalDescription?: string;
  subjectAddedEntry?: string;
  addedEntryPersonalName?: string;
  source: string;
  callNo: string;
  barCodes: string[];
  seriesTitle?: string;
  seriesNo?: number;
  price: number;
  noOfCopies: number;
  notes?: string;
  createdAt: string;
  updatedAt: string;
}
interface IBooksResponse {
  status: number;
  message: string;
  data: {
    Total_Books: number;
    books: IBook[];
  };
}

const ActionColumn = ({
  deleteBook,
  bookId,
}: {
  deleteBook: (id: number) => void;
  bookId: number;
}) => {
  return (
    <React.Fragment>
      <Link to={`/apps/ecommerce/book-details/${bookId}`} className="action-icon text-success">
        {" "}
        <i className="mdi mdi-eye"></i>
      </Link>
      <Link
        to={`/apps/ecommerce/edit-product/${bookId}`}
        className="action-icon text-primary"
      >
        {" "}
        <i className="mdi mdi-square-edit-outline"></i>
      </Link>
      <Link
        to="#"
        className="action-icon text-danger"
        onClick={(e) => {
          e.preventDefault();
          deleteBook(bookId);
        }}
      >
        {" "}
        <i className="mdi mdi-delete"></i>
      </Link>
    </React.Fragment>
  );
};

// main component
const Customers = () => {
  const navigate = useNavigate();
  const [books, setBooks] = useState<IBook[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  //  getting all data from books
  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/books");
        const data: IBooksResponse = await response.json();
        setBooks(data.data.books);
        setLoading(false);
      } catch (err) {
        setError("Error fetching books data");
        setLoading(false);
      }
    };

    fetchBooks();
  }, []);
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
      value: books.length > 0 ? books.length : 0,
    },
  ];
  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  // Delete book functionality
  const deleteBook = async (id: number) => {
    try {
      const response = await fetch(`http://localhost:5000/api/books/${id}`, {
        method: "DELETE",
      });
      const data = await response.json();
      if (data.status === 200) {
        const updatedBooks = books.filter((book) => book.id !== id);
        setBooks(updatedBooks);
        toast.success("Book Deleted successfully!");
      } else {
        console.error("Error deleting book", data.message);
        toast.error("Error deleting book. Please try again.");
      }
    } catch (err) {
      console.error("Error deleting book", err);
    }
  };



  // columns to render
  const columns = [
    {
      Header: "Book Title",
      accessor: "title",
      sort: true,
      classes: "table-user",
    },
    {
      Header: "ISBN No.",
      accessor: "isbnNo",
      sort: true,
    },
    {
      Header: "Accession No.",
      accessor: "accessionNumber",
      sort: true,
    },
    {
      Header: "Language",
      accessor: "language",
      sort: true,
    },


    {
      Header: "Bar Code",
      accessor: "barCodes",
      sort: true,
    },
    {
      Header: "Number of Copies",
      accessor: "noOfCopies",
      sort: true,
    },

    {
      Header: "Publisher Name",
      accessor: "publisherName",
      sort: true,
    },
    {
      Header: "Personal Author",
      accessor: "personalAuthor",
      sort: true,
    },

    {
      Header: "Price",
      accessor: "price",
      sort: true,
    },
    {
      Header: "Action",
      accessor: "action",
      sort: false,
      Cell: ({ row }: { row: { original: IBook } }) => (
        <ActionColumn bookId={row.original.id} deleteBook={deleteBook} />
      ),
    },
  ];

  return (
    <React.Fragment>
      <PageTitle
        breadCrumbItems={[
          { label: "Library ", path: "/apps/ecommerce/customers" },
          {
            label: "Books",
            path: "/apps/ecommerce/customers",
            active: true,
          },
        ]}
        title={"Books"}
      />

      <Row>
        <Col>
          <Card>
            <Card.Body>
              <Row>
                <Col sm={4}>
                  <Button
                    className="btn btn-danger mb-2"
                    onClick={() => navigate("/apps/ecommerce/edit-product")}
                  >
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
                data={books}
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

      <ToastContainer />
    </React.Fragment>
  );
};

export default Customers;
