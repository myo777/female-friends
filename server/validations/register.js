
const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateRegisterInput(data) {
  let errors = {};

  // first check if empty using our defined function, then validate using built-in isEmpty
  data.name = isEmpty(data.name) ? "" : data.name;
  data.email = isEmpty(data.email) ? "" : data.email;
  data.password = isEmpty(data.password) ? "" : data.password;
  data.confirmPassword = isEmpty(data.confirmPassword)
    ? ""
    : data.confirmPassword;

  /**
   * Name validation:
   * Matches
   * isLength
   * isEmpty
   */
  // NOTICE: Order matters
  if (!Validator.matches(data.name, /^([A-z]|\s)+$/)) {
    errors.name = "Name can only contains space and characters";
  }
  if (!Validator.isLength(data.name, { min: 4, max: 30 })) {
    errors.name = "Name must be between 3 and 30 characters";
  }
  if (Validator.isEmpty(data.name)) {
    errors.name = "Name field is required";
  }

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

  /**
   * Confirmpassword validation:
   * isEmpty
   * equals
   */
  if (Validator.isEmpty(data.confirmPassword)) {
    errors.confirmPassword = "Confirmed Password field is required";
  }
  if (!Validator.equals(data.password, data.confirmPassword)) {
    errors.confirmPassword = "Passwords must match";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};