import { useState } from "react";
import type { Dispatch, SetStateAction } from "react";
import type { ManagementRole } from "../../../types/management_role_type";
import { useOrganizationInput } from "../../../hooks/useOrganizationInput";
import "./organization_page.css";

type OrganizationTableProps = {
    managers: ManagementRole;
    setManagers: Dispatch<SetStateAction<ManagementRole>>;
};

function OrganizationTable({
    managers,
    setManagers,
}: OrganizationTableProps) {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [title, setTitle] = useState("");
    const [managementRole, setManagementRole] = useState("");
    const [pronouns, setPronouns] = useState("");

    const {
        organizationData,
        error,
        createNewManager,
    } = useOrganizationInput({ managers, setManagers });

    async function handleFormSubmit(
        event: React.FormEvent<HTMLFormElement>
    ) {
        event.preventDefault();
        // Create new manager with inputs
        const success = await createNewManager(
            firstName.trim(),
            lastName.trim(),
            title.trim(),
            managementRole,
            pronouns.trim() || undefined
        );

        // Clear States
        if (success) {
            setFirstName("");
            setLastName("");
            setTitle("");
            setManagementRole("");
            setPronouns("");
        }
    }
    // flatmap flattens each role e.g. directors into an array
    const managementMembers = Object.entries(organizationData).flatMap(
        ([role, roleManagers]) =>
            roleManagers.map((manager) => {
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
            <div className="form-body">
                <form className="new-manager-form" onSubmit={handleFormSubmit}>
                    <input
                        type="text"
                        name="manager-first-name"
                        placeholder="Input first name here..."
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        required
                    />
                    <input
                        type="text"
                        name="manager-last-name"
                        placeholder="Input last name here..."
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        required
                    />
                    <input
                        type="text"
                        name="manager-title"
                        placeholder="Input title / position..."
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                    <input
                        type="text"
                        name="manager-pronouns"
                        placeholder="Pronouns (optional)"
                        value={pronouns}
                        onChange={(e) => setPronouns(e.target.value)}
                    />
                    <select name="management-role" value={managementRole}
                        onChange={(e) => setManagementRole(e.target.value)} required >
                        <option value="">
                            Please select a management role
                        </option>
                        {Object.keys(organizationData).map((role) => (
                            <option key={role} value={role}>
                                {role.replaceAll("_", " ")}
                            </option>
                        ))}
                    </select>

                    <input type="submit" value="Add Manager" />
                </form>

                {error && (
                    <p className="error-message">{error}</p>
                )}
            </div>
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
    );
}

export default OrganizationTable;