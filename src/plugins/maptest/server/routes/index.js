module.exports = [
  {
    method: "GET",
    path: "/",
    handler: "myController.index",
    config: {
      contentSecurityPolicy: false,

      policies: [],
    },
  },
];
