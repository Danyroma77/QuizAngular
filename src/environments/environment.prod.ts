import { env } from "process";

export const environment = {
  production: true,
  api_url: env.BACKEND_URL
};
