const routes = {
  index: "/",
  login: "/login",
  dashboard: "/dashboard",
  maintenance: "/maintenance",
  resetPwd: "/reset-password",
  reports: "/reports",
  users: "/management/users",
  addUser: "/management/users/add-user",
  updateUser: (id) =>
    id
      ? `/management/users/update-user/${id}`
      : "/management/users/update-user/:id",
  plants: "/management/plants",
  addPlant: "/management/plants/add-plant",
  updatePlant: (id) =>
    id
      ? `/management/plants/update-plant/${id}`
      : "/management/plants/update-plant/:id",
  shifts: "/management/shifts",
  addShift: "/management/shifts/add-shift",
  updateShift: (id) =>
    id
      ? `/management/shifts/update-shift/${id}`
      : "/management/shifts/update-shift/:id",
  profile: "/profile",
  notifSettings: "/set-notifications",
  notifications: "/notifications",
};

export default routes;
