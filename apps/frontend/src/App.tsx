// Imports
import EmployeeList from "./components/common/employee_list/employee_list"
import Header from "./components/common/header/header";
import Footer from "./components/common/footer/footer";
import { NewEmployeeForm } from "./components/common/new_employee_form/new_employee_form";
import { useState, useEffect } from "react";
import * as EmployeeRepo from "../src/apis/employeeRepo"
import type { DepartmentData } from "../../../shared/types/department_data_type";
import type { ManagementRole } from "../../../shared/types/management_role_type";
import OrganizationTable from "./components/common/organization_page/organization_page"
import * as organizationRepo from "../src/apis/organizationRepo"
import { Nav } from "./components/common/nav/nav"

import { Routes, Route } from "react-router-dom";

function App() {

    // Initialize state for employees
    const [employees, setEmployees] = useState<DepartmentData>({});
    
    // Initialize state for management roles
    const [managers, setManagers] = useState<ManagementRole>({});

    // Fetch employees from the backend when the component first mounts
    useEffect(() => {
        async function loadEmployees() {
            try {
                const data = await EmployeeRepo.fetchEmployees();
                setEmployees(data);
            } catch (error) {
                console.error("Error loading employees:", error);
            }
        }

        async function loadManagement() {
            try {
                const data = await organizationRepo.fetchManagement();
                setManagers(data);
            } catch (error) {
                console.error("Error loading management:", error);
            }
        }

        loadEmployees();
        loadManagement()
    }, []);
    
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