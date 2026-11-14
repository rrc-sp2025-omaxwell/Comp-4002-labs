import type { ManagementRole, Manager } from "../../../../shared/types/management_role_type";

type ManagementResponseJSON = {message: String, data: ManagementRole};

// Base url for backend
// Vite provides this value from the .env file rather than dotenv package
const BASE_URL = `${import.meta.env.VITE_API_BASE_URL}/api/v1`;
const ORGANIZATION_ENDPOINT = "/organization"

// Get Management
export async function fetchManagement(): Promise<ManagementRole> {
    const managementResponse: Response = await fetch(
        `${BASE_URL}${ORGANIZATION_ENDPOINT}`
    );

    if(!managementResponse.ok) {
        throw new Error("Failed to fetch management.")
    }

    const json: ManagementResponseJSON = await managementResponse.json();
    return json.data;
}


// Add Managar
export async function AddManager(
    firstName: string, lastName: string, title:string,
    managementRole: string, pronouns?:string
): Promise<ManagementRole> {
    const managementResponse: Response = await fetch(
        `${BASE_URL}${ORGANIZATION_ENDPOINT}`,
        {
            method: "POST",
            headers: {
            "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: `${firstName} ${lastName}`,
                title,
                role: managementRole,
                ...(pronouns && { pronouns })
            })
        }
    );

    if(!managementResponse.ok) {
        throw new Error(`Failed to create new manager with name: ${firstName} ${lastName} in role: ${managementRole}`);
    }

    
    return await fetchManagement();
}