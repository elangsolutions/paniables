const routes = [
  {
    path: ["/", "/home"],
    exact: true,
    component: "Home",
  },
  {
    path: ["/products"],
    exact: true,
    component: "Products",
  },
  {
    path: ["/cart"],
    exact: true,
    component: "Cart",
  },

];

export default routes;
