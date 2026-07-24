const fs = require('fs');
const path = require('path');
require('dotenv').config();

const envConfig = `export const env = {
  APP_NAME: '${process.env.APP_NAME}',
  APP_ENV: '${process.env.APP_ENV}',
  API_BASE_URL: '${process.env.API_BASE_URL}',
  TOKEN_KEY: '${process.env.TOKEN_KEY}',
  TOKEN_PREFIX: '${process.env.TOKEN_PREFIX}',
  ENABLE_LOG: ${process.env.ENABLE_LOG},
  API_TIMEOUT: ${process.env.API_TIMEOUT}
};
`;

const outputPath = path.join(__dirname, '../src/app/core/config/env.ts');

fs.mkdirSync(path.dirname(outputPath), { recursive: true });
fs.writeFileSync(outputPath, envConfig);

console.log('env.ts generated successfully.');