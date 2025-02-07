import React from "react";
import { Route, Navigate, RouteProps } from "react-router-dom";

// components
import PrivateRoute from "./PrivateRoute";

// auth
const Login = React.lazy(() => import("../pages/auth/Login"));
const Logout = React.lazy(() => import("../pages/auth/Logout"));
const Confirm = React.lazy(() => import("../pages/auth/Confirm"));
const ForgetPassword = React.lazy(() => import("../pages/auth/ForgetPassword"));
const Register = React.lazy(() => import("../pages/auth/Register"));
const SignInSignUp = React.lazy(() => import("../pages/auth/SignInSignUp"));
const LockScreen = React.lazy(() => import("../pages/auth/LockScreen"));

// landing
const Landing = React.lazy(() => import("../pages/landing/"));

// dashboard
const Dashboard1 = React.lazy(() => import("../pages/dashboard/Dashboard1/"));

// apps
const CalendarApp = React.lazy(() => import("../pages/apps/Calendar/"));

const ProjectForm = React.lazy(
  () => import("../pages/apps/Projects/ProjectForm")
);

// - ecommece pages
const ProductEdit = React.lazy(
  () => import("../pages/apps/Ecommerce/ProductEdit")
);
const Customers = React.lazy(() => import("../pages/apps/Ecommerce/Customers"));
const EditBook = React.lazy(() => import("../pages/apps/Ecommerce/EditBook"));
const BookDetails = React.lazy(() => import("../pages/apps/Ecommerce/BookDetails"));

// - crm pages
const CRMContacts = React.lazy(() => import("../pages/apps/CRM/Contacts/"));
const CRMCustomers = React.lazy(() => import("../pages/apps/CRM/Customers/"));

// -tickets
const TicketsList = React.lazy(() => import("../pages/apps/Tickets/List/"));
// extra pages
const Error404 = React.lazy(() => import("../pages/error/Error404"));
// - other
const Gallery = React.lazy(() => import("../pages/other/Gallery/"));
// uikit
const Buttons = React.lazy(() => import("../pages/uikit/Buttons"));
const Avatars = React.lazy(() => import("../pages/uikit/Avatars"));
const Cards = React.lazy(() => import("../pages/uikit/Cards"));
const Portlets = React.lazy(() => import("../pages/uikit/Portlets"));
const TabsAccordions = React.lazy(
  () => import("../pages/uikit/TabsAccordions")
);
const Progress = React.lazy(() => import("../pages/uikit/Progress"));
const Modals = React.lazy(() => import("../pages/uikit/Modals"));
const Notifications = React.lazy(() => import("../pages/uikit/Notifications"));
const Offcanvases = React.lazy(() => import("../pages/uikit/Offcanvas"));
const Placeholders = React.lazy(() => import("../pages/uikit/Placeholders"));
const Spinners = React.lazy(() => import("../pages/uikit/Spinners"));
const Images = React.lazy(() => import("../pages/uikit/Images"));
const Carousels = React.lazy(() => import("../pages/uikit/Carousel"));
const ListGroups = React.lazy(() => import("../pages/uikit/ListGroups"));
const EmbedVideo = React.lazy(() => import("../pages/uikit/EmbedVideo"));
const Dropdowns = React.lazy(() => import("../pages/uikit/Dropdowns"));
const Ribbons = React.lazy(() => import("../pages/uikit/Ribbons"));
const TooltipsPopovers = React.lazy(
  () => import("../pages/uikit/TooltipsPopovers")
);
const GeneralUI = React.lazy(() => import("../pages/uikit/GeneralUI"));
const Typography = React.lazy(() => import("../pages/uikit/Typography"));
const Grid = React.lazy(() => import("../pages/uikit/Grid"));

// forms
const BasicForms = React.lazy(() => import("../pages/forms/Basic"));
const FormAdvanced = React.lazy(() => import("../pages/forms/Advanced"));

const FileUpload = React.lazy(() => import("../pages/forms/FileUpload"));

// tables
const BasicTables = React.lazy(() => import("../pages/tables/Basic"));
const AdvancedTables = React.lazy(() => import("../pages/tables/Advanced"));

export interface RoutesProps {
  path: RouteProps["path"];
  name?: string;
  element?: RouteProps["element"];
  route?: any;
  exact?: boolean;
  icon?: string;
  header?: string;
  roles?: string[];
  children?: RoutesProps[];
}

