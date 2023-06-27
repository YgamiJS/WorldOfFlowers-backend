type DeployConfig = {
  nodeEnv: string;
  frontendUrl: string;
};

function getDeployConfig(): DeployConfig {
  const config: DeployConfig = {
    nodeEnv: process.env.NODE_ENV ?? "",
    frontendUrl: process.env.FRONTEND_URL ?? "",
  };

  if (!(config.nodeEnv === "production" || config.nodeEnv === "development"))
    throw new Error("Invalid NODE_ENV varible");
  if (!config.frontendUrl) throw new Error("Invalid FRONTEND_ENV favorible");

  return config;
}

type ExpressConfig = {
  port: number;
};

function getExpressConfig(): ExpressConfig {
  const config: ExpressConfig = {
    port: Number(process.env.EXPRESS_PORT) ?? "",
  };

  if (!config.port) throw new Error("Empty express port");

  return config;
}

type DataBaseConfig = {
  url: string;
};

function getDataBaseConfig(): DataBaseConfig {
  const config: DataBaseConfig = {
    url: process.env.DATABASE_URL ?? "",
  };

  if (!config.url) throw new Error("Empty DB url");

  return config;
}

export type AppConfig = {
  deploy: DeployConfig;
  express: ExpressConfig;
  database: DataBaseConfig;
};

export function getAppConfig(): AppConfig {
  return {
    deploy: getDeployConfig(),
    express: getExpressConfig(),
    database: getDataBaseConfig(),
  };
}
