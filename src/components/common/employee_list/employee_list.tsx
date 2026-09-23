import "./employee_list.css"
import type { DepartmentData } from "../../../types/department_data_type";

// EmployeeList takes employees prop from app
type EmployeeListProp = {
    employees: DepartmentData
}



function EmployeeList({ employees }: EmployeeListProp) {
    return (
        <div className="employeeList">
            {Object.entries(employees).map(([department, employeeNames]) => (
                <ul key={department}>
                    <li key={department} className="department">{department}</li>
                        {employeeNames.map((employee) => (
                            <li key={employee}>{employee}</li>
                        ))}
                </ul>
            ))}
        </div>
    );
}

export default EmployeeList;