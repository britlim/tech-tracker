const express = require('express');
const userController = require('../controllers/userController');
const router = express.Router();

// POST request to /users/login
router.post('/login', userController.loginUser, (req: any, res: { status: (arg0: number) => { (): any; new(): any; json: { (arg0: { username: any; }): void; new(): any; }; }; locals: { username: any; }; }) => {
  res.status(200).json({
    username: res.locals.username,
  });
});

// POST request to /users/signup
router.post('/signup', userController.registerUser, (req: any, res: { status: (arg0: number) => { (): any; new(): any; json: { (arg0: { username: any; }): void; new(): any; }; }; locals: { username: any; }; }) => {
  res.status(200).json({
    username: res.locals.username,
  });
});

module.exports = router;