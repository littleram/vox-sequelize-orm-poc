'use strict';

const db = require('../db/models');

/**
 * Gets an array of retailers
 * @return {Promise.<Array>}
 */
 async function getRetailers() {
  return await db.Retailer.findAll();
}

/**
 * Gets retailers by id
 * @param {String} id
 * @return {Promise}
 */
async function getRetailerById(id) {
  try {
    return await db.Retailer.findByPk(id);
  } catch (error) {
    console.error('Retailer not found:', error);
  }
}
  
/**
 * Updates retailer
 * @param {String} id
 * @param {Object} obj
 * @return {Promise}
 */
async function updateRetailer(id, obj) {
  try {
    return await db.Retailer.update(obj['retailer'], {
      where: {
        id: id,
      },
      returning: true
    });
  } catch (error) {
    console.error('Retailer not updated:', error);
  }
}

/**
 * Deletes retailer
 * @param {String} id
 * @return {Promise}
 */
async function deleteRetailer(id) {
  try {
    return await db.Retailer.destroy({
      where: {
        id: id
      },
      returning: true
    });
  } catch (error) {
    console.error('Retailer not deleted:', error);
  }
}

/**
 * Get retailers information including the list of associated affiliateRetailers from the database
 * @param {array} ids
 */
async function getRetailersWithAffiliateRetailers(ids) {
  try {
    const subquery = db.sequelize.literal(``+
      `(select json_agg(sub) from (`+
        `select "affiliateRetailers".*, "affiliates"."name", "affiliates"."siteCode", "affiliates"."locale" from "affiliateRetailers"`+
        `inner join affiliates on "affiliates"."id" = "affiliateRetailers"."affiliateId"`+
        `where "Retailer"."id" = "affiliateRetailers"."retailerId"`+
      `) as sub), '[]'::json`
    );

    return await db.Retailer.findAll({
      attributes: [
        'id',
        'name',
        'domains',
        'locale',
        'createdAt',
        'updatedAt',
        [db.sequelize.fn('COALESCE', subquery), 'affiliateRetailers']
      ],
      where: {
        id: ids
      }
    });
  } catch (error) {
    console.error('Could not execute query:', error);
  }
}

module.exports = {
  getRetailers,
  getRetailerById,
  updateRetailer,
  deleteRetailer,
  getRetailersWithAffiliateRetailers
}
