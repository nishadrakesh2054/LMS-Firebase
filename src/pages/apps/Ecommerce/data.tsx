import product1 from "../../../assets/images/products/product-1.png";
import product2 from "../../../assets/images/products/product-2.png";
import product3 from "../../../assets/images/products/product-3.png";
import product4 from "../../../assets/images/products/product-4.png";
import product5 from "../../../assets/images/products/product-5.png";
import product6 from "../../../assets/images/products/product-6.png";
import product7 from "../../../assets/images/products/product-7.png";
import product8 from "../../../assets/images/products/product-8.png";

export interface ProductItemTypes {
  id: number;
  name: string;
  image: string;
  rating: number;
  price: number;
  quantity: number;
  status: boolean;
}

interface CustomersItemTypes {
  id: number;
  name: string;
  phone: string;
  balance: string;
  orders: number;
  last_order: {
    date: string;
    time: string;
  };
  avatar: string;
  status: string;
}

interface StudentItemTypes {
  roll: number;
  name: string;
  phone: string;
  age: number;
  dob: string;
  grade: string;
  gender: string;
  avatar: string;
}

interface SellersItemTypes {
  id: number;
  name: string;
  store: string;
  ratings: number;
  products: number;
  balance: string;
  created_on: string;
  revenue: string;
  image: string;
}

const products: ProductItemTypes[] = [
  {
    id: 1,
    name: "Men's sport T-shirt",
    image: product1,
    rating: 3,
    price: 39,
    quantity: 98,
    status: true,
  },
  {
    id: 2,
    name: "Jack & Jones Men's T-shirt (Red)",
    image: product2,
    rating: 2,
    price: 98,
    quantity: 23,
    status: true,
  },
  {
    id: 3,
    name: "Women's Marron Tshirt",
    image: product3,
    rating: 5,
    price: 49,
    quantity: 235,
    status: true,
  },
  {
    id: 4,
    name: "Jack & Jones Men's T-shirt (Sky Blue)",
    image: product4,
    rating: 3,
    price: 29,
    quantity: 385,
    status: false,
  },
  {
    id: 5,
    name: "Soft Green Tshirt",
    image: product5,
    rating: 4,
    price: 49,
    quantity: 25,
    status: false,
  },
  {
    id: 6,
    name: "Jack & Jones Men's Jacket",
    image: product6,
    rating: 5,
    price: 19,
    quantity: 19,
    status: true,
  },
  {
    id: 7,
    name: "Women's Soft Green Tshirt",
    image: product7,
    rating: 5,
    price: 99,
    quantity: 36,
    status: false,
  },
  {
    id: 8,
    name: "Roadster Long Sleeves T-shirt",
    image: product8,
    rating: 1,
    price: 29,
    quantity: 128,
    status: true,
  },
];

const customers: CustomersItemTypes[] = [
  {
    id: 1,
    name: "Paul J. Friend",
    phone: "050 414 8778",
    balance: "$12,874.82",
    orders: 43,
    last_order: {
      date: "August 05 2019",
      time: "10:29 PM",
    },
    avatar: "https://robohash.org/laborevoluptateeaque.png?size=60x60&set=set1",
    status: "Active",
  },
  {
    id: 2,
    name: "Bryan J. Luellen",
    phone: "215-302-3376",
    balance: "$874.25",
    orders: 220,
    last_order: {
      date: "August 04 2019",
      time: "08:18 AM",
    },
    avatar:
      "https://robohash.org/voluptatemeligendisint.png?size=60x60&set=set1",
    status: "Active",
  },
  {
    id: 3,
    name: "Kathryn S. Collier",
    phone: "828-216-2190",
    balance: "$125.78",
    orders: 841,
    last_order: {
      date: "November 04 2019",
      time: "10:29 PM",
    },
    avatar: "https://robohash.org/etidsapiente.png?size=60x60&set=set1",
    status: "Blocked",
  },
  {
    id: 4,
    name: "Timothy Kauper",
    phone: "(216) 75 612 706",
    balance: "$561.25",
    orders: 62,
    last_order: {
      date: "February 01 2019",
      time: "07:22 AM",
    },
    avatar: "https://robohash.org/pariaturharumquas.png?size=60x60&set=set1",
    status: "Blocked",
  },
  {
    id: 5,
    name: "Zara Raws",
    phone: "(02) 75 150 655",
    balance: "$2147.84",
    orders: 9,
    last_order: {
      date: "February 01 2019",
      time: "07:22 AM",
    },
    avatar: "https://robohash.org/quodfugiatquae.png?size=60x60&set=set1",
    status: "Active",
  },
  {
    id: 6,
    name: "Annette P. Kelsch",
    phone: "(+15) 73 483 758",
    balance: "$451.28",
    orders: 25,
    last_order: {
      date: "September 07 2019",
      time: "07:22 AM",
    },
    avatar: "https://robohash.org/sapientenonomnis.png?size=60x60&set=set1",
    status: "Active",
  },
  {
    id: 7,
    name: "Jenny C. Gero",
    phone: "078 7173 9261",
    balance: "$965.20",
    orders: 214,
    last_order: {
      date: "November 14 2019",
      time: "07:22 AM",
    },
    avatar: "https://robohash.org/autvelitest.png?size=60x60&set=set1",
    status: "Blocked",
  },
  {
    id: 8,
    name: "Edward Roseby",
    phone: "078 6013 3854",
    balance: "$71584.2",
    orders: 365,
    last_order: {
      date: "February 09 2019",
      time: "07:22 AM",
    },
    avatar: "https://robohash.org/exsuscipitcorporis.png?size=60x60&set=set1",
    status: "Active",
  },
  {
    id: 9,
    name: "Anna Ciantar",
    phone: "(216) 76 298 896",
    balance: "$5482.00",
    orders: 921,
    last_order: {
      date: "September 12 2019",
      time: "07:22 AM",
    },
    avatar: "https://robohash.org/consectetureiuset.png?size=60x60&set=set1",
    status: "Active",
  },
  {
    id: 10,
    name: "Dean Smithies",
    phone: "077 6157 4248",
    balance: "$482.15",
    orders: 68,
    last_order: {
      date: "October 09 2019",
      time: "07:22 AM",
    },
    avatar: "https://robohash.org/aspernaturlaborumab.png?size=60x60&set=set1",
    status: "Active",
  },

];

