import { useState } from "react";
import type { DepartmentData } from "../../../types/department_data_type";

// Extend setEmployees as a prop down from app.tsx
type NewEmployeeProp = {
    setEmployees: React.Dispatch<React.SetStateAction<DepartmentData>>;
}

export function NewEmployeeForm({ setEmployees }: NewEmployeeProp) {
        
    const [employeeName, setEmployeeName] = useState("");
    const [departmentName, setDepartmentName] = useState("");


    function handleFormSubmit(event: React.FormEvent<HTMLFormElement>) {

        event.preventDefault();

        if (employeeName.trim() === "") {
            return;
        }

        // spread operator (...) copies current employees object state as original cannot be changed
        setEmployees((employees) => ({
            ...employees,
            [departmentName]: [
                // appends employee name to departments employee array
                ...(employees[departmentName]), employeeName
            ]
        }))

        setEmployeeName("");
        setDepartmentName("")

    }
    return(
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
                <option value=""></option>
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
    );
}

