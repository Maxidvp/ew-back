"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reviewValidator = exports.loginValidator = exports.authNurseryValidator = exports.authUserValidator = void 0;
const express_validator_1 = require("express-validator");
const validateResult = (req, res, next) => {
    try {
        (0, express_validator_1.validationResult)(req).throw();
        return next();
    }
    catch (err) {
        res.status(403);
        res.send({ errors: err.array() });
    }
};
//User register
exports.authUserValidator = [
    (0, express_validator_1.check)("email")
        .exists()
        .withMessage("Email field is required")
        .isLength({ min: 5 })
        .withMessage("Email must have at least six (6) characters long")
        .isLength({ max: 20 })
        .withMessage("Email can't have more than twenty (20) characters")
        .isEmail()
        .withMessage("It should be an email"),
    (0, express_validator_1.check)("password")
        .exists()
        .withMessage("Password field is required")
        .isLength({ min: 6 })
        .withMessage("Password must have at least six (6) characters long")
        .isLength({ max: 20 })
        .withMessage("Password can't have more than twenty (20) characters")
        .isStrongPassword({
        minLowercase: 1,
        minUppercase: 1,
        minNumbers: 1,
        minSymbols: 1,
    })
        .withMessage("Password must contain at least 1 uppercase letter, 1 lowercase letter, 1 number and special characters")
        .not()
        .isEmpty()
        .withMessage("Password cannot be empty"),
    (0, express_validator_1.check)("first_name")
        .exists()
        .withMessage("First name field is required")
        .isString()
        .withMessage("First name must be a valid string")
        .not()
        .isEmpty()
        .withMessage("First name cannot be empty"),
    (0, express_validator_1.check)("last_name")
        .exists()
        .withMessage("Last name field is required")
        .isString()
        .withMessage("Last name must be a valid string")
        .not()
        .isEmpty()
        .withMessage("Last name cannot be empty"),
    /*check("username")
      .exists()
      .withMessage("Username field is required")
      .isLength({ min: 5 })
      .withMessage("Username must have at least six (6) characters long")
      .isLength({ max: 20 })
      .withMessage("Username can't have more than twenty (20) characters")
      .not()
      .isEmpty()
      .withMessage("Username cannot be empty"),
    check("birthdate")
      .exists()
      .withMessage("Birthdate field is required")
      //.isDate({ format: "DD/MM/YYYY" })
      //.withMessage("Birthdate must be a valid Date")
      .not()
      .isEmpty()
      .withMessage("Birthdate cannot be empty"),
    check("img")
      .exists()
      .withMessage("Img field is required")
      // .isURL()
      //.withMessage("Img must be a valid url img")
      .not()
      .isEmpty()
      .withMessage("Img cannot be empty"),
    check("social")
      .exists()
      .withMessage("Social field is required")
      .isString()
      .withMessage("Social must be a valid string")
      .not()
      .isEmpty()
      .withMessage("Social cannot be empty"),*/
    /*
    check("role")
      .exists()
      .withMessage("Role field is required")
      .isMongoId()
      .withMessage("Role field must contain a valid Mongo _id")
      .not()
      .isEmpty()
      .withMessage("Role cannot be empty"),
    check("review")
      .exists()
      .withMessage("Review field is required")
      .isMongoId()
      .withMessage("Review field must contain a valid Mongo _id")
      .not()
      .isEmpty()
      .withMessage("Review cannot be empty"),
  */
    (req, res, next) => {
        validateResult(req, res, next);
    },
];
//Nursery register
exports.authNurseryValidator = [
    (0, express_validator_1.check)("email")
        .exists()
        .withMessage("Email field is required")
        .isLength({ min: 5 })
        .withMessage("Email must have at least six (6) characters long")
        .isLength({ max: 20 })
        .withMessage("Email can't have more than twenty (20) characters")
        .isEmail()
        .withMessage("It should be an email"),
    (0, express_validator_1.check)("password")
        .exists()
        .withMessage("Password field is required")
        .isLength({ min: 6 })
        .withMessage("Password must have at least six (6) characters long")
        .isLength({ max: 20 })
        .withMessage("Password can't have more than twenty (20) characters")
        .isStrongPassword({
        minLowercase: 1,
        minUppercase: 1,
        minNumbers: 1,
        minSymbols: 1,
    })
        .withMessage("Password must contain at least 1 uppercase letter, 1 lowercase letter, 1 number and special characters")
        .not()
        .isEmpty()
        .withMessage("Password cannot be empty"),
    (0, express_validator_1.check)("first_name")
        .exists()
        .withMessage("First name field is required")
        .isString()
        .withMessage("First name must be a valid string")
        .not()
        .isEmpty()
        .withMessage("First name cannot be empty"),
    (0, express_validator_1.check)("last_name")
        .exists()
        .withMessage("Last name field is required")
        .isString()
        .withMessage("Last name must be a valid string")
        .not()
        .isEmpty()
        .withMessage("Last name cannot be empty"),
    /*check("username")
      .exists()
      .withMessage("Username field is required")
      .isLength({ min: 5 })
      .withMessage("Username must have at least six (6) characters long")
      .isLength({ max: 20 })
      .withMessage("Username can't have more than twenty (20) characters")
      .not()
      .isEmpty()
      .withMessage("Username cannot be empty"),
    check("birthdate")
      .exists()
      .withMessage("Birthdate field is required")
      //.isDate()
      //.withMessage("Birthdate must be a valid Date")
      .not()
      .isEmpty()
      .withMessage("Birthdate cannot be empty"),
  
    check("img")
      .exists()
      .withMessage("Img field is required")
      //.isURL()
      //.withMessage("Img must be a valid url img")
      .not()
      .isEmpty()
      .withMessage("Img cannot be empty"),
  
    check("social")
      .exists()
      .withMessage("Social field is required")
      .isString()
      .withMessage("Social must be a valid string")
      .not()
      .isEmpty()
      .withMessage("Social cannot be empty"),*/
    /*check("telephone")
      .exists()
      .withMessage("Telephone field is required")
      .isNumeric({ no_symbols: true })
      .withMessage("Telephone must be a number")
      //.isInt({ gt: 0, lt: 20 })
      //.withMessage("Telephone must be between one (1) and twenty (20)")
      .not()
      .isEmpty()
      .withMessage("Telephone cannot be empty"),
    check("province")
      .exists()
      .withMessage("Province field is required")
      .isLength({ min: 5 })
      .withMessage("Province must have at least six (6) characters long")
      .isLength({ max: 20 })
      .withMessage("Province can't have more than twenty (20) characters")
      .not()
      .isEmpty()
      .withMessage("Province cannot be empty"),
    check("city")
      .exists()
      .withMessage("City field is required")
      .isLength({ min: 5 })
      .withMessage("City must have at least six (6) characters long")
      .isLength({ max: 20 })
      .withMessage("City can't have more than twenty (20) characters")
      .not()
      .isEmpty()
      .withMessage("City cannot be empty"),
    check("adress")
      .exists()
      .withMessage("Adress field is required")
      .isLength({ min: 5 })
      .withMessage("Adress must have at least six (6) characters long")
      .isLength({ max: 50 })
      .withMessage("Adress can't have more than fifty (50) characters")
      .not()
      .isEmpty()
      .withMessage("Adress cannot be empty"),*/
    /*
      check("role")
      .exists()
      .withMessage("Role field is required")
      .isMongoId()
      .withMessage("Role field must contain a valid Mongo _id")
      .not()
      .isEmpty()
      .withMessage("Role cannot be empty"),
   */
    (req, res, next) => {
        validateResult(req, res, next);
    },
];
//works for User, Nursery entities
exports.loginValidator = [
    (0, express_validator_1.check)("email")
        .exists()
        .withMessage("Email field is required")
        .isLength({ min: 5 })
        .withMessage("Email must have at least six (6) characters long")
        .isLength({ max: 20 })
        .withMessage("Email can't have more than twenty (20) characters")
        .isEmail()
        .withMessage("It should be an email"),
    (0, express_validator_1.check)("password")
        .exists()
        .withMessage("Password field is required")
        .isLength({ min: 6 })
        .withMessage("Password must have at least six (6) characters long")
        .isLength({ max: 20 })
        .withMessage("Password can't have more than twenty (20) characters")
        .not()
        .isEmpty()
        .withMessage("Password cannot be empty"),
    (req, res, next) => {
        validateResult(req, res, next);
    },
];
//validates new Review
exports.reviewValidator = [
    (0, express_validator_1.check)("username")
        .exists()
        .withMessage("Username field is required")
        .isMongoId()
        .withMessage("Username field must contain a valid Mongo _id")
        .not()
        .isEmpty()
        .withMessage("Username cannot be empty"),
    (0, express_validator_1.check)("description")
        .exists()
        .withMessage("Description field is required")
        .isLength({ min: 10 })
        .withMessage("Description must have at least ten (10) characters long")
        .isLength({ max: 100 })
        .withMessage("Description can't have more than one hundred (100) characters")
        .not()
        .isEmpty()
        .withMessage("Description cannot be empty"),
    (0, express_validator_1.check)("rate")
        .exists()
        .withMessage("Rate field is required")
        .isNumeric({ no_symbols: true })
        .withMessage("Rate must be a number")
        .isInt({ gt: 0, lt: 6 })
        .withMessage("Rate must be between one (1) and five (5)")
        .not()
        .isEmpty()
        .withMessage("Rate cannot be empty"),
    (req, res, next) => {
        validateResult(req, res, next);
    },
];
