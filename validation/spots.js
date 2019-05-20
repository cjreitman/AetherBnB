const Validator = require('validator');

module.exports = function validateSpotInput(data) {
  let errors = {};

  return {
    errors,
    isValid: Object.keys(errors).length === 0
  };
};