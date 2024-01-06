import Joi from 'joi';

export const loginSchemaValidation = Joi.object({
    email: Joi.string()
        .invalid('')
        .email()
        .required()
        .messages({
            "string.email": "Solo se permiten correos de tipo example@example.com",
            "any.required": `"email" es requerido.`,
            "any.invalid": `"email" no puede ser vacío.`
        }),
    password: Joi.string()
        .invalid('')
        .required()
        //.regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,50})/)
        //.regex(/^(?=.*\p{Ll})(?=.*\p{Lu})(?=.*[\d|@#$!%*?&])[\p{L}\d@#$!%*?&]{8,96}$/)
        .messages({
            //"string.pattern.base": "password debe contener almenos una Mayúscula, una minúscula, un número y un caracter especial como #$!%*?& .",
            "any.required": `"password" es requerido.`,
            "any.invalid": `"password" no puede ser vacío.`
        })
}).options({ abortEarly: false })

export const recoverPasswordSchemaValidation = Joi.object({
    email: Joi.string()
        .invalid('')
        .email()
        .required()
        .messages({
            "string.email": "Solo se permiten correos de tipo example@example.com",
            "any.required": `"email" es requerido.`,
            "any.invalid": `"email" no puede ser vacío.`
        })
}).options({ abortEarly: false })

export const resetPasswordSchemaValidation = Joi.object({
    newPassword: Joi.string()
        .invalid('')
        .required()
        //.regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,50})/)
        //.regex(/^(?=.*\p{Ll})(?=.*\p{Lu})(?=.*[\d|@#$!%*?&])[\p{L}\d@#$!%*?&]{8,96}$/)
        .messages({
            //"string.pattern.base": "password debe contener almenos una Mayúscula, una minúscula, un número y un caracter especial como #$!%*?& .",
            "any.required": `"password" es requerido.`,
            "any.invalid": `"password" no puede ser vacío.`
        })
}).options({ abortEarly: false })

export const updateUserSchemaValidation = Joi.object({
    fullName: Joi.string()
        .max(50)
        .optional()
        .invalid('')
        .regex(/^[ a-zA-ZñÑáéíóúÁÉÍÓÚ]+$/) //"Miguel Durán"
        .messages({
            "string.pattern.base": "Caracteres inválidos, no se permiten dígitos ni caracteres especiales.",
            "string.max": "Máximo 50 caracteres permitidos",
            "any.invalid": `"name" no puede ser vacío.`
        }),
    email: Joi.string()
        .email()
        .optional()
        .messages({
            "string.email": "Solo se permiten correos de tipo example@example.com",
            "any.required": `"email" es requerido.`
        }),
    phone: Joi.string()
        .regex(/(^[0-9]{8,15}$)/) //"958945124 or 9845125474, 9 or 11 digits"
        .optional()
        .messages({
            "string.pattern.base": "El número de teléfono debe contener 9 o 11 dígitos en formato 784512541.",
        }),
    address: Joi.string()
        .min(6)
        .optional()
        .messages({
            "string.min": `"address" de contener más de 6 caracteres.`
        }),
    image: Joi.any().optional()
}).options({ abortEarly: false })

export const registerUserSchemaValidation = Joi.object({
    type: Joi.string()
        .valid('admin', 'safety_guard', 'home_owner', 'visitor')
        .optional(),
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
        .invalid('')
        .required()
        .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,50})/)
        .messages({
            "string.pattern.base": "password debe contener almenos una Mayúscula, una minúscula, un número y un caracter especial como #$!%*?& .",
            "any.required": `"password" es requerido.`,
            "any.invalid": `"name" no puede ser vacío.`
        }),
    phone: Joi.string()
        .regex(/(^[0-9]{8,15}$)/) //"958945124 or 9845125474, 9 to 15 digits"
        .optional()
        .messages({
            "string.pattern.base": "El número de teléfono debe contener entre 8 y 15 dígitos.",
        }),
    documentId: Joi.string()
        .regex(/(^[0-9]{8,15}$)/)
        .required()
        .messages({
            "string.pattern.base": "El número de identificación debe tener entre 8 y 15 dígitos.",
            "any.required": `"documentId" es requerido.`
        }),
    address: Joi.string()
        .min(6)
        .optional()
        .messages({
            "string.min": `"address" de contener más de 6 caracteres.`
        }),
    image: Joi.any().optional()
}).options({ abortEarly: false })

