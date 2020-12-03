const router = require("express").Router();
const userController = require("../../controllers/userController.js");

router
  .route("/api")
  .post(userController.create)
  .put(userController.update)

router
  .route("/api/user/login")
  .post(passport.authenticate('local'))

router
  .route("/api/user")
  .get(userController.findAll)


module.exports = router;