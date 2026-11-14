import { PrismaClient } from "@prisma/client";
import { organizationSeedData, employeeSeedData } from "./seedData";

const prisma = new PrismaClient();

// this method will add default values to the database
// IT WILL CLEAR THE DB WHEN INVOKED
// see https://www.prisma.io/docs/orm/prisma-migrate/workflows/seeding
async function main() {
    // clear table
    await prisma.employee.deleteMany();
    await prisma.management.deleteMany();

    const employees = Object.entries(employeeSeedData)
        .flatMap(([department, names]) =>
        names.map(name => ({
            name,
            department
        }))
    );

    const management = Object.entries(organizationSeedData).flatMap(
        ([role, manager]) => manager.map(
            ({ name, title, pronouns }) => ({
                name,
                role,
                title,
                ...(pronouns && { pronouns })
            }
        ))
    );

    await prisma.employee.createMany({
        data: employees
    });

    await prisma.management.createMany({
        data: management
    });

    console.log(`CREATED EMPLOYEES: ${employees}`);
    console.log(`CREATED MANAGEMENT: ${management}`);
};

main().then(
    async() => {
        await prisma.$disconnect()
    }
).catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
}); 