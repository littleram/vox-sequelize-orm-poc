'use strict';

const db = require('./db');

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
  return await db.getRetailerById(id);
}
  
/**
 * Updates retailer
 * @param {String} id
 * @param {Object} obj
 * @return {Promise}
 */
async function updateRetailer(id, obj) {
  return await db.updateRetailer(id, obj);
}

/**
 * Deletes retailer
 * @param {String} id
 * @return {Promise}
 */
async function deleteRetailer(id) {
  return await db.deleteRetailer(id);
}

/**
 * Get retailers information including the list of associated affiliateRetailers from the database
 * @param {array} ids
 */
async function getRetailersWithAffiliateRetailers(ids) {
  return await db.getRetailersWithAffiliateRetailers(ids);
}

module.exports = {
  getRetailers,
  getRetailerById,
  updateRetailer,
  deleteRetailer,
  getRetailersWithAffiliateRetailers
}
