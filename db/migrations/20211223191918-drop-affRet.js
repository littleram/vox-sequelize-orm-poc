'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    
    await queryInterface.dropTable('affiliateRetailers');
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */

    await queryInterface.createTable('affiliateRetailers', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      affiliateId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: {
            tableName: 'affiliates'
          },
          key: 'id'
        }
      },
      retailerId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: {
            tableName: 'retailers'
          },
          key: 'id'
        }
      },
      campaignCode: {
        type: Sequelize.TEXT,
        allowNull: true
      },
      baseUrl: {
        type: Sequelize.TEXT,
        allowNull: true
      },
      retailerCode: {
        type: Sequelize.TEXT,
        allowNull: true
      },
      isDisabled: {
        type: Sequelize.BOOLEAN,
        allowNull: true,
        defaultValue: false
      },
      uuid: {
        type: Sequelize.UUID,
        allowNull: false,
        defaultValue: Sequelize.UUIDV4
      },
      // Timestamps
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW,
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW,
      }
    });
  }
};
