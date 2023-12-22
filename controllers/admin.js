exports.getDashboard = (req, res) => {
  res.render("admin/dashboard", { title: "dashboard", path: req.path });
};
