'use strict';

const db = require('./db');

/**
 * Gets an array of affiliateRetailers
 * @return {Promise.<Array>}
 */
async function getAffiliateRetailers() {
  return await db.getAffiliateRetailers();
}

/**
 * Gets affiliateRetailer by id
 * @param {String} id
 * @return {Promise}
 */
async function getAffiliateRetailerById(id) {
  return await db.getAffiliateRetailerById(id);
}

/**
 * Updates affiliateRetailer
 * @param {String} id
 * @param {Object} obj
 * @return {Promise}
 */
async function updateAffiliateRetailer(id, obj) {
  return await db.updateAffiliateRetailer(id, obj);
}

/**
 * Adds a new affiliateRetailer to the database
 * @param {Object} obj
 * @return {Promise}
 */
async function createAffiliateRetailer(obj) {
  return await db.createAffiliateRetailer(obj);
}

/**
 * Deletes affiliateRetailer
 * @param {String} id
 * @return {Promise}
 */
 async function deleteAffiliateRetailer(id) {
  return await db.deleteAffiliateRetailer(id); 
}

module.exports = {
  getAffiliateRetailers,
  getAffiliateRetailerById,
  updateAffiliateRetailer,
  createAffiliateRetailer,
  deleteAffiliateRetailer
}
