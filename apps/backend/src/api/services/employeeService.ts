// import employee and department types defined in prisma/schema.prisma
import { Department, Employee } from "@prisma/client";

// Initialize prisma client if not alreade and use queries here
import prisma from "../../../prisma/client";

// DEPARTMENT & EMPLOYEE SERVICES

// Get All Employees Service
export const fetchAllEmployees = async(): Promise<Employee[]> => {
    // get all records in the term table
    return prisma.employee.findMany();
}

// Create New Employee Service
export const createEmployee = async(
    employeeData: {
        name: string,
        department: string
    }): Promise<Employee> => {
        const newEmployee: Employee = await prisma.employee.create({
            data: employeeData
        });
        
        return newEmployee
    }
