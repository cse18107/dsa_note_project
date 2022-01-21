const express = require('express');
const itemControllers = require('../controllers/itemControllers');

const itemRouter = express.Router();

itemRouter.route('/questions').get(itemControllers.getAllItems).post(itemControllers.putItem);
itemRouter.route('/question/:id').get(itemControllers.getItem).patch(itemControllers.editItem).delete(itemControllers.deleteItem);

module.exports = itemRouter;