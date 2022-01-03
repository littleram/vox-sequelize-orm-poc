'use strict';

const db = require('./db');

/**
 * Gets an array of products
 * @return {Promise.<Array>}
 */
async function getProducts() {
  return await db.getProducts();
}

/**
 * Gets product by id
 * @param {String} id
 * @return {Promise}
 */
async function getProductById(id) {
  return await db.getProductById(id);
}

/**
 * Updates product
 * @param {String} id
 * @param {Object} obj
 * @return {Promise}
 */
async function updateProduct(id, obj) {
  return await db.updateProduct(id, obj);
}

/**
 * Adds a new product to the database
 * @param {Object} obj
 * @return {Promise}
 */
async function createProduct(obj) {
  return await db.createProduct(obj);
}

/**
 * Deletes product
 * @param {String} id
 * @return {Promise}
 */
 async function deleteProduct(id) {
  return await db.deleteProduct(id); 
}

module.exports = {
  getProducts,
  getProductById,
  updateProduct,
  createProduct,
  deleteProduct
}
