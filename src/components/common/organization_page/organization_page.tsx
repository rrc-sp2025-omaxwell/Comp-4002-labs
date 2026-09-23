import type { ManagementRole } from "../../../types/management_role_type";
import "./organization_page.css"

function OrganizationTable({ managementList }: ManagementRole) {
    // Indivudual name parsing 
    // flatmap flattens each role e.g. directors into an array
    const managementMembers = Object.entries(managementList).flatMap(([role, managers]) =>
         managers.map((manager) => {
            const nameSpace = manager.name.indexOf(" ");
            const managerFirstName = manager.name.substring(0, nameSpace);
            const managerLastName = manager.name.substring(nameSpace + 1);

            return {
                tableId: `${role}-${managerFirstName}-${managerLastName}`,
                managerFirstName, managerLastName,
                title: manager.title,
                role: role.replaceAll("_", " "),
                pronouns: manager.pronouns || ""
            }
        })
    )
    // Table creation
    return (
        <>
            <div className="organization-table">
            <table>
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Pronouns</th>
                        <th>Role</th>
                        <th>Position</th>
                    </tr>
                </thead>
                <tbody>
                    {managementMembers.map((manager) => (
                        <tr key={manager.tableId}>
                            <td>{manager.managerFirstName}</td>
                            <td>{manager.managerLastName}</td>
                            <td>{manager.pronouns}</td>
                            <td>{manager.role}</td>
                            <td>{manager.title}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            </div>
        </>
    )
    
}

export default OrganizationTable;