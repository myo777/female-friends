const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateLoginInput(data) {
  let errors = {};

  // first check if empty using our defined function, then validate using built-in isEmpty
  data.email = isEmpty(data.email) ? "" : data.email;
  data.password = isEmpty(data.password) ? "" : data.password;

  /**
   * Email validation:
   * isEmail
   * isEmpty
   */
  if (!Validator.isEmail(data.email)) {
    errors.email = "Please enter a valid email address";
  }
  if (Validator.isEmpty(data.email)) {
    errors.email = "Email field is required";
  }

  /**
   * Password validation:
   * isLength
   * isEmpty
   */

  if (!Validator.isLength(data.password, { min: 6 })) {
    errors.password = "Password must be at least 6 characters";
  }
  if (Validator.isEmpty(data.password)) {
    errors.password = "Password field is required";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};