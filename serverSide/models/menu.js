'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Menu extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Menu.hasMany(Order, { foreignKey: 'MenuId' })
    }
  }
  Menu.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: "Name is require"
        },
        notNull: {
          args: true,
          msg: "Name is require"
        }
      }
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: "Description is require"
        },
        notNull: {
          args: true,
          msg: "Description is require"
        }
      }


    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: "Price is require"
        },
        notNull: {
          args: true,
          msg: "Price is require"
        }
      }
    },
    stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: "Stock is require"
        },
        notNull: {
          args: true,
          msg: "Stock is require"
        }
      }
    },
    imageUrl: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: "ImageUrl is require"
        },
        notNull: {
          args: true,
          msg: "ImageUrl is require"
        }
      }
    }
  }, {
    sequelize,
    modelName: 'Menu',
  });
  return Menu;
};