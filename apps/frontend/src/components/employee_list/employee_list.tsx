
type Department = {
    [departmentName: string]: string[]
};

async function collectEmployeeData() {

    const employeeListNode = document.querySelector(".employee-list");

    try {
        const response = await fetch("../../assets/employee_list.json");
        if (!response.ok) {
            throw new Error(`Error collecting employee data
                 Error Status: ${response.status}`);
        }
        const employeeData = await response.json();
        employeeList(employeeData)
    } catch (error) {
    console.error("Error collecting employee data:", error)
    }
}

const employeeList = ({employeeData}: {employeeData: Department}) => {
    Object.entries(employeeData).forEach(([department, employees]) => {
        ListDepartment(department)
        for (var employee of employees) {
            ListEmployee(employee)
        }
    });
}

function ListDepartment(departmentName: string) {
    return (
        <ul>
            <a class='department-name'>{departmentName}</a>
        </ul>
    )
}

function ListEmployee(employeeName: string) {
    return (
        <ul>
            <a class='employee'>{employeeName}</a>
        </ul>
    )
}


function EmployeeListSection() {
    return (
        <>
            <main>
                <collectEmployeeData />
            </main>
        </>
    )
}

export default EmployeeListSection