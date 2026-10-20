// Imports
import EmployeeList from "./components/common/employee_list/employee_list"
import Header from "./components/common/header/header";
import Footer from "./components/common/footer/footer";
import { NewEmployeeForm } from "./components/common/new_employee_form/new_employee_form";
import { useState } from "react";
import employeeList from "./assets/employee_list.json"
import type { DepartmentData } from "./types/department_data_type";
import type { ManagementRole } from "./types/management_role_type";
import OrganizationTable from "./components/common/organization_page/organization_page"
import management_list from "./assets/management_list.json"
import { Nav } from "./components/common/nav/nav"

import { Routes, Route } from "react-router-dom";

function App() {

    // Initialize state for employees
    const [employees, setEmployees] = useState<DepartmentData>(employeeList);
    
    // Initialize state for management roles
    const [managers, setManagers] = useState<ManagementRole>(management_list);
    
    return (
        <Routes>
            <Route path="/" element={
                <>
                <Header />
                <Nav />
                <Footer />    
                </>
            } />

            <Route path="/employees" element={
                <>
                <Header />
                <Nav />

                {/*NewEmployeeform takes latest state as well as the function to update that state. */}
                <NewEmployeeForm
                    employees={employees}
                    setEmployees={setEmployees} />

                {/* EmployeeList takes the latest state of employee list. */}
                <EmployeeList 
                    employees={employees} />
                
                <Footer />    
                </>
            } />
            

            <Route path="/organization" element={
                <>
                <Header />
                <Nav />
                <OrganizationTable 
                    managers={managers}
                    setManagers={setManagers} />   
                <Footer />            
                </> 
            } />

            
        </Routes>
    );
};

// export component to main.tsx
export default App