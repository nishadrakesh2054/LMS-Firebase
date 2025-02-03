import avatar1 from "../../../../assets/images/users/user-1.jpg";
import avatar3 from "../../../../assets/images/users/user-3.jpg";
import avatar4 from "../../../../assets/images/users/user-4.jpg";
import avatar5 from "../../../../assets/images/users/user-5.jpg";
import avatar6 from "../../../../assets/images/users/user-6.jpg";
import avatar7 from "../../../../assets/images/users/user-7.jpg";
import avatar8 from "../../../../assets/images/users/user-8.jpg";
import avatar9 from "../../../../assets/images/users/user-9.jpg";
import avatar10 from "../../../../assets/images/users/user-10.jpg";

interface ContactsItems {
  id: number;
  avatar: string;
  name: string;
  phone: string;
  email: string;
  gender: string;
  date_of_birth: string;
  address: string;
  company: string;
  designation : string;
  department:string;
}
const contacts: ContactsItems[] = [
    {
      id: 1,
      avatar: avatar4,
      name: "Paul J. Friend",
      phone: "937-330-1634",
      email: "pauljfrnd@jourrapide.com",
      gender: "Male",
      date_of_birth: "1985-07-15",
      address: "123 Elm Street, New York, NY",
      company: "Vine Corporation",
      designation: "Software Engineer",
      department: "IT",
    },
    {
      id: 2,
      avatar: avatar3,
      name: "Bryan J. Luellen",
      phone: "215-302-3376",
      email: "bryuellen@dayrep.com",
      gender: "Male",
      date_of_birth: "1990-03-22",
      address: "45 Oak Avenue, Los Angeles, CA",
      company: "Blue Motors",
      designation: "Marketing Manager",
      department: "Marketing",
    },
    {
      id: 3,
      avatar: avatar3,
      name: "Kathryn S. Collier",
      phone: "828-216-2190",
      email: "collier@jourrapide.com",
      gender: "Female",
      date_of_birth: "1988-11-05",
      address: "78 Pine Street, Chicago, IL",
      company: "Arcanetworks",
      designation: "Network Engineer",
      department: "IT",
    },
    {
      id: 4,
      avatar: avatar1,
      name: "Timothy Kauper",
      phone: "(216) 75 612 706",
      email: "thykauper@rhyta.com",
      gender: "Male",
      date_of_birth: "1982-09-30",
      address: "22 Maple Road, Dallas, TX",
      company: "Boar Records",
      designation: "Sound Engineer",
      department: "Production",
    },
    {
      id: 5,
      avatar: avatar5,
      name: "Zara Raws",
      phone: "(02) 75 150 655",
      email: "austin@dayrep.com",
      gender: "Female",
      date_of_birth: "1995-04-17",
      address: "55 Cedar Lane, San Francisco, CA",
      company: "Bearings",
      designation: "Accountant",
      department: "Finance",
    },
    {
      id: 6,
      avatar: avatar6,
      name: "Annette P. Kelsch",
      phone: "(+15) 73 483 758",
      email: "annette@email.net",
      gender: "Female",
      date_of_birth: "1986-06-10",
      address: "99 Birch Blvd, Miami, FL",
      company: "Shadowshine",
      designation: "HR Manager",
      department: "Human Resources",
    },
    {
      id: 7,
      avatar: avatar7,
      name: "Jenny C. Gero",
      phone: "078 7173 9261",
      email: "jennygero@teleworm.us",
      gender: "Female",
      date_of_birth: "1992-12-25",
      address: "36 Spruce Drive, Seattle, WA",
      company: "Crowares",
      designation: "Software Developer",
      department: "IT",
    },
    {
      id: 8,
      avatar: avatar8,
      name: "Edward Roseby",
      phone: "078 6013 3854",
      email: "edwardR@armyspy.com",
      gender: "Male",
      date_of_birth: "1983-02-14",
      address: "67 Walnut Street, Boston, MA",
      company: "Orangations",
      designation: "Project Manager",
      department: "Operations",
    },
    {
      id: 9,
      avatar: avatar9,
      name: "Anna Ciantar",
      phone: "(216) 76 298 896",
      email: "anna.ciantar@surprisebrews.com",
      gender: "Female",
      date_of_birth: "1991-08-09",
      address: "12 Redwood Lane, Denver, CO",
      company: "Surprise Brews",
      designation: "Quality Analyst",
      department: "Quality Assurance",
    },
    {
      id: 10,
      avatar: avatar10,
      name: "Dean Smithies",
      phone: "077 6157 4248",
      email: "deanes@dayrep.com",
      gender: "Male",
      date_of_birth: "1987-05-29",
      address: "88 Chestnut Road, Phoenix, AZ",
      company: "Apexlife",
      designation: "Business Analyst",
      department: "Business Strategy",
    },
  ];
  
  export { contacts };