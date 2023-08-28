import { PrismaClient } from "@prisma/client";

type Connect = (err: unknown | null) => void;

const prisma = new PrismaClient({ log: ["query", "info", "warn", "error"] });

const $connect = async (callback: Connect): Promise<void> => {
  try {
    console.log("connecting to database...");
    await prisma.$connect();
    console.log("connected to database");

    if (callback) callback(null);
  } catch (error) {
    console.log("failed to connect to database");
    console.error(error);

    if (callback) callback(null);
    else process.exit(1);
  }
};

const database = { $connect };

export default database;
