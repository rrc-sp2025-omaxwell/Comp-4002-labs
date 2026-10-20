import type { DepartmentData, DepartmentEmployees } from "../../types/department_data_type";
import departmentList from "../../assets/employee_list.json"

let departmentData: DepartmentData = departmentList

// Note: you should now only ever retrieve Employees and Departments 
// from this repository. 
// This repository is the sole manager of requests for this data.

// CRUD op
// ion for creating new employees and 
// returning employees from their departments.

// Get all departments
export function getAllDepartments(): DepartmentData {
    return departmentData
}

// Get department by department name
export function getDepartmentByName(departmentName: string): DepartmentEmployees {
    const departmentEmployees = departmentData[departmentName]

    if(!departmentEmployees) {
        throw new Error(`Failed to fetch employees from department: ${departmentName}`)
    }

    return departmentEmployees
}

// Add employee
export function AddEmployee(
    employeeName: string,
    departmentName: string
): DepartmentData {
    const employees = departmentData[departmentName];

    if (!employees) {
        throw new Error(
            `Department not found: ${departmentName}`
        );
    }

    departmentData = {
        ...departmentData,
        [departmentName]: [...employees, employeeName]
    };

    return departmentData;
}