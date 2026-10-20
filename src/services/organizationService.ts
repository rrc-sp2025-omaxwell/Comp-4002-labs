import * as OrganizationRepo from "../app/repositories/organizationRepo"
import type { ManagementRole } from "../types/management_role_type"

// Handy little thing to ensure one of 
// two shapes as a result for new accounts
type AddManagerResult =
    | { isValid: true; data: ManagementRole }
    | { isValid: false; errors: string[] };


export async function fetchManagementRoles() {
    const managementRoles = await OrganizationRepo.getAllManagers();
    return managementRoles
}

export async function createNewManager(
    managerName: string,
    managementRole: string
): Promise<AddManagerResult> {
    let isValid = true;
    const errors: string[] = [];

    // Validate Manager Name
    if (managerName.trim().length < 3) {
        isValid = false,
        errors.push("Manager name must be at least 3 characters long.")
    }

    // Validate input management role name
    if(!managementRole) {
        isValid = false;
        errors.push("A management role must be selected.")
    } else {
        // Validate input management role exsts
        const managementRoles = await OrganizationRepo.getAllManagers();

        if (!Object.hasOwn(managementRoles, managementRole)) {
            isValid= false,
            errors.push(`Management Role: "${managementRole}" not found.`)
        } 
    }

    // Validation failed, stop here
    if ( isValid == false ) {
        return {
            isValid: false, errors
        };
    }

    // Validation Succesful, add new manager
    try {
        const updatedOrganizationData = OrganizationRepo.AddManager(
            managerName, managementRole
        );

        return {isValid, data: updatedOrganizationData}
    } catch (error) {
        return {
            isValid: false,
            errors: [
                error instanceof Error
                    ? error.message
                    : "Error occured when creating new manager."
            ]
        }
    }
}
