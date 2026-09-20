// Imports
import EmployeeList from "./components/common/employee_list/employee_list"
import Header from "./components/common/header/header";
import Footer from "./components/common/footer/footer";
import { NewEmployee } from "./components/common/new_employee/new_employee";



function App() {
    return (
        <>
            <Header />
            <EmployeeList />
            <NewEmployee />
            <Footer />
        </>
    );
};

// export component to main.tsx
export default App