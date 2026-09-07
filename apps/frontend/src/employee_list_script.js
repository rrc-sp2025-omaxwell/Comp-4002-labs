const employeeList = (listNode, employeeData) => {
    console.log(employeeData)
    Object.entries(employeeData).forEach(([department, employees]) => {
        const departmentLiNode = document.createElement("ul");
        departmentLiNode.innerHTML = `<a>department: ${department}</a>`;
        listNode.appendChild(departmentLiNode);
        for (var employee of employees) {
            const employeeLiNode = document.createElement("ul");
            employeeLiNode.innerHTML = `<a>${employee}</a>`;
            listNode.appendChild(employeeLiNode);
        }
    });
}

async function collectEmployeeData() {
    
    const employeeListNode = document.querySelector(".employee_list");

    try {
        const response = await fetch("./assets/employee_list.json");
        if (!response.ok) {
            throw new Error(`Error collecting employee data
                 Error Status: ${response.status}`);
        }
        const employeeData = await response.json();
        employeeList(employeeListNode, employeeData)
    } catch (error) {
    console.error("Error collecting employee data:", error)
    }
}

document.addEventListener("DOMContentLoaded", () => {
    collectEmployeeData();
})

