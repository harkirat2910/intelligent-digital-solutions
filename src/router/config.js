import Home from "../pages/Home";

const routes = [
  {
    path: ["/", "/home"],
    exact: true,
    component: Home, // ✅ Use direct reference instead of string
  },
];

export default routes;
