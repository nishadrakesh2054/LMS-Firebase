export interface MenuItemTypes {
  key: string;
  label: string;
  isTitle?: boolean;
  icon?: string;
  url?: string;
  badge?: {
    variant: string;
    text: string;
  };
  parentKey?: string;
  target?: string;
  children?: MenuItemTypes[];
}

const MENU_ITEMS: MenuItemTypes[] = [
  { key: "navigation", label: "Navigation", isTitle: true },
  {
    key: "dashboards",
    label: "Library Management",
    isTitle: false,
    icon: "airplay",
    badge: { variant: "success", text: "4" },
    children: [
      {
        key: "ds-dashboard-1",
        label: "Dashboard ",
        url: "/dashboard-1",
        parentKey: "dashboards",
      },
    ],
  },
  { key: "apps", label: "Apps", isTitle: true },

  {
    key: "apps-ecommerce",
    label: "Catalogue Management",
    isTitle: false,
    icon: "users",
    children: [
      {
        key: "ecommerce-edit-product",
        label: "Add New Book",
        url: "/apps/ecommerce/edit-product",
        parentKey: "apps-ecommerce",
      },
      {
        key: "ecommerce-customers",
        label: "Books",
        url: "/apps/ecommerce/customers",
        parentKey: "apps-ecommerce",
      },
      //   {
      //     key: "ecommerce-sellers",
      //     label: "Sellers",
      //     url: "/apps/ecommerce/sellers",
      //     parentKey: "apps-ecommerce",
      //   },
    ],
  },
  // Adminstration  settings
  {
    key: "apps-crm",
    label: "Administration ",
    isTitle: false,
    icon: "users",
    children: [
      {
        key: "crm-contacts",
        label: "Student Management",
        url: "/apps/crm/contacts",
        parentKey: "apps-crm",
      },

      {
        key: "crm-customers",
        label: "Staff Management",
        url: "/apps/crm/customers",
        parentKey: "apps-crm",
      },
      {
        key: "crm-customers",
        label: "Department Management",
        url: "/apps/crm/customers",
        parentKey: "apps-crm",
      },
      {
        key: "crm-customers",
        label: "",
        url: "/apps/crm/customers",
        parentKey: "apps-crm",
      },
    ],
  },

  // calendar  settings
  {
    key: "apps-calendar",
    label: "Calendar",
    isTitle: false,
    icon: "calendar",
    url: "/apps/calendar",
  },

  // for demo purpose fields projects

  {
    key: "apps-projects",
    label: "Projects",
    isTitle: false,
    icon: "briefcase",
    children: [
      {
        key: "project-create-project",
        label: "Create Project",
        url: "/apps/projects/create",
        parentKey: "apps-projects",
      },
    ],
  },

  // blacklist projects
  {
    key: "apps-tickets",
    label: "Blacklist",
    isTitle: false,
    icon: "aperture",
    children: [
      {
        key: "tickets-list",
        label: "Block Users",
        url: "/apps/tickets/list",
        parentKey: "apps-tickets",
      },
    ],
  },

  { key: "components", label: "Components", isTitle: true },

  // Table elements
  //   {
  //     key: "tables",
  //     label: "Tables",
  //     isTitle: false,
  //     icon: "grid",
  //     children: [
  //       {
  //         key: "table-basic",
  //         label: "Basic Tables",
  //         url: "/ui/tables/basic",
  //         parentKey: "tables",
  //       },
  //       {
  //         key: "table-advanced",
  //         label: "Advanced Tables",
  //         url: "/ui/tables/advanced",
  //         parentKey: "tables",
  //       },
  //     ],
  //   },

  {
    key: "menu-levels",
    label: "Authentication",
    isTitle: false,
    icon: "share-2",
    children: [
      {
        key: "menu-levels-1-1",
        label: "Register",
        url: "/auth/register",
        parentKey: "menu-levels",
      },
      {
        key: "menu-levels-1-2",
        label: "Login",
        url: "/auth/login",
        parentKey: "menu-levels",
      },
      {
        key: "menu-levels-1-2",
        label: "Forget Password",
        url: "/auth/forget-password",
        parentKey: "menu-levels",
      },
      {
        key: "menu-levels-1-2",
        label: "Confirm",
        url: "/auth/confirm",
        parentKey: "menu-levels",
      },
      {
        key: "menu-levels-1-2",
        label: "SignIn-SignUp",
        url: "/auth/signin-signup",
        parentKey: "menu-levels",
      },
      {
        key: "menu-levels-1-2",
        label: "Logout",
        url: "/auth/logout",
        parentKey: "menu-levels",
      },
      {
        key: "menu-levels-1-2",
        label: "Lock Screen",
        url: "/auth/lock-screen",
        parentKey: "menu-levels",
      },
    ],
  },
];















