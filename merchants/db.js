'use strict';

const db = require('../db/models');

/**
 * Gets an array of merchants
 * @return {Promise.<Array>}
 */
async function getMerchants() {
  return await db.Merchant.findAll();
}

/**
 * Gets merchants by id
 * @param {String} id
 * @return {Promise}
 */
async function getMerchantById(id) {
  try {
    return await db.Merchant.findByPk(id);
  } catch (error) {
    console.error('Merchant not found:', error);
  }
}

/**
 * Updates merchant
 * @param {String} id
 * @param {Object} obj
 * @return {Promise}
 */
async function updateMerchant(id, obj) {
  try {
    return await db.Merchant.update(obj['merchant'], {
      where: {
        id: id,
      },
      returning: true
    });
  } catch (error) {
    console.error('Merchant not updated:', error);
  }
}

/**
 * Adds a merchant to the database
 * @param {Object} obj
 * @return {Promise}
 */
async function createMerchant(obj) {
  try {
    return await db.Merchant.create(obj);
  } catch (error) {
    console.error('Unable to create Merchant:', error);
  }
}

/**
 * Deletes merchant
 * @param {String} id
 * @return {Promise}
 */
async function deleteMerchant(id) {
  try {
    return await db.Merchant.destroy({
      where: {
        id: id
      },
      returning: true
    });
  } catch (error) {
    console.error('Merchant not deleted:', error);
  }
}

module.exports = {
  getMerchants,
  getMerchantById,
  createMerchant,
  updateMerchant,
  deleteMerchant
}
