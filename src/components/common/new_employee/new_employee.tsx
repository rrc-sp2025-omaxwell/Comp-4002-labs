function validateName(employeeName) {
    // Trim out leading and trailing spacs
    const trimmedEmployeeName = employeeName.trim();
    
    // Split first and last names
    // Grab charcter index of the split
    const nameSplitIndex = trimmedEmployeeName.indexOf(" ")

    const firstName = trimmedEmployeeName.substring(0, nameSplitIndex);
    const lastName = trimmedEmployeeName.substring(nameSplitIndex);


    // Name error handling.
    if (!trimmedEmployeeName) {
        return "Employee name cannot be empty"
    }

    if (firstName.length < 3) {
        return "Employee name must be a minimum of 3 characters."
    }
    
    return {firstName: firstName, lastName: lastName}
}

export function NewEmployee({employeeName, handleSearchChange}
    :{
        searchValue: string, 
        handleSearchChange: (newValue: string) => void
    }) {
        
    return(
        <form className="new-employee-form">
            <input type="text"
                name="employee-field-term"
                placeholder="Input employee name here..."
                value={employeeName}
                onChange={e => handleSearchChange(e.target.value)}
            />
            <select
                name="departments-dropdown-list"
                placeholder="Select department"
            >
                <option value="Administration">Administration</option>
                <option value="Audit">Audit</option>
                <option value="Banking Operations">Banking Operations</option>
                <option value="Communications">Communications</option>
                <option value="Corporate Services">Corporate Services</option>
                <option value="Facilities">Facilities</option>
                <option value="Financial Services">Financial Services</option>
                <option value="Human Resources">Human Resources</option>
                <option value="Information Technology">Information Technology</option>
                <option value="IT Technician">IT Technician</option>
            </select>
            <input type="submit" value="Add Employee" />
        </form>
    );
}

