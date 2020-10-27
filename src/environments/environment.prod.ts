import { env } from './.env';

export const environment = {
  production: true,
  hmr: false,
  version: env.npm_package_version,
  serverUrl: 'http://localhost:8080/api',
  defaultLanguage: 'en-US',
  supportedLanguages: ['en-US', 'fr-FR'],
};