const HORIZONTAL_MENU_ITEMS: MenuItemTypes[] = [
    {
      key: "dashboards",
      label: "Library Management",
      isTitle: false,
      icon: "airplay",
      badge: { variant: "success", text: "4" },
      children: [
        {
          key: "ds-dashboard-1",
          label: "Dashboard ",
          url: "/dashboard-1",
          parentKey: "dashboards",
        },
      ],
    },
  
    {
      key: "apps-ecommerce",
      label: "Catalogue Management",
      isTitle: false,
      icon: "users",
      children: [
        {
          key: "ecommerce-edit-product",
          label: "Add New Book",
          url: "/apps/ecommerce/edit-product",
          parentKey: "apps-ecommerce",
        },
        {
          key: "ecommerce-customers",
          label: "Books",
          url: "/apps/ecommerce/customers",
          parentKey: "apps-ecommerce",
        },
        //   {
        //     key: "ecommerce-sellers",
        //     label: "Sellers",
        //     url: "/apps/ecommerce/sellers",
        //     parentKey: "apps-ecommerce",
        //   },
      ],
    },
    // Adminstration  settings
    {
      key: "apps-crm",
      label: "Administration ",
      isTitle: false,
      icon: "users",
      children: [
        {
          key: "crm-contacts",
          label: "Student Management",
          url: "/apps/crm/contacts",
          parentKey: "apps-crm",
        },
  
        {
          key: "crm-customers",
          label: "Staff Management",
          url: "/apps/crm/customers",
          parentKey: "apps-crm",
        },
        {
          key: "crm-customers",
          label: "Department Management",
          url: "/apps/crm/customers",
          parentKey: "apps-crm",
        },
        {
          key: "crm-customers",
          label: "",
          url: "/apps/crm/customers",
          parentKey: "apps-crm",
        },
      ],
    },
  
    // calendar  settings


    {
        key: "apps-calendar",
        label: "Calendar",
        isTitle: false,
        icon: "calendar",
        children: [
          {
            key: "apps-calendar",
            label: "Calendar",
            url: "/apps/calendar",
            parentKey: "apps-calendar",
          },
        ],
      },
  
    // for demo purpose fields projects
  
    {
      key: "apps-projects",
      label: "Projects",
      isTitle: false,
      icon: "briefcase",
      children: [
        {
          key: "project-create-project",
          label: "Create Project",
          url: "/apps/projects/create",
          parentKey: "apps-projects",
        },
      ],
    },
  
    // blacklist projects
    {
      key: "apps-tickets",
      label: "Blacklist",
      isTitle: false,
      icon: "aperture",
      children: [
        {
          key: "tickets-list",
          label: "Block Users",
          url: "/apps/tickets/list",
          parentKey: "apps-tickets",
        },
      ],
    },
  
    { key: "components", label: "Components", isTitle: true },
  
 
  
    {
      key: "menu-levels",
      label: "Authentication",
      isTitle: false,
      icon: "share-2",
      children: [
        {
          key: "menu-levels-1-1",
          label: "Register",
          url: "/auth/register",
          parentKey: "menu-levels",
        },
        {
          key: "menu-levels-1-2",
          label: "Login",
          url: "/auth/login",
          parentKey: "menu-levels",
        },
        {
          key: "menu-levels-1-2",
          label: "Forget Password",
          url: "/auth/forget-password",
          parentKey: "menu-levels",
        },
        {
          key: "menu-levels-1-2",
          label: "Confirm",
          url: "/auth/confirm",
          parentKey: "menu-levels",
        },
        {
          key: "menu-levels-1-2",
          label: "SignIn-SignUp",
          url: "/auth/signin-signup",
          parentKey: "menu-levels",
        },
        {
          key: "menu-levels-1-2",
          label: "Logout",
          url: "/auth/logout",
          parentKey: "menu-levels",
        },
        {
          key: "menu-levels-1-2",
          label: "Lock Screen",
          url: "/auth/lock-screen",
          parentKey: "menu-levels",
        },
      ],
    },
  ];



export { MENU_ITEMS, HORIZONTAL_MENU_ITEMS };
