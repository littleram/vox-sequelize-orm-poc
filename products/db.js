'use strict';

const db = require('../db/models');

/**
 * Gets an array of products
 * @return {Promise.<Array>}
 */
async function getProducts() {
  return await db.Product.findAll();
}

/**
 * Gets product by id
 * @param {String} id
 * @return {Promise}
 */
async function getProductById(id) {
  try {
    return await db.Product.findByPk(id);
  } catch (error) {
    console.error('Product not found:', error);
  }
}

/**
 * Updates product
 * @param {String} id
 * @param {Object} obj
 * @return {Promise}
 */
async function updateProduct(id, obj) {
  try {
    return await db.Product.update(obj['product'], {
      where: {
        productId: id,
      },
      returning: true
    });
  } catch (error) {
    console.error('Product not updated:', error);
  }
}

/**
 * Adds a product to the database
 * @param {Object} obj
 * @return {Promise}
 */
async function createProduct(obj) {
  try {
    return await db.Product.create(obj);
  } catch (error) {
    console.error('Unable to create Product:', error);
  }
}

/**
 * Deletes product
 * @param {String} id
 * @return {Promise}
 */
async function deleteProduct(id) {
  try {
    return await db.Product.destroy({
      where: {
        productId: id
      },
      returning: true
    });
  } catch (error) {
    console.error('Product not deleted:', error);
  }
}

module.exports = {
  getProducts,
  getProductById,
  updateProduct,
  createProduct,
  deleteProduct
}