const sellers: SellersItemTypes[] = [
  {
    id: 1,
    name: "Hayward Billo",
    store: "Boehm-Cremin",
    ratings: 4.9,
    products: 747,
    balance: "$1621.73",
    created_on: "07/18/2019",
    revenue: "$258.26k",
    image: "https://robohash.org/voluptateesseaut.png?size=100x100&set=set1",
  },
  {
    id: 2,
    name: "Adler Villa",
    store: "Hettinger, Shields and Pollich",
    ratings: 3.5,
    products: 883,
    balance: "$20343.72",
    created_on: "07/03/2019",
    revenue: "$152.3k",
    image: "https://robohash.org/pariaturfacilisrem.png?size=100x100&set=set1",
  },
  {
    id: 3,
    name: "Janna MacFayden",
    store: "Fay, Batz and O'Conner",
    ratings: 4.1,
    products: 579,
    balance: "$29121.64",
    created_on: "07/11/2019",
    revenue: "$178.6k",
    image: "https://robohash.org/laborehicvitae.png?size=100x100&set=set1",
  },
  {
    id: 4,
    name: "Ludovika Ryle",
    store: "Adams, Schuppe and Daugherty",
    ratings: 4.9,
    products: 353,
    balance: "$49595.04",
    created_on: "07/12/2019",
    revenue: "$368.2k",
    image:
      "https://robohash.org/laboriosamvoluptatemet.png?size=100x100&set=set1",
  },
  {
    id: 5,
    name: "Jamal Stopper",
    store: "Dooley-Koss",
    ratings: 5.0,
    products: 662,
    balance: "$42698.10",
    created_on: "07/02/2019",
    revenue: "$89.5k",
    image: "https://robohash.org/repellatdelenitinon.png?size=100x100&set=set1",
  },
  {
    id: 6,
    name: "Ralf Orcott",
    store: "Renner Group",
    ratings: 4.0,
    products: 453,
    balance: "$9943.45",
    created_on: "07/24/2019",
    revenue: "$597.8k",
    image: "https://robohash.org/delectusquodquo.png?size=100x100&set=set1",
  },
  {
    id: 7,
    name: "Bevin Weatherhogg",
    store: "Feil-McDermott",
    ratings: 2.6,
    products: 801,
    balance: "$8067.89",
    created_on: "07/25/2019",
    revenue: "$29.3k",
    image: "https://robohash.org/ipsaestad.png?size=100x100&set=set1",
  },
  {
    id: 8,
    name: "Emalia Oglevie",
    store: "Schaefer and Sons",
    ratings: 4.0,
    products: 280,
    balance: "$43724.29",
    created_on: "07/28/2019",
    revenue: "$48.6k",
    image:
      "https://robohash.org/reprehenderitofficiisqui.png?size=100x100&set=set1",
  },
  {
    id: 9,
    name: "Shelley Tyrer",
    store: "Dooley-Lind",
    ratings: 4.3,
    products: 619,
    balance: "$3242.86",
    created_on: "07/16/2019",
    revenue: "$12.1k",
    image: "https://robohash.org/expeditadictaitaque.png?size=100x100&set=set1",
  },
  {
    id: 10,
    name: "Faustine Swine",
    store: "Ledner Inc",
    ratings: 5.0,
    products: 829,
    balance: "$32115.41",
    created_on: "07/16/2019",
    revenue: "$78.2k",
    image: "https://robohash.org/laboreetnisi.png?size=100x100&set=set1",
  },

];

const students: StudentItemTypes[] = [
  {
    roll: 1,
    name: "Aarav Sharma",
    phone: "9876543210",
    age: 16,
    grade: "10th",
    gender: "Male",
    dob: "1998-jan-28",
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    roll: 2,
    name: "Ishika Verma",
    phone: "9876543211",
    age: 15,
    grade: "9th",
    dob: "1998-jan-28",
    gender: "Female",
    avatar: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    roll: 3,
    name: "Rohan Gupta",
    phone: "9876543212",
    age: 17,
    grade: "11th",
    gender: "Male",
    avatar: "https://randomuser.me/api/portraits/men/3.jpg",
    dob: "1998-jan-28",
  },
  {
    roll: 4,
    name: "Simran Kaur",
    phone: "9876543213",
    age: 16,
    grade: "10th",
    gender: "Female",
    avatar: "https://randomuser.me/api/portraits/women/4.jpg",
    dob: "1998-jan-28",
  },
  {
    roll: 5,
    name: "Kabir Mehta",
    phone: "9876543214",
    age: 18,
    grade: "12th",
    gender: "Male",
    avatar: "https://randomuser.me/api/portraits/men/5.jpg",
    dob: "1998-jan-28",
  },
  {
    roll: 6,
    name: "Neha Patil",
    phone: "9876543215",
    age: 17,
    grade: "11th",
    gender: "Female",
    avatar: "https://randomuser.me/api/portraits/women/6.jpg",
    dob: "1998-jan-28",
  },
];

export {  sellers, students , products, customers};
