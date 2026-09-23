import { Dispatch, SetStateAction } from 'react';
import type { DepartmentData } from '../../../types/department_data_type';

export function updateEmployees(name: string, department: string, setEmployees: Dispatch<SetStateAction<DepartmentData>>) {
    // spread operator (...) copies current employees object state as original cannot be changed
    setEmployees((employees) => ({
        ...employees,
        [department]: [
            // appends employee name to departments employee array
            ...(employees[department]), name
        ]
    }))
}