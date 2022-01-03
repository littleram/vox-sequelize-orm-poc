'use strict';

const db = require('../db/models');

/**
 * Gets an array of affiliateRetailers
 * @return {Promise.<Array>}
 */
async function getAffiliateRetailers() {
  return await db.AffiliateRetailer.findAll();
}

/**
 * Gets affiliateRetailer by id
 * @param {String} id
 * @return {Promise}
 */
async function getAffiliateRetailerById(id) {
  try {
    return await db.AffiliateRetailer.findByPk(id);
  } catch (error) {
    console.error('AffiliateRetailer not found:', error);
  }
}

/**
 * Updates affiliateRetailer
 * @param {String} id
 * @param {Object} obj
 * @return {Promise}
 */
async function updateAffiliateRetailer(id, obj) {
  try {
    return await db.AffiliateRetailer.update(obj['affiliateRetailer'], {
      where: {
        id: id,
      },
      returning: true
    });
  } catch (error) {
    console.error('AffiliateRetailer not updated:', error);
  }
}

/**
 * Adds an affiliateRetailer to the database
 * @param {Object} obj
 * @return {Promise}
 */
async function createAffiliateRetailer(obj) {
  try {
    return await db.AffiliateRetailer.create(obj);
  } catch (error) {
    console.error('Unable to create Affiliate Retailer:', error);
  }
}

/**
 * Deletes affiliateRetailer
 * @param {String} id
 * @return {Promise}
 */
async function deleteAffiliateRetailer(id) {
  try {
    return await db.AffiliateRetailer.destroy({
      where: {
        id: id
      },
      returning: true
    });
  } catch (error) {
    console.error('AffiliateRetailer not deleted:', error);
  }
}

module.exports = {
  getAffiliateRetailers,
  getAffiliateRetailerById,
  createAffiliateRetailer,
  updateAffiliateRetailer,
  deleteAffiliateRetailer
}
