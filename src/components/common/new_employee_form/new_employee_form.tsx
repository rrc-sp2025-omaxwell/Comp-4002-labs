import { useState, useEffect } from "react";
import type { DepartmentData } from "../../../types/department_data_type";
import "./new_employee_form.css"
import { useFormInput } from "../../../hooks/useFormInput"
import type { Dispatch, SetStateAction } from "react";

type NewEmployeeFormProps = {
  employees: DepartmentData;
  setEmployees: Dispatch<SetStateAction<DepartmentData>>;
};

export function NewEmployeeForm({
    employees, setEmployees
}: NewEmployeeFormProps) {
        
    const [employeeName, setEmployeeName] = useState("");
    const [departmentName, setDepartmentName] = useState("");
    const {departmentData, error, createNewEmployee} = useFormInput( { employees, setEmployees})

    async function handleFormSubmit(event: React.FormEvent<HTMLFormElement>) {

        event.preventDefault();

        const success = await createNewEmployee(employeeName,departmentName);

        // Clear States
        if (success) {
            setEmployeeName("")
            setDepartmentName("")
        }
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

                {Object.keys(departmentData ?? {}).map(
                    (department) => (
                        <option
                            key={department}
                            value={department}
                        >
                            {department}
                        </option>
                    )
                )}

            </select>
            <input type="submit" value="Add Employee" />
        </form>

        {error && (
            <p className="error-message">{error}</p>
        )}
        </div>
        </>
    );
}

