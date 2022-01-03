'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class AffiliateRetailer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Affiliate, { constraints: false });
      this.belongsTo(models.Retailer, { constraints: false });
    }
  };

  AffiliateRetailer.init({
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    affiliateId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: {
          tableName: 'affiliates'
        },
        key: 'id'
      }
    },
    retailerId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: {
          tableName: 'retailers'
        },
        key: 'id'
      }
    },
    campaignCode: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    baseUrl: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    retailerCode: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    isDisabled: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    uuid: {
      type: DataTypes.UUID,
      allowNull: false,
      defaultValue: DataTypes.UUIDV4
    },
    // Timestamps
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
  }, {
    sequelize,
    modelName: 'AffiliateRetailer',
    tableName: 'affiliateRetailers'
  });

  return AffiliateRetailer;
};
