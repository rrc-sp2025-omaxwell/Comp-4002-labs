import employeeList from "../../../../src/assets/employee_list.json"
import "./employee_list.css"

function EmployeeList() {
    return (
        <div className="employeeList">
            {Object.entries(employeeList).map(([department, employees]) => (
                <ul>
                    <li key={department}>{department}</li>
                        {employees.map((employee) => (
                            <li key={employee}>{employee}</li>
                        ))}
                </ul>
            ))}
        </div>
    );
}

export default EmployeeList;