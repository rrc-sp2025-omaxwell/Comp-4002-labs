// Imports
import EmployeeList from "./components/common/employee_list/employee_list"
import Header from "./components/common/header/header";
import Footer from "./components/common/footer/footer";



function App() {
    return (
        <>
            <Header />
            <EmployeeList />
            <Footer />
        </>
    );
};

// export component to main.tsx
export default App