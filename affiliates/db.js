'use strict';

const db = require('../db/models');

/**
 * Gets an array of affiliates
 * @return {Promise.<Array>}
 */
async function getAffiliates() {
  return await db.Affiliate.findAll();
}

/**
 * Gets affiliates by id
 * @param {String} id
 * @return {Promise}
 */
async function getAffiliateById(id) {
  try {
    return await db.Affiliate.findByPk(id);
  } catch (error) {
    console.error('Affiliate not found:', error);
  }
}
  
/**
 * Updates affiliate
 * @param {String} id
 * @param {Object} obj
 * @return {Promise}
 */
async function updateAffiliate(id, obj) {
  try {
    return await db.Affiliate.update(obj['affiliate'], {
      where: {
        id: id,
      },
      returning: true
    });
  } catch (error) {
    console.error('Affiliate not updated:', error);
  }
}

/**
 * Deletes affiliate
 * @param {String} id
 * @return {Promise}
 */
async function deleteAffiliate(id) {
  try {
    return await db.Affiliate.destroy({
      where: {
        id: id
      },
      returning: true
    });
  } catch (error) {
    console.error('Affiliate not deleted:', error);
  }
}

module.exports = {
  getAffiliates,
  getAffiliateById,
  updateAffiliate,
  deleteAffiliate
}