export const registerVisitSchemaValidation = Joi.object({
    address: Joi.string()
        .required()
        .messages({
            "any.required": `"address" es requerido.`
        }),
    visitorIdentityNumber: Joi.string()
        .regex(/(^[0-9]{8,15}$)/)
        .required()
        .messages({
            "string.pattern.base": "El número de identificación de la visita debe tener entre 8 y 15 dígitos.",
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
        .regex(/^[0-9a-fA-F]{24}$/)
        .optional()
        .messages({
            "string.pattern.base": "Formato de ID de Mongo incorrecto."
        }),
    state: Joi.string()
        .valid('authorized', 'unauthorized')
        .required()
        .messages({
            "string.valid": "Valor no permitido.",
            "any.required": `"state" es requerido.`
        }),
    visitType: Joi.string()
        .valid('vehicle', 'walking', 'courierService')
        .required()
        .messages({
            "string.valid": "Valor no permitido.",
            "any.required": `"visitType" es requerido.`
        }),
    note: Joi.string()
        .optional(),
    image: Joi.any().optional()
}).options({ abortEarly: false })

export const updateVisitSchemaValidation = Joi.object({
    state: Joi.string()
        .valid('authorized', 'unauthorized')
        .optional()
        .messages({
            "string.valid": "Valor no permitido.",
            "any.required": `"state" es requerido.`
        }),
    note: Joi.string()
        .optional(),
    checkOut: Joi.date()
        .optional(),
    image: Joi.any().optional()
}).options({ abortEarly: false })

export const registerNewSchemaValidation = Joi.object({
    category: Joi.string()
        .valid('emergencies', 'featured_events', 'unauthorized_person', 'unauthorized_vehicle')
        .required(),
    detail: Joi.string()
        .max(50)
        .required()
        .messages({
            "string.max": "No debe de tener más de 50 caracteres.",
            "any.required": `"detail" es requerido.`
        }),
    date: Joi.date().optional(),
    image: Joi.any().optional()
}).options({ abortEarly: false })

export const registerVehicleSchemaValidation = Joi.object({
    plateCode: Joi.string()
        .regex(/^[a-zA-Z0-9]+$/)
        .length(6)
        .required()
        .messages({
            "string.pattern.base": "Se permiten únicamente letras y números.",
            "any.required": `"plateCode" es requerido.`,
            "string.length": "Debe de contener 6 caracteres."
        }),
    carInsurance: Joi.string()
        .regex(/^[a-zA-Z0-9]+$/)
        .length(11)
        .required()
        .messages({
            "string.pattern.base": "Solo se permiten letras y números.",
            "any.required": `"carInsurance" es requerido.`,
            "string.length": "Debe de contener 11 caracteres."
        }),
    details: Joi.string()
        .required()
        .messages({
            "any.required": `"details" es requerido.`
        }),
    image: Joi.any().optional()
}).options({ abortEarly: false })

export const registerCourierServiceSchemaValidation = Joi.object({
    type: Joi.string()
        .regex(/^[ a-zA-Z]+$/)
        .required()
        .messages({
            "string.pattern.base": "Se permiten únicamente espacios, letras y números.",
            "any.required": `"type" es requerido.`,
        }),
    recipient: Joi.string()
        .regex(/^[0-9a-fA-F]{24}$/)
        .required()
        .messages({
            "string.pattern.base": "Formato de ID de Mongo incorrecto."
        }),
    deliverer: Joi.string()
        .regex(/^[ a-zA-Z]+$/)
        .required()
        .messages({
            "string.pattern.base": "Se permiten únicamente espacios, letras.",
            "any.required": `"deliverer" es requerido.`,
        }),
    description: Joi.string()
        .regex(/^[ 0-9a-zA-Z]+$/)
        .required()
        .messages({
            "string.pattern.base": "Sólo se permiten espacios, letras y números.",
            "any.required": `"description" es requerido.`
        }),
    status: Joi.string()
        .valid('received', 'delivered')
        .default('received')
        .required()
        .messages({
            "string.pattern.base": "Sólo se permiten espacios, letras y números.",
            "any.required": `"status" es requerido.`
        }),
    image: Joi.any().optional()
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