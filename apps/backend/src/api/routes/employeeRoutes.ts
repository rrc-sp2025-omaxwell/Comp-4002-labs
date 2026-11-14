import express, {Router} from "express";
import { validateRequest } from "../middleware/validate";
import { employeeSchema } from "../validations/employeeValidation";
import * as employeeController from "../controllers/employeeController";

// DEPARTMENT & EMPLOYEE ROUTES

const router: Router = express.Router();

// Get All Employees Route
router.get("/employees", employeeController.getAllEmployees);

// Create New Employee Route
router.post("/employees", validateRequest(employeeSchema), employeeController.createEmployee);


export default router;