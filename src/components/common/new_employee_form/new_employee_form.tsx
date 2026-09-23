import { useState } from "react";
import type { DepartmentData } from "../../../types/department_data_type";
import "./new_employee_form.css"

// Extend setEmployees as a prop down from app.tsx
type NewEmployeeProp = {
    setEmployees: React.Dispatch<React.SetStateAction<DepartmentData>>;
}

export function NewEmployeeForm({ setEmployees }: NewEmployeeProp) {
        
    const [employeeName, setEmployeeName] = useState("");
    const [departmentName, setDepartmentName] = useState("");
    // State for new error messages
    const [errorMessage, setErrorMessage] = useState("");


    function handleFormSubmit(event: React.FormEvent<HTMLFormElement>) {

        event.preventDefault();

        // Form input validation

        // Get first name
        const trimmedEmployeeName = employeeName.trim()
        const nameSpace = trimmedEmployeeName.indexOf(" ")
        const employeeFirstName = trimmedEmployeeName.substring(0, nameSpace)

        // validate first name length
        if (employeeFirstName.length < 3) {
            setErrorMessage("Error: The employee name must be at least three characters or more.")
            return
        }

        // validate department selection (cannot be none)
        if (departmentName === "") {
            setErrorMessage("Error: Please select employees department.")
            return
        }

        // spread operator (...) copies current employees object state as original cannot be changed
        setEmployees((employees) => ({
            ...employees,
            [departmentName]: [
                // appends employee name to departments employee array
                ...(employees[departmentName]), employeeName
            ]
        }))

        // clear states
        setEmployeeName("");
        setDepartmentName("")
        setErrorMessage("")

    }
    return (
        <>
        <div className="form-body">
        <form className="new-employee-form" onSubmit={handleFormSubmit}>
            <input type="text"
                name="employee-field-term"
                placeholder="Input employee name here..."
                value={employeeName}
                onChange={e => setEmployeeName(e.target.value)}
            />
            <select
                name="departments-dropdown-list"
                placeholder="Select department"
                value={departmentName}
                onChange={e => setDepartmentName(e.target.value)}
            >
                <option value="">Please select a Department</option>
                <option value="Administration">Administration</option>
                <option value="Audit">Audit</option>
                <option value="Banking Operations">Banking Operations</option>
                <option value="Communications">Communications</option>
                <option value="Corporate Services">Corporate Services</option>
                <option value="Facilities">Facilities</option>
                <option value="Financial Services">Financial Services</option>
                <option value="Human Resources">Human Resources</option>
                <option value="Information Technology">Information Technology</option>
                <option value="IT Technician">IT Technician</option>
            </select>
            <input type="submit" value="Add Employee" />
        </form>

        {errorMessage && (
            <p className="error-message">{errorMessage}</p>
        )}
        </div>
        </>
    );
}

