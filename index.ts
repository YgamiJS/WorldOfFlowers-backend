import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import { getAppConfig } from "./src/settings/config";
import api from "./src/api/router";
import { getClients } from "./src/settings/clients";
import { log } from "./src/middlewares";

async function main() {
  const config = getAppConfig();

  const clients = await getClients();

  const app = express();

  console.dir(config);

  app.use(cors({ credentials: true, origin: config.deploy.frontendUrl }));

  app.use(express.json());

  app.use("*", log);

  app.use("/api", api(clients));

  app.use(cookieParser());

  app.listen(config.express.port, () =>
    console.log(`Server starting on port ${config.express.port}`)
  );
}

main();
