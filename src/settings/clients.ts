import { PrismaClient } from "@prisma/client";

type DataBaseClient = ReturnType<typeof getDataBaseClient>;

function getDataBaseClient() {
  const client = new PrismaClient();

  return client;
}

export type AppClients = {
  database: DataBaseClient;
};

export async function getClients(): Promise<AppClients> {
  const clients: AppClients = {
    database: getDataBaseClient(),
  };

  return clients;
}
