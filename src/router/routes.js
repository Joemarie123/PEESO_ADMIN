const routes = [
  {
    path: "/",
    component: () => import("layouts/LoginPage.vue"),
    children: [{ path: "", component: () => import("pages/IndexPage.vue") }],
  },

  {
    path: "/DashBoard",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/DashBoard.vue") },

      {
        path: "/CompanyProfile",
        component: () => import("pages/CompanyProfile.vue"),
      },

      {
        path: "/ViewAllJobs",
        component: () => import("pages/ViewAllJobs.vue"),
      },
    ],
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
