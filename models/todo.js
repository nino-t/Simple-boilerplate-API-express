'use strict';
module.exports = (sequelize, DataTypes) => {
  var Todo = sequelize.define('todos', {
    name: DataTypes.STRING,
    desc: DataTypes.STRING,
    is_complete: DataTypes.BOOLEAN
  }, {});
  Todo.associate = function(models) {
    // associations can be defined here
  };
  return Todo;
};