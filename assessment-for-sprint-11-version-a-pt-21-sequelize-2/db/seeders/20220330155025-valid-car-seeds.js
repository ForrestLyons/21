'use strict';

const { Car } = require('../models');

// DON'T SPEND ALL YOUR TIME MAKING REAL SEED DATA!!!
// Try to just spend only 5 minutes to create the seed data for testing
// You do not need to put in real car data as values! The data values
  // just need to make sense based from the migration and model files.

const validCars = [
  // Your code here
  {
    make: 'Tesla',
    model: 'Model S',
    modelYear: 2022,
    bodyStyle: 'SEDAN',
    trimLevel: 'Long Range',
    milesPerGallon: null,
    powertrain: 'electric',
    isAutomatic: true,
  },
  {
    make: 'Mercedes-Benz',
    model: 'GLE-Class',
    modelYear: 2022,
    bodyStyle: 'SUV',
    trimLevel: 'GLE 450',
    milesPerGallon: 24,
    powertrain: 'hybrid',
    isAutomatic: true,
  },
  {
    make: 'Chevrolet',
    model: 'Tahoe',
    modelYear: 2022,
    bodyStyle: 'SUV',
    trimLevel: 'LT',
    milesPerGallon: 20,
    powertrain: 'gas',
    isAutomatic: true,
  },
];

module.exports = {
  async up (queryInterface, Sequelize) {
    try {
      await Car.bulkCreate(validCars, {
        validate: true,
      });
    } catch (err) {
      console.log(err);
      throw err;
    }
  },

  async down (queryInterface, Sequelize) {
    for (let carInfo of validCars) {
      try {
        await Car.destroy({
          where: carInfo
        });
      } catch (err) {
        console.log(err);
        throw err;
      }
    }
  },
  // DO NOT MODIFY BELOW (for testing purposes):
  validCars,
};
