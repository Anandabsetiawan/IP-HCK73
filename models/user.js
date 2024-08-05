'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(Order, { foreignKey: 'UserId' })
    }
  }
  User.init({
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: "Email is require"
        },
        notNull: {
          args: true,
          msg: "Email is require"
        },
        isEmail: {
          args: true,
          msg: "Invalid email format"
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: "Password is require"
        },
        notNull: {
          args: true,
          msg: "Password is require"
        }
      }
    }
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};