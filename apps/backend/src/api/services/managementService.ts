// import Manager types defined in prisma/schema.prisma
import { Manager } from "@prisma/client";
import type { ManagementRole } from "../../../../../shared/types/management_role_type"

// Initialize prisma client if not alreade and use queries here
import prisma from "../../../prisma/client";

// MANAGER SERVICES

// Get All Managers Service
export const fetchAllManagers = async (): Promise<ManagementRole> => {
    const managers = await prisma.management.findMany();

    const managementRoles: ManagementRole = {};

    managers.forEach(manager => {
        if (!managementRoles[manager.role]) {
            managementRoles[manager.role] = [];
        }

        managementRoles[manager.role].push(manager);
    });

    return managementRoles;
};

// Create New Manager Service
export const createManager = async(
    managerData: {
        name: string,
        role: string,
        title: string,
        pronouns: string
    }): Promise<Manager> => {
        return prisma.employee.create({
            data: managerData
        });
}
