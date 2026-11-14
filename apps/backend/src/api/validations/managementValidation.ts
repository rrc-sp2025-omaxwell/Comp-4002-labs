import Joi, { ObjectSchema } from "joi";

// define the correct shape of a term object received in JSON
// Require a title and definition string at minimum
export const managementSchema: ObjectSchema = Joi.object({
    name: Joi.string().required().messages({
        "any.required": "Manager name is required",
        "string.empty": "Manager name cannot be empty"
    }),
    role: Joi.string().required().messages({
        "any.required": "Manager role is required",
        "string.empty": "Role cannot be empty"
    }),
    title: Joi.string().required().messages({
    "any.required": "Title is required",
    "string.empty": "Title cannot be empty"
    }),
    id: Joi.string().optional(),
    pronouns: Joi.string().optional()
});