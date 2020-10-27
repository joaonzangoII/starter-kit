import { env } from './.env';

export const environment = {
  production: false,
  hmr: true,
  version: env.npm_package_version + '-dev',
  serverUrl: 'http://localhost:8080/api',
  defaultLanguage: 'en-US',
  supportedLanguages: ['en-US', 'fr-FR'],
};
