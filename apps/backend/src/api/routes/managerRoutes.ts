import express, {Router} from "express";
import { validateRequest } from "../middleware/validate";
import { managementSchema } from "../validations/managementValidation";
import * as managementController from "../controllers/managementController";

// MANAGEMENT ROUTES

const router: Router = express.Router();

// Get All Managers Route
router.get("/organization", managementController.getAllManagers);

// Create New Manager Route
router.post("/organization", validateRequest(managementSchema), managementController.createManager);


export default router;