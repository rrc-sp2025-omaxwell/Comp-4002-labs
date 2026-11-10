import Joi, { ObjectSchema } from "joi";

// define the correct shape of a term object received in JSON
// Require a title and definition string at minimum
export const employeeSchema: ObjectSchema = Joi.object({
    name: Joi.string().required.messages({
        "any.required": "Employee name is required",
        "string.empty": "Employee name cannot be empty"
    }),
    department: Joi.string().required().messages({
        "any.required": "Department name is required",
        "string.empty": "Department cannot be empty"
    })
    id: Joi.string().optional()
});