// import employee and department types defined in prisma/schema.prisma
import { Employee } from "@prisma/client";
import { DepartmentData } from "../../../../../shared/types/department_data_type"

// Initialize prisma client if not alreade and use queries here
import prisma from "../../../prisma/client";

// DEPARTMENT & EMPLOYEE SERVICES

// Get All Employees Service
export const fetchAllEmployees = async (): Promise<DepartmentData> => {
    const employees = await prisma.employee.findMany();

    const departments: DepartmentData = {};

    employees.forEach(employee => {
        if (!departments[employee.department]) {
            departments[employee.department] = [];
        }

        departments[employee.department].push(employee.name);
    });

    return departments;
};

// Create New Employee Service
export const createEmployee = async(
    employeeData: {
        name: string,
        department: string
    }): Promise<Employee> => {
        return prisma.employee.create({
            data: employeeData
        });
}
