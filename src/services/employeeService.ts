import * as EmployeeRepo from "../app/repositories/employeeRepo"
import { type DepartmentData } from "../types/department_data_type";

// Handy little thing to ensure one of 
// two shapes as a result for new accounts
type AddEmployeeResult =
    | { isValid: true; data: DepartmentData }
    | { isValid: false; errors: string[] };


export async function fetchDepartments() {
    const departments = await EmployeeRepo.getAllDepartments();
    return departments
}

export async function createNewEmployee(
    employeeName: string,
    departmentName: string
): Promise<AddEmployeeResult> {
    let isValid = true;
    const errors: string[] = [];

    // Validate Employee Name
    if (employeeName.trim().length < 3) {
        isValid = false,
        errors.push("Employee name must be at least 3 characters long.")
    }

    // Validate input department name
    if(!departmentName) {
        isValid = false;
        errors.push("A department must be selected.")
    } else {
        // Validate input department exsts
        const departments = EmployeeRepo.getAllDepartments();

        if (!Object.hasOwn(departments, departmentName)) {
            isValid= false,
            errors.push(`Department "${departmentName}" not found.`)
        } 
    }

    // Validation failed, stop here
    if ( isValid == false ) {
        return {
            isValid: false, errors
        };
    }

    // Validation Succesful, add new eployee
    try {
        const updatedDepartmentData = EmployeeRepo.AddEmployee(
            employeeName, departmentName
        );

        return {isValid, data: updatedDepartmentData}
    } catch (error) {
        return {
            isValid: false,
            errors: [
                error instanceof Error
                    ? error.message
                    : "Error occured when creating new employee."
            ]
        }
    }
}
