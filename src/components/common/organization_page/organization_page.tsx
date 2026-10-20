import type { ManagementRole } from "../../../types/management_role_type";
import "./organization_page.css"
import { useOrganizationInput } from "../../../hooks/useOrganizationInput"
import type { Dispatch, SetStateAction } from "react";


type OrganizationTableProps = {
    managers: ManagementRole;
    setManagers: Dispatch<SetStateAction<ManagementRole>>;
};

function OrganizationTable({ managers, setManagers }: OrganizationTableProps) {
    const {
        organizationData,
        error,
        createNewManager,
    } = useOrganizationInput({ managers, setManagers });

    // flatmap flattens each role e.g. directors into an array
    const managementMembers = Object.entries(organizationData).flatMap(
        ([role, managers]) =>
            managers.map((manager) => {
                const nameParts = manager.name.trim().split(/\s+/);
                const managerFirstName = nameParts.shift() ?? "";
                const managerLastName = nameParts.join(" ");

                return {
                    tableId: `${role}-${manager.name}`,
                    managerFirstName,
                    managerLastName,
                    title: manager.title,
                    role: role.replaceAll("_", " "),
                    pronouns: manager.pronouns || "",
                };
            })
    );
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
            {error && (
                <p className="error-message">{error}</p>
            )}
            </div>
        </>
    )
    
}

export default OrganizationTable;