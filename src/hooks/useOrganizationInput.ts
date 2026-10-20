import { useEffect, useState } from "react";
import * as OrganizationService from "../services/organizationService"
import type { ManagementRole } from "../types/management_role_type"
import type { Dispatch, SetStateAction } from "react";

type ManagerFormInputProps = {
  managers: ManagementRole;
  setManagers: Dispatch<SetStateAction<ManagementRole>>;
};

export function useOrganizationInput({
    managers, setManagers
}: ManagerFormInputProps) {
// Hook controls values of the input.
    const [ organizationData, updateOrganizationData ] = useState<ManagementRole>(managers);

// Hook controls values of any response messages.
    const [ error, setError ] = useState<string | null>();

    useEffect(() => {
        updateOrganizationData(managers);
    }, [managers]);
    
// method that takes a callback to validate input, 
// returns results of validation and updates its messages.

    const createNewManager = async(
        firstName: string, lastName: string, title: string, managementRole:string, pronouns?: string
    ): Promise<boolean> => {
        try {
        const result = await OrganizationService.createNewManager(
            firstName, lastName, title, managementRole, pronouns
        );

            if (!result.isValid) {
                setError(result.errors.join(" "))
                return false
            }
            setManagers(result.data);
            updateOrganizationData(result.data);
            setError(null);
            return true;

        } catch(errorObject) {
            setError(`${errorObject}`);
            return false;
        }
    }


    useEffect(() => {
        updateOrganizationData(managers);
    }, [managers]);

    return {
        organizationData,
        error,
        createNewManager
    }
}