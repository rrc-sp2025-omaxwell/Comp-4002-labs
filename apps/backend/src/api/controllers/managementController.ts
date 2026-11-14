import { Request, Response, NextFunction } from "express";
import * as managementService from "../services/managementService";
import { successResponse } from "../models/responseModel";

// Manager CONTROLLERS

// Get All Managers Controller

export const getAllManagers = async(
    _req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
    try{
        const management = await managementService.fetchAllManagers();
        res.status(200).json(
            successResponse(management, "Organization management retrieved succesfully.")
        );
    } catch (error) {
        next(error)
    }
}

// Create Manager Controller

export const createManager = async(
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {    
    try {
        const newManager = await managementService.createManager(req.body);
        res.status(201)
            .json(successResponse(newManager, "Manager created succesfully."));
    } catch (error) {
        next(error)
    }
}
