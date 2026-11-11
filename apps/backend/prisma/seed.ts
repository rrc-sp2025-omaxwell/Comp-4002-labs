import { PrismaClient } from "@prisma/client";
import { employeeSeedData } from "./seedData";

const prisma = new PrismaClient();

// this method will add default values to the database
// IT WILL CLEAR THE DB WHEN INVOKED
// see https://www.prisma.io/docs/orm/prisma-migrate/workflows/seeding
async function main() {
    // clear table
    await prisma.employee.deleteMany();
    await prisma.department.deleteMany();

    // Insert departments and employees to db
    for (const [departmentName, employees] of Object.entries(employeeSeedData)) {
    // Iterate over each department in the seed data    
    const department = await prisma.department.create({
        data: {
        name: departmentName
        }
    });

    for (const employeeName of employees) {
        await prisma.employee.create({
        data: {
            name: employeeName,
            departmentId: department.id
        }
        });
    }
}

    console.log(`CREATED EMPLOYEES: ${employeeSeedData}`);
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