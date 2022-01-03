'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    const products = queryInterface.createTable('products', {
      productId: {
        type: Sequelize.TEXT,
        allowNull: false,
        primaryKey: true
      },
      name: {
        type: Sequelize.TEXT,
        allowNull: false
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
    }),
    merchants = queryInterface.createTable('merchants', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      productId: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      buyUrl: {
        type: Sequelize.TEXT,
        allowNull: true
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
    }),
    affiliateRetailers = queryInterface.createTable('affiliateRetailers', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true
      },
      affiliateId: {
        type: Sequelize.INTEGER,
        allowNull: false
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

    await Promise.all([products, merchants, affiliateRetailers]);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    const products = queryInterface.dropTable('products'),
      merchants = queryInterface.dropTable('merchants'),
      affiliateRetailers = queryInterface.dropTable('affiliateRetailers');

    await Promise.all([products, merchants, affiliateRetailers]);
  }
};
