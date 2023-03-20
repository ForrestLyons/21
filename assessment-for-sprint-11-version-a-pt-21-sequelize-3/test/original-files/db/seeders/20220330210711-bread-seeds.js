'use strict';

const { Bread } = require('../models');

const validBreads = [
  {
    "name": "Pumpkin Bread",
    "needsRise": false,
  },
  {
    "name": "Sourdough",
    "needsRise": true,
  },
];

module.exports = {
  async up (queryInterface, Sequelize) {
    try {
      await Bread.bulkCreate(validBreads, {
        validate: true,
      });
    } catch (err) {
      console.log(err);
      throw err;
    }
  },

  async down (queryInterface, Sequelize) {
    for (let breadInfo of validBreads) {
      try {
        await Bread.destroy({
          where: breadInfo
        });
      } catch (err) {
        console.log(err);
        throw err;
      }
    }
  }
};