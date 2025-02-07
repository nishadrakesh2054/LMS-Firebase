import { Row, Col, Card, Table } from "react-bootstrap";
import PageTitle from "../../../components/PageTitle";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

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

const BookDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [bookData, setBookData] = useState<BookFormData | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchBookData = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(`http://localhost:5000/api/books/${id}`);
        const data: IBooksResponse = await response.json();
        console.log("single Book data fetched ", data.data.book);

        if (response.ok && data.data.book) {
          setBookData(data.data.book);
        } else {
          console.error("Failed to fetch book data");
        }
      } catch (error) {
        console.error("Error fetching book data.");
      } finally {
        setIsLoading(false);
      }
    };

    if (id) {
      fetchBookData();
    }
  }, [id]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  // Conditional rendering to check if bookData is available
  if (!bookData) {
    return <div>Book data not found</div>;
  }

  return (
    <>
      <PageTitle
        breadCrumbItems={[
          { label: "Ecommerce", path: "/apps/ecommerce/book-details" },
          {
            label: "Add / Edit Product",
            path: "/apps/ecommerce/book-details",
            active: true,
          },
        ]}
        title={"Add / Book Details"}
      />

      <Row>
        <Col lg={12}>
          <Card>
            <Card.Body>
              <Table striped bordered hover responsive>
                <tbody>
                  {/* Book Title and Accession Number */}
                  <tr>
                    <td>
                      <strong>Book Title:</strong>
                    </td>
                    <td>{bookData.title}</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Accession Number:</strong>
                    </td>
                    <td>{bookData.accessionNumber}</td>
                  </tr>

                  {/* ISBN Number and Language */}
                  <tr>
                    <td>
                      <strong>ISBN Number:</strong>
                    </td>
                    <td>{bookData.isbnNo}</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Language:</strong>
                    </td>
                    <td>{bookData.language}</td>
                  </tr>

                  {/* Publisher Name and Date of Publication */}
                  <tr>
                    <td>
                      <strong>Publisher Name:</strong>
                    </td>
                    <td>{bookData.publisherName}</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Date of Publication:</strong>
                    </td>
                    <td>
                      {bookData.dateOfPublication
                        ? new Date(
                            bookData.dateOfPublication
                          ).toLocaleDateString()
                        : "N/A"}
                    </td>
                  </tr>

                  {/* Price and Number of Copies */}
                  <tr>
                    <td>
                      <strong>Price:</strong>
                    </td>
                    <td>${bookData.price}</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Number of Copies:</strong>
                    </td>
                    <td>{bookData.noOfCopies}</td>
                  </tr>

                  {/* Call Number and Barcodes */}
                  <tr>
                    <td>
                      <strong>Call Number:</strong>
                    </td>
                    <td>{bookData.callNo}</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Barcodes:</strong>
                    </td>
                    <td>{bookData.barCodes.join(", ")}</td>
                  </tr>

                  {/* Class Number and Book Number*/}
                  <tr>
                    <td>
                      <strong>Call Number:</strong>
                    </td>
                    <td>{bookData.classNumber}</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Book Number:</strong>
                    </td>
                    <td>{bookData.bookNumber}</td>
                  </tr>

                  {/* Authors (Personal, Corporate, Conference) */}
                  <tr>
                    <td>
                      <strong>Personal Author:</strong>
                    </td>
                    <td>{bookData.personalAuthor || "N/A"}</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Corporate Author:</strong>
                    </td>
                    <td>{bookData.corporateAuthor || "N/A"}</td>
                  </tr>

                  {/* Conference Author and Statement of Responsibility */}
                  <tr>
                    <td>
                      <strong>Conference Author:</strong>
                    </td>
                    <td>{bookData.conferenceAuthor || "N/A"}</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Statement of Responsibility:</strong>
                    </td>
                    <td>{bookData.statementOfResponsibility || "N/A"}</td>
                  </tr>

                  {/* Edition Statement and Series Title */}
                  <tr>
                    <td>
                      <strong>Edition Statement:</strong>
                    </td>
                    <td>{bookData.editionStatement || "N/A"}</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Series Title:</strong>
                    </td>
                    <td>{bookData.seriesTitle || "N/A"}</td>
                  </tr>

                  {/* Series Number and Source of Acquisition */}
                  <tr>
                    <td>
                      <strong>Series Number:</strong>
                    </td>
                    <td>{bookData.seriesNo || "N/A"}</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Source of Acquisition:</strong>
                    </td>
                    <td>{bookData.sourceOfAcquisition}</td>
                  </tr>

                  {/* Subject Added Entry and Added Entry Personal Name */}
                  <tr>
                    <td>
                      <strong>Subject Added Entry:</strong>
                    </td>
                    <td>{bookData.subjectAddedEntry || "N/A"}</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Added Entry Personal Name:</strong>
                    </td>
                    <td>{bookData.addedEntryPersonalName || "N/A"}</td>
                  </tr>

                  {/* Physical Description and Source */}
                  <tr>
                    <td>
                      <strong>Physical Description:</strong>
                    </td>
                    <td>{bookData.physicalDescription || "N/A"}</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Source:</strong>
                    </td>
                    <td>{bookData.source || "N/A"}</td>
                  </tr>

                  {/* Notes */}
                  <tr>
                    <td>
                      <strong>Notes:</strong>
                    </td>
                    <td>{bookData.notes || "N/A"}</td>
                  </tr>
                </tbody>
              </Table>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default BookDetails;
