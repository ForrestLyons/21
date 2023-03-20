'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Package extends Model {
    static associate(models) {
      // define associations here
    }
  };
  Package.init({
    trackingNumber: {
      allowNull: false,
      type: DataTypes.STRING,
      unique: {
        args: true,
        msg: 'Tracking number already exists'
      },
      validate: {
        notNull: {
          msg: 'Tracking number is required'
        },
        len: {
          args: [10, 20],
          msg: 'Tracking number must be between 10 and 20 characters'
        },
        isAlphanumeric: {
          msg: 'Tracking number must be alphanumeric'
        }
      }
    },
    weightKg: {
      allowNull: false,
      type: DataTypes.FLOAT(4, 1),
      validate: {
        notNull: {
          msg: 'Weight is required'
        },
        min: {
          args: 0,
          msg: 'Weight must be a positive number'
        }
      }
    },
    sender: {
      type: DataTypes.STRING(50)
    },
    recipient: {
      allowNull: false,
      type: DataTypes.STRING(50),
      validate: {
        notNull: {
          msg: 'Recipient name is required'
        },
        len: {
          args: [2, 50],
          msg: 'Recipient name must be between 2 and 50 characters'
        }
      }
    },
    isDelivered: {
      allowNull: false,
      type: DataTypes.BOOLEAN
    }
  }, {
    sequelize,
    modelName: 'Package',
    timestamps: true
  });
  return Package;
};