// dashboards
const dashboardRoutes: RoutesProps = {
  path: "/dashboard",
  name: "Dashboards",
  icon: "airplay",
  header: "Navigation",
  children: [
    {
      path: "/",
      name: "Root",
      element: <Navigate to="/dashboard-1" />,
      route: PrivateRoute,
    },
    {
      path: "/dashboard-1",
      name: "Dashboard 1",
      element: <Dashboard1 />,
      route: PrivateRoute,
    },
  ],
};

const calendarAppRoutes: RoutesProps = {
  path: "/apps/calendar",
  name: "Calendar",
  route: PrivateRoute,
  roles: ["Admin"],
  icon: "calendar",
  element: <CalendarApp />,
  header: "Apps",
};

const ecommerceAppRoutes = {
  path: "/apps/ecommerce",
  name: "eCommerce",
  route: PrivateRoute,
  roles: ["Admin"],
  icon: "shopping-cart",
  children: [
    {
      path: "/apps/ecommerce/edit-product",
      name: "Product Edit",
      element: <ProductEdit />,
      route: PrivateRoute,
    },
    {
      path: "/apps/ecommerce/customers",
      name: "Customers",
      element: <Customers />,
      route: PrivateRoute,
    },

    {
      path: "/apps/ecommerce/edit-product/:id",
      name: "EditBook",
      element: <EditBook />,
      route: PrivateRoute,
    },
    {
        path: "/apps/ecommerce/book-details/:id",
        name: "BookDetails",
        element: <BookDetails/>,
        route: PrivateRoute,
      },
  ],
};

const crmAppRoutes = {
  path: "/apps/crm",
  name: "CRM",
  route: PrivateRoute,
  roles: ["Admin"],
  icon: "users",
  children: [
    {
      path: "/apps/crm/contacts",
      name: "Contacts",
      element: <CRMContacts />,
      route: PrivateRoute,
    },

    {
      path: "/apps/crm/customers",
      name: "Customers",
      element: <CRMCustomers />,
      route: PrivateRoute,
    },
  ],
};

const projectAppRoutes = {
  path: "/apps/projects",
  name: "Projects",
  route: PrivateRoute,
  roles: ["Admin"],
  icon: "uil-briefcase",

  children: [
    {
      path: "/apps/projects/create",
      name: "Create Project",
      element: <ProjectForm />,
      route: PrivateRoute,
    },
  ],
};

const ticketsRoutes = {
  path: "/apps/tickets",
  name: "Tickets",
  route: PrivateRoute,
  roles: ["Admin"],
  icon: "aperture",
  children: [
    {
      path: "/apps/tickets/list",
      name: "List",
      element: <TicketsList />,
      route: PrivateRoute,
    },
  ],
};

const appRoutes = [
  calendarAppRoutes,
  ecommerceAppRoutes,
  crmAppRoutes,
  projectAppRoutes,
  ticketsRoutes,
];

// pages
const extrapagesRoutes = {
  path: "/pages",
  name: "Pages",
  icon: "package",
  header: "Custom",
  children: [
    {
      path: "/pages/gallery",
      name: "Gallery",
      element: <Gallery />,
      route: PrivateRoute,
    },
  ],
};

