import { check } from "express-validator";
import { idCardValidator, idUserValidator, typeOfCardValidator } from "../middlewares/idValidators.js";



const validateCardByID = [
    check('id', 'It is a not Mongo ID valid'),
    check('id').custom(idCardValidator),
];

const validateCardCreate = [
    check('id', 'It is a not Mongo ID valid'),
    check('id').custom(idUserValidator),
    check('type', 'type has invalid characters').exists().not().isEmpty().trim(),
    check('bank_emisor', 'bank has invalid characters').exists().not().isEmpty().trim(),
    check('expiration_date', 'expiration date has invalid characters').exists().not().isEmpty().trim(),
    check('user_card', 'user card has invalid characters').exists().not().isEmpty().trim(),
    check('user_number', 'user number has invalid characters').exists().not().isEmpty(),
    // check('cvv', 'cvv has invalid characters').isNumeric(),
    // check('bank').custom(typeOfCardValidator),
]
const validateCardUpdate = [
    check('id', 'It is a not Mongo ID valid'),
    check('id').custom(idCardValidator),
    check('type', 'type has invalid characters').exists().not().isEmpty().trim(),
    check('bank_emisor', 'bank has invalid characters').exists().not().isEmpty().trim(),
    check('expiration_date', 'expiration date has invalid characters').exists().not().isEmpty().trim(),
    check('user_card', 'user card has invalid characters').exists().not().isEmpty().trim(),
    check('user_number', 'user number has invalid characters').exists().not().isEmpty(),
    // check('cvv', 'cvv has invalid characters').isString(),
    // check('bank').custom(typeOfCardValidator),
];

const validateCardDelete = [
    check('id', 'It is a not Mongo ID valid'),
    check('id').custom(idCardValidator),
]

export {
    validateCardByID,
    validateCardCreate,
    validateCardUpdate,
    validateCardDelete
}