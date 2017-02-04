const authRoutes = require('./routes/auth/auth');
const categoryRoutes = require('./routes/categories/categories');
const authHelpers = require('./helpers/auth');
const itemTypesCrud = require('./helpers/item-types');
const modelsCrud = require('./helpers/models');
const crudHelpers = require('./helpers/basic-crud');

const testRunner = Promise.resolve();

testRunner.then(() => {

  // categoryRoutes();
  // authRoutes();
  // authHelpers();
  modelsCrud();
  // itemTypesCrud();
  // crudHelpers();

});
