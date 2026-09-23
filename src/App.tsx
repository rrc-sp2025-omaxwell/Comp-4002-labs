// Imports
import EmployeeList from "./components/common/employee_list/employee_list"
import Header from "./components/common/header/header";
import Footer from "./components/common/footer/footer";
import { NewEmployeeForm } from "./components/common/new_employee_form/new_employee_form";
import { useState } from "react";
import employeeList from "./assets/employee_list.json"
import type { DepartmentData } from "./types/department_data_type";
import OrganizationTable from "./components/common/organization_page/organization_page"
import management_list from "./assets/management_list.json"

import { Routes, Route } from "react-router-dom";

function App() {

    // Initialize state for employees
    const [employees, setEmployees] = useState<DepartmentData>(employeeList);
    return (
        <Routes>
            <Route path="/employees" element={
                <>
                <Header />
                {/* EmployeeList takes the latest state of employee list. */}
                <EmployeeList 
                    employees={employees} />
                
                {/*NewEmployeeform takes latest state as well as the function to update that state. */}
                <NewEmployeeForm
                    setEmployees={setEmployees} />
                <Footer />    
                </>
            } />
            

            <Route path="/organization" element={
                <>
                <Header />
                <OrganizationTable 
                    managementList={management_list} />   
                <Footer />            
                </> 
            } />

            
        </Routes>
    );
};

// export component to main.tsx
export default App