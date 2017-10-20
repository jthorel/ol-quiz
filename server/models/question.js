'use strict';
module.exports = (sequelize, DataTypes) => {
  var Question = sequelize.define('Question', {
    text: DataTypes.TEXT,
    correctOpt: DataTypes.INT,
    order: DataTypes.INT,
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      },
    },
  });
  return Question;
};
