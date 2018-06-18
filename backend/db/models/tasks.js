'use strict';
module.exports = (sequelize, DataTypes) => {
  var Tasks = sequelize.define('Tasks', {
    taskname: DataTypes.STRING,
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    status: DataTypes.STRING
  }, {});
  Tasks.associate = function(models) {
    // associations can be defined here
  };
  return Tasks;
};