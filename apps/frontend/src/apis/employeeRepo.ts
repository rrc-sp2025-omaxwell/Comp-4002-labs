import type { DepartmentData } from "../../../../shared/types/department_data_type";

type DepartmentsResponseJSON = {message: String, data: DepartmentData};

// Base url for backend
// Vite provides this value from the .env file rather than dotenv package
const BASE_URL = `${import.meta.env.VITE_API_BASE_URL}/api/v1`;
const EMPLOYEE_ENDPOINT = "/employees"

// Get Employees
export async function fetchEmployees(): Promise<DepartmentData> {
    const employeeResponse: Response = await fetch(
        `${BASE_URL}${EMPLOYEE_ENDPOINT}`
    );

    if(!employeeResponse.ok) {
        throw new Error("Failed to fetch employees.")
    }

    const json: DepartmentsResponseJSON = await employeeResponse.json();
    return json.data;
}

// Add employee
export async function AddEmployee(
    employeeName: string,
    departmentName: string
): Promise<DepartmentData> {
    const employeeResponse: Response = await fetch(
        `${BASE_URL}${EMPLOYEE_ENDPOINT}`,
        {
            method: "POST",
            body: JSON.stringify({
                name: employeeName,
                department: departmentName
            })
        }
    );

    if(!employeeResponse.ok) {
        throw new Error(`Failed to create new employee with name: ${employeeName} in department: ${departmentName}`);
    }

    const json: DepartmentsResponseJSON = await employeeResponse.json();
    return json.data;
}
