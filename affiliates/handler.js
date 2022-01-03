'use strict';

const db = require('./db');

/**
 * Gets an array of affiliateRetailers
 * @return {Promise.<Array>}
 */
async function getAffiliates() {
  return await db.getAffiliates();
}

/**
 * Gets affiliates by id
 * @param {String} id
 * @return {Promise}
 */
async function getAffiliateById(id) {
  return await db.getAffiliateById(id);
}
    
/**
 * Updates affiliate
 * @param {String} id
 * @param {Object} obj
 * @return {Promise}
 */
async function updateAffiliate(id, obj) {
  return await db.updateAffiliate(id, obj);
}

/**
 * Deletes affiliate
 * @param {String} id
 * @return {Promise}
 */
async function deleteAffiliate(id) {
  return await db.deleteAffiliate(id);
}

module.exports = {
  getAffiliates,
  getAffiliateById,
  updateAffiliate,
  deleteAffiliate
}
