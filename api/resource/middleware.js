const db = require("./model");

module.exports = {
  checkUniqueResourceName(req, res, next) {
    db.get({ resource_name: req.body.resource_name }).then((resource) => {
      if (resource.length > 0)
        return next({ status: 400, message: "Resource name already exists" });
      next();
    });
  },
};
