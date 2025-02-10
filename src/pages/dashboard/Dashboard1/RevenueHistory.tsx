// import React from "react";
// import { Card, Dropdown } from "react-bootstrap";
// import { Link } from "react-router-dom";
// import classNames from "classnames";

// interface RevenueHistoryProps {
//   revenueHistory: {
//     id: number;
//     bookId: string;
//     title: string;
//     author: string;
//     available: string;
//   }[];
// }

// const RevenueHistory = ({ revenueHistory }: RevenueHistoryProps) => {
//   return (
//     <>
//       <Card>
//         <Card.Body>
//           <Dropdown className="float-end" align="end">
//             <Dropdown.Toggle as="a" className="card-drop cursor-pointer">
//               <i className="mdi mdi-dots-vertical"></i>
//             </Dropdown.Toggle>
//             <Dropdown.Menu>
//               <Dropdown.Item>Edit Report</Dropdown.Item>
//               <Dropdown.Item>Export Report</Dropdown.Item>
//               <Dropdown.Item>Action</Dropdown.Item>
//             </Dropdown.Menu>
//           </Dropdown>

//           <h4 className="header-title mb-3">Book List</h4>
//           <div className="table-responsive">
//             <table className="table table-borderless table-hover table-nowrap table-centered m-0">
//               <thead className="table-light">
//                 <tr>
//                   <th>BookId</th>
//                   <th>Title</th>
//                   <th>Author</th>
//                   <th>Available</th>
//                   <th>Action</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {(revenueHistory || []).map((item, i) => {
//                   return (
//                     <tr key={i}>
//                       <td>
//                         <h5 className="m-0 fw-normal">{item.marketplaces}</h5>
//                       </td>

//                       <td>{item.date}</td>

//                       <td>{item.payouts}</td>

//                       <td>
//                         <span
//                           className={classNames("badge", {
//                             "bg-soft-warning text-warning":
//                               item.status === "Upcoming",
//                             "bg-soft-success text-success":
//                               item.status === "Paid",
//                             "bg-soft-danger text-danger":
//                               item.status === "Overdue",
//                           })}
//                         >
//                           {item.status}
//                         </span>
//                       </td>

//                       <td>
//                         <Link to="#" className="btn btn-xs btn-light">
//                           <i className="mdi mdi-pencil"></i>
//                         </Link>
//                       </td>
//                     </tr>
//                   );
//                 })}
//               </tbody>
//             </table>
//           </div>
//         </Card.Body>
//       </Card>
//     </>
//   );
// };

// export default RevenueHistory;





import React from "react";
import { Card, Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import classNames from "classnames";

interface RevenueHistoryProps {
  revenueHistory: {
    id: number;
    bookId: string;
    title: string;
    author: string;
    available: string;
  }[];
}

const RevenueHistory = ({ revenueHistory }: RevenueHistoryProps) => {
  return (
    <>
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

          <h4 className="header-title mb-3">Book List</h4>
          <div className="table-responsive">
            <table className="table table-borderless table-hover table-nowrap table-centered m-0">
              <thead className="table-light">
                <tr>
                  <th>BookId</th>
                  <th>Title</th>
                  <th>Author</th>
                  <th>Available</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {revenueHistory.map((item, i) => (
                  <tr key={i}>
                    <td>
                      <h5 className="m-0 fw-normal">{item.bookId}</h5>
                    </td>

                    <td>{item.title}</td>

                    <td>{item.author}</td>

                    <td>
                      <span
                        className={classNames("badge", {
                          "bg-soft-success text-success": item.available === "Yes",
                          "bg-soft-danger text-danger": item.available === "No",
                        })}
                      >
                        {item.available}
                      </span>
                    </td>

                    <td>
                      <Link to="#" className="btn btn-xs btn-light">
                        <i className="mdi mdi-pencil"></i>
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card.Body>
      </Card>
    </>
  );
};

export default RevenueHistory;