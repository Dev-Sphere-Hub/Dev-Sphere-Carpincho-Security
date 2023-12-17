import Joi from 'joi';

export const registerUserSchemaValidation = Joi.object({
    type: Joi.string().valid('admin', 'safety_guard', 'home_owner', 'visitor').default('safety_guard').optional(),
    name: Joi.string()
        .max(50)
        .required()
        .invalid('')
        .regex(/^[ a-zA-ZñÑáéíóúÁÉÍÓÚ]+$/) //"Miguel Durán"
        .messages({
            "string.pattern.base": "Caracteres inválidos, no se permiten dígitos ni caracteres especiales.",
            "string.max": "Máximo 50 caracteres permitidos",
            "any.required": `"name" es requerido.`,
            "any.invalid": `"name" no puede ser vacío.`
        }),
    lastname: Joi.string()
        .max(50)
        .required()
        .regex(/^[ a-zA-ZñÑáéíóúÁÉÍÓÚ]+$/) //"Miguel Durán"
        .invalid('')
        .messages({
            "string.pattern.base": "Caracteres inválidos, no se permiten dígitos ni caracteres especiales.",
            "string.max": "Máximo 50 caracteres permitidos",
            "any.required": `"lastname" es requerido.`,
            "any.invalid": `"lastname" no puede ser vacío.`
        }),
    email: Joi.string()
        .email()
        .required()
        .messages({
            "string.email": "Solo se permiten correos de tipo example@example.com",
            "any.required": `"email" es requerido.`
        }),
    password: Joi.string()
        .min(8)
        .required()
        .messages({
            "string.min": "Debe tener un mínimo de 8 caracteres.",
            "any.required": `"password" es requerido.`
        }),
    phone: Joi.string()
        .regex(/^(?=[0-9]*$)(?:.{9}|.{11})$/) //"958945124 or 9845125474, 9 or 11 digits"
        .optional()
        .messages({
            "string.pattern.base": "El número de teléfono debe contener 9 o 11 dígitos en formato 784512541.",
        }),
    documentId: Joi.string()
        .regex(/^\d{8}(?:[-\s]\d{4})?$/).required()
        .messages({
            "string.pattern.base": "El número de identificación debe tener 8 dígitos.",
            "any.required": `"documentId" es requerido.`
        }),
    address: Joi.string().min(6).optional()
        .messages({
            "string.min": `"address" de contener más de 6 caracteres.`
        }),
}).options({ abortEarly: false })

export const registerVisitSchemaValidation = Joi.object({
    address: Joi.string().required()
        .messages({
            "any.required": `"address" es requerido.`
        }),
    visitorIdentityNumber: Joi.string()
        .regex(/^\d{8}(?:[-\s]\d{4})?$/).required()
        .messages({
            "string.pattern.base": "Formato de número de identificación incorrecto.",
            "any.required": `"visitorIdentityNumber" es requerido.`
        }),
    visitorFullName: Joi.string()
        .regex(/^[ a-zA-ZñÑáéíóúÁÉÍÓÚ]+$/) //"Miguel Durán"
        .max(50).required()
        .messages({
            "string.pattern.base": "Solo se permiten letras incluyendo ~ , espacios y tíldes.",
            "any.required": `"visitorFullName" es requerido.`
        }),
    vehicle: Joi.string()
        .regex(/^[0-9a-fA-F]{24}$/).optional()
        .messages({
            "string.pattern.base": "Formato de ID de Mongo incorrecto."
        }),
    state: Joi.string().valid('authorized', 'unauthorized').required()
        .messages({
            "string.valid": "Valor no permitido.",
            "any.required": `"state" es requerido.`
        }),
    visitType: Joi.string().valid('vehicle', 'walking', 'courierService').required()
        .messages({
            "string.valid": "Valor no permitido.",
            "any.required": `"visitType" es requerido.`
        }),
    note: Joi.string().optional()
}).options({ abortEarly: false })

export const registerNewSchemaValidation = Joi.object({
    category: Joi.string().valid('emergencies', 'featured_events', 'unauthorized_person', 'unauthorized_vehicle').required(),
    detail: Joi.string().max(50).required()
        .messages({
            "string.max": "No debe de tener más de 50 caracteres.",
            "any.required": `"detail" es requerido.`
        }),
    date: Joi.date().optional()
}).options({ abortEarly: false })

export const validationMiddleware = (schema) => {
    return (req, res, next) => {
        const { error } = schema.validate(req.body);

        if (error) {
            return res.status(400).json({
                status: "error",
                //errors: error.details
                errors: (error.details).map(e => `
                    ${e.path[0]}: ${e.message.trim()}`.trim())
            });
        } else {
            // Data is valid, proceed to the next middleware
            next();
        }
    };
};