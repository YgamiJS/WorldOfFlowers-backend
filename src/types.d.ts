import type { AppClients } from "@/settings/clients";
import type { AppConfig } from "@/settings/config";

export type ApiClients = {
  database: AppClients["database"];
};

export type ApiConfig = {
  deploy: ApiConfig["deploy"];
  express: ApiConfig["express"];
};
