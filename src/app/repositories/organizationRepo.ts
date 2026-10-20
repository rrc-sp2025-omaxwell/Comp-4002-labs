import organization_list from "../../assets/management_list.json"
import type { ManagementRole, Manager } from "../../types/management_role_type";

let organizationData: ManagementRole = organization_list

// Get all management rolls
export function getAllManagers(): ManagementRole {
    return organization_list
}

// Get management roll by roll name
export function getManagementRoleByName(managementRole: string): Manager[] {
    const managementRollMembers = organizationData[managementRole]

    if(!managementRollMembers) {
        throw new Error(`Failed to fetch members of management roll: ${managementRole}`)
    }

    return managementRollMembers
}

// Add member
export function AddManager(
    managerName: string,
    managementRole: string
): ManagementRole {
    const managers = organizationData[managementRole];

    if (!managers) {
        throw new Error(
            `Department not found: ${managementRole}`
        );
    }

    const newManager: Manager = {
        name: managerName,
        title: managementRole,
    }

    organizationData = {
        ...organizationData,
        [managementRole]: [...managers, newManager]
    };

    return organizationData;
}