// ui
const uiRoutes = {
  path: "/ui",
  name: "Components",
  icon: "pocket",
  header: "UI Elements",
  children: [
    {
      path: "/ui/base",
      name: "Base UI",
      children: [
        {
          path: "/ui/buttons",
          name: "Buttons",
          element: <Buttons />,
          route: PrivateRoute,
        },
        {
          path: "/ui/cards",
          name: "Cards",
          element: <Cards />,
          route: PrivateRoute,
        },
        {
          path: "/ui/avatars",
          name: "Avatars",
          element: <Avatars />,
          route: PrivateRoute,
        },
        {
          path: "/ui/portlets",
          name: "Portlets",
          element: <Portlets />,
          route: PrivateRoute,
        },
        {
          path: "/ui/tabs-accordions",
          name: "Tabs & Accordions",
          element: <TabsAccordions />,
          route: PrivateRoute,
        },
        {
          path: "/ui/progress",
          name: "Progress",
          element: <Progress />,
          route: PrivateRoute,
        },
        {
          path: "/ui/modals",
          name: "Modals",
          element: <Modals />,
          route: PrivateRoute,
        },
        {
          path: "/ui/notifications",
          name: "Notifications",
          element: <Notifications />,
          route: PrivateRoute,
        },
        {
          path: "/ui/offcanvas",
          name: "Offcanvas",
          element: <Offcanvases />,
          route: PrivateRoute,
        },
        {
          path: "/ui/placeholders",
          name: "Placeholders",
          element: <Placeholders />,
          route: PrivateRoute,
        },
        {
          path: "/ui/spinners",
          name: "Spinners",
          element: <Spinners />,
          route: PrivateRoute,
        },
        {
          path: "/ui/images",
          name: "Images",
          element: <Images />,
          route: PrivateRoute,
        },
        {
          path: "/ui/carousel",
          name: "Carousel",
          element: <Carousels />,
          route: PrivateRoute,
        },
        {
          path: "/ui/listgroups",
          name: "List Groups",
          element: <ListGroups />,
          route: PrivateRoute,
        },
        {
          path: "/ui/embedvideo",
          name: "EmbedVideo",
          element: <EmbedVideo />,
          route: PrivateRoute,
        },
        {
          path: "/ui/dropdowns",
          name: "Dropdowns",
          element: <Dropdowns />,
          route: PrivateRoute,
        },
        {
          path: "/ui/ribbons",
          name: "Ribbons",
          element: <Ribbons />,
          route: PrivateRoute,
        },
        {
          path: "/ui/tooltips-popovers",
          name: "Tooltips & Popovers",
          element: <TooltipsPopovers />,
          route: PrivateRoute,
        },
        {
          path: "/ui/typography",
          name: "Typography",
          element: <Typography />,
          route: PrivateRoute,
        },
        {
          path: "/ui/grid",
          name: "Grid",
          element: <Grid />,
          route: PrivateRoute,
        },
        {
          path: "/ui/general",
          name: "General UI",
          element: <GeneralUI />,
          route: PrivateRoute,
        },
      ],
    },

    {
      path: "/ui/forms",
      name: "Forms",
      children: [
        {
          path: "/ui/forms/basic",
          name: "Basic Elements",
          element: <BasicForms />,
          route: PrivateRoute,
        },
        {
          path: "/ui/forms/advanced",
          name: "Form Advanced",
          element: <FormAdvanced />,
          route: PrivateRoute,
        },

        {
          path: "/ui/forms/upload",
          name: "File Upload",
          element: <FileUpload />,
          route: PrivateRoute,
        },
      ],
    },
    {
      path: "/ui/tables",
      name: "Tables",
      children: [
        {
          path: "/ui/tables/basic",
          name: "Basic",
          element: <BasicTables />,
          route: PrivateRoute,
        },
        {
          path: "/ui/tables/advanced",
          name: "Advanced",
          element: <AdvancedTables />,
          route: PrivateRoute,
        },
      ],
    },
  ],
};

// auth
const authRoutes: RoutesProps[] = [
  {
    path: "/auth/login",
    name: "Login",
    element: <Login />,
    route: Route,
  },
  {
    path: "/auth/register",
    name: "Register",
    element: <Register />,
    route: Route,
  },
  {
    path: "/auth/confirm",
    name: "Confirm",
    element: <Confirm />,
    route: Route,
  },
  {
    path: "/auth/forget-password",
    name: "Forget Password",
    element: <ForgetPassword />,
    route: Route,
  },
  {
    path: "/auth/signin-signup",
    name: "SignIn-SignUp",
    element: <SignInSignUp />,
    route: Route,
  },
  {
    path: "/auth/lock-screen",
    name: "Lock Screen",
    element: <LockScreen />,
    route: Route,
  },
  {
    path: "/auth/logout",
    name: "Logout",
    element: <Logout />,
    route: Route,
  },
];

// public routes
const otherPublicRoutes = [
  {
    path: "/landing",
    name: "landing",
    element: <Landing />,
    route: Route,
  },

  {
    path: "/error-404",
    name: "Error - 404",
    element: <Error404 />,
    route: Route,
  },
];

// flatten the list of all nested routes
const flattenRoutes = (routes: RoutesProps[]) => {
  let flatRoutes: RoutesProps[] = [];

  routes = routes || [];
  routes.forEach((item: RoutesProps) => {
    flatRoutes.push(item);

    if (typeof item.children !== "undefined") {
      flatRoutes = [...flatRoutes, ...flattenRoutes(item.children)];
    }
  });
  return flatRoutes;
};

// All routes
const authProtectedRoutes = [
  dashboardRoutes,
  ...appRoutes,
  extrapagesRoutes,
  uiRoutes,
];
const publicRoutes = [...authRoutes, ...otherPublicRoutes];

const authProtectedFlattenRoutes = flattenRoutes([...authProtectedRoutes]);
const publicProtectedFlattenRoutes = flattenRoutes([...publicRoutes]);
export {
  publicRoutes,
  authProtectedRoutes,
  authProtectedFlattenRoutes,
  publicProtectedFlattenRoutes,
};
