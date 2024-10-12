import { check } from "express-validator";
import { idUserValidator } from "../middlewares/idValidators.js";


const validateCreateUser = [
    check('email', 'The email is required').isEmail(),
    check('password', 'The password must have more than 6 characters').isLength({ min:6 }),
    
];

const validateLoginUser = [
    check('email', 'The email is required').isEmail(),
    check('password', 'The password must have more than 6 characters').isLength({ min:6 })
];

const validateUserByID = [
    check('id', 'It is not a valid mongo id').isMongoId(),
    check('id').custom(idUserValidator),
];

const validateUserPatch = [
    check('id', 'It is not a valid mongo id').isMongoId(),
    check('id').custom(idUserValidator),
    check('fullname', 'The name is required').not().isEmpty(),
    check('email', 'The email is required').isEmail(),
    check('password', 'The password must have more than 6 characters').isLength({ min:6 }),
    check('phone', 'The Phone only must be a number').isNumeric(),
    check('dni', 'The DNI only must be a number').isNumeric(),
    check('address', 'The Addres is required').not().isEmpty()
];

const validateUserDelete = [
    check('id', 'It is not a valid mongo id').isMongoId(),
    check('id').custom(idUserValidator)
]

export { validateCreateUser,
        validateLoginUser,
        validateUserByID,
        validateUserPatch,
        validateUserDelete
}