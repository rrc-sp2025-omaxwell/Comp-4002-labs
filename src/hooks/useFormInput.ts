import { useEffect, useState } from "react";
import * as EmployeeService from "../services/employeeService"
import { type DepartmentData } from "../types/department_data_type";
import type { Dispatch, SetStateAction } from "react";

type UseFormInputProps = {
  employees: DepartmentData;
  setEmployees: Dispatch<SetStateAction<DepartmentData>>;
};

export function useFormInput({
    employees, setEmployees
}: UseFormInputProps) {
// Hook controls values of the input.
    const [ departmentData, updateDepartmentData ] = useState<DepartmentData>(employees);

// Hook controls values of any response messages.
    const [ error, setError ] = useState<string | null>();

    useEffect(() => {
        updateDepartmentData(employees);
    }, [employees]);
    
// method that takes a callback to validate input, 
// returns results of validation and updates its messages.

    const createNewEmployee = async(
        employeeName: string, departmentName: string
    ) => {
        try {
            const result = await EmployeeService.createNewEmployee(
                employeeName, departmentName
            );

            if (!result.isValid) {
                setError(result.errors.join(" "))
                return false
            }
            setEmployees(result.data);
            updateDepartmentData(result.data);
            setError(null);
            return true;

        } catch(errorObject) {
            setError(`${errorObject}`);
            return false;
        }
    }


    useEffect(() => {
        updateDepartmentData(employees);
    }, [employees]);

    return {
        departmentData,
        error,
        createNewEmployee
    }
}