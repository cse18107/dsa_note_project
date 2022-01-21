const express = require('express');
const userControllers = require('../controllers/userControllers');

const userRouter = express.Router();

userRouter.route('/user').get(userControllers.getAllUsers).post(userControllers.putUser);

userRouter.route('/user/:id').get(userControllers.getUser).patch(userControllers.editUser).delete(userControllers.deleteUser);

module.exports = userRouter;