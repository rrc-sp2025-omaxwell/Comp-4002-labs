import { PrismaClient } from "@prisma/client";
import { employeeSeedData } from "./seedData";

const prisma = new PrismaClient();

// this method will add default values to the database
// IT WILL CLEAR THE DB WHEN INVOKED
// see https://www.prisma.io/docs/orm/prisma-migrate/workflows/seeding
async function main() {
    // clear table
    await prisma.term.deleteMany();

    // insert terms to db
    const createManyEmployees = await prisma.term.createManyAndReturn(
        {
            data: termSeedData,
            skipDuplicates: true
        }
    );

    console.log(`CREATED EMPLOYEES: ${createManyEmployees}`);
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