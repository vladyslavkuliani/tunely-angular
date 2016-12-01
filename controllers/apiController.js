function index(req, res) {
  res.json({
    message: "Welcome to tunely!",
    documentation_url: "https://github.com/tgaff/tunely/api.md",
    base_url: "http://tunely.herokuapp.com",
    endpoints: [
      {method: "GET", path: "/api", description: "Describes available endpoints"}
    ]
  });
}

<<<<<<< HEAD
<<<<<<< HEAD


=======
>>>>>>> 3fb4bc4e7e18c5e24c3c8368a0660fb9e0c56b05
=======
>>>>>>> 84c4816c2623a4297512b6d3918939204192f204
module.exports.index = index;
