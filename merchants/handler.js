'use strict';

const db = require('./db');

/**
 * Gets an array of merchants
 * @return {Promise.<Array>}
 */
async function getMerchants() {
  return await db.getMerchants();
}

/**
 * Gets merchant by id
 * @param {String} id
 * @return {Promise}
 */
async function getMerchantById(id) {
  return await db.getMerchantById(id);
}

/**
 * Updates merchant
 * @param {String} id
 * @param {Object} obj
 * @return {Promise}
 */
async function updateMerchant(id, obj) {
  return await db.updateMerchant(id, obj);
}

/**
 * Adds a new merchant to the database
 * @param {Object} obj
 * @return {Promise}
 */
async function createMerchant(obj) {
  return await db.createMerchant(obj);
}

/**
 * Deletes merchant
 * @param {String} id
 * @return {Promise}
 */
 async function deleteMerchant(id) {
  return await db.deleteMerchant(id); 
}

module.exports = {
  getMerchants,
  getMerchantById,
  createMerchant,
  updateMerchant,
  deleteMerchant,
}
