
type Department = {
    [departmentName: string]: string[]
};

async function collectEmployeeData() {


    try {
        const response = await fetch("../../assets/employee_list.json");
        if (!response.ok) {
            throw new Error(`Error collecting employee data
                 Error Status: ${response.status}`);
        }
        const employeeData = await response.json();
        return(employeeData)
    } catch (error) {
    console.error("Error collecting employee data:", error)
    }
}

function EmployeeList() {
    const employeeData = collectEmployeeData()
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
            <a className='department-name'>{departmentName}</a>
        </ul>
    )
}

function ListEmployee(employeeName: string) {
    return (
        <ul>
            <a className='employee'>{employeeName}</a>
        </ul>
    )
}


function EmployeeListSection() {
    return (
        <>
            <main>
                <EmployeeList />
            </main>
        </>
    )
}

export default EmployeeListSection