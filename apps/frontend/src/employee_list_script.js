const employeeData = {
  "Administration": [
    "Zoë Robins",
    "Madeleine Madden"
  ],
  "Audit": [
    "Josha Sadowski",
    "Kate Fleetwood"
  ],
  "Banking Operations": [
    "Priyanka Bose",
    "Hammed Animashaun",
    "Álvaro Morte",
    "Taylor Napier",
    "Alan Simmonds"
  ],
  "Communications": [
    "Gil Cardinal",
    "Richard J. Lewis"
  ],
  "Corporate Services": [
    "Randy Bradshaw",
    "Tracey Cook",
    "Lubomir Mykytiuk"
  ],
  "Facilities": [
    "Dakota House",
    "Lori Lea Okemah",
    "Renae Morrisseau",
    "Rick Belcourt"
  ],
  "Financial Services": [
    "Selina Hanusa",
    "Buffy Gaudry",
    "Shaneen Ann Fox",
    "Allan Little",
    "Danny Rabbit"
  ],
  "Human Resources": [
    "Jesse Ed Azure",
    "Stacy Da Silva",
    "Vladimír Valenta",
    "Samone Sayeses-Whitney",
    "Paul Coeur"
  ],
  "Information Technology": [
    "Graham Greene",
    "Sandika Evergreen",
    "Jennifer Rodriguez (Software Developer)"
  ],
  "IT Technician": [
    "Aiyana Littlebear",
    "Inara Thunderbird",
    "Kaya Runningbrook",
    "Elara Firehawk",
    "Siona Moonflower",
    "Kaiyu Greywolf",
    "Ayawamat Nightwind",
    "Tala Braveheart",
    "Iniko Stonebear",
    "Onatah Redhawk"
  ]
}

const employeeList = (listNode, employeeData) => {

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

document.addEventListener("DOMContentLoaded", () => {
    const employeeListNode = document.querySelector(".employee_list");
    employeeList(employeeListNode, employeeData)
})

