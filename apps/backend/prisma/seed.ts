import { PrismaClient } from "@prisma/client";
import { employeeSeedData } from "./seedData";

const prisma = new PrismaClient();

// this method will add default values to the database
// IT WILL CLEAR THE DB WHEN INVOKED
// see https://www.prisma.io/docs/orm/prisma-migrate/workflows/seeding
async function main() {
    // clear table
    await prisma.employee.deleteMany();

    const employees = Object.entries(employeeSeedData)
        .flatMap(([department, names]) =>
        names.map(name => ({
            name,
            department
        }))
        );

    await prisma.employee.createMany({
        data: employees
    });

    console.log(`CREATED EMPLOYEES: ${employees}`);
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