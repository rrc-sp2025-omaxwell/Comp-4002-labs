const employeeList = (listNode, employeeData) => {
    Object.entries(employeeData).forEach(([department, employees]) => {
        const departmentLiNode = document.createElement("ul");
        departmentLiNode.innerHTML = `<a class="department-name">Department: ${department}</a>`;
        listNode.appendChild(departmentLiNode);
        for (var employee of employees) {
            const employeeLiNode = document.createElement("ul");
            employeeLiNode.innerHTML = `<a>${employee}</a>`;
            listNode.appendChild(employeeLiNode);
        }
    });
}

function generateFooter() {
    const currentYear = new Date().getFullYear();
    const footerNode = document.querySelector(`footer`);
    
    const footerSentence = document.createElement('p');
    footerSentence.innerHTML = `Copyright Pixell River Financial ${currentYear}`

    footerNode.appendChild(footerSentence);
}

async function collectEmployeeData() {

    const employeeListNode = document.querySelector(".employee-list");

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
    generateFooter();
})

