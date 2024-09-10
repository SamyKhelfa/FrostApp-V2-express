import { PrismaClient } from '@prisma/client';

export const prisma = new PrismaClient()
  
prisma.$connect().then(() => {
console.log('Prisma Client successfully connected to the database.');
}).catch((error) => {
console.error('Failed to connect to the database:', error);
});

process.on('exit', async () => {
await prisma.$disconnect();
console.log('Prisma Client disconnected from the database.');
});