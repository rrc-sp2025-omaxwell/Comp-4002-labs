// Imports
import EmployeeList from "./components/common/employee_list/employee_list"
import Header from "./components/common/header/header";
import Footer from "./components/common/footer/footer";
import { NewEmployee } from "./components/common/new_employee/new_employee";
import { useState } from "react";
import employeeList from "./assets/employee_list.json"

function App() {

    // Initialize state for employees
    const [employees, setEmployees] = useState(employeeData);
    return (
        <>
            <Header />
            // EmployeeList takes the latest state of employee list.
            <EmployeeList 
                employees={employees}
            />
            // NewEmployeee takes latest state as well as the function to update that sate.
            <NewEmployee 
                employees={employees}
                setEmployees={setEmployees}
            />
            <Footer />
        </>
    );
};

// export component to main.tsx
export default App