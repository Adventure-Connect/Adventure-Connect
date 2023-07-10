const express = require("express");
const router = express.Router();
const userController = require('../controllers/userControllers')

router.get("/", (req, res) => {
  res.send("hello world");

});

//login router, verify user then redirect to user profiles page
//fine that im setting status and sending message in the controller instead of last step? 
router.post('/api/login', userController.verifyLogin, (req, res) => {
  //end the response, with status and message set in verifyUser middleware
  res.end();
  //front code on login component should determine whether to redirect to userProfiles based on error or not 
});

//signup route:
router.post('/api/signup', userController.createNewUser, (req, res) => {
  res.end();
})

module.exports = router;
