/** @type {import('next').NextConfig} */
const fs = require('fs');
const path = require('path');

const envFile = process.env.ENV_FILE || '.env.production';

const envPath = path.join(__dirname, envFile);

if (fs.existsSync(envPath)) {
  require('dotenv').config({ path: envPath });
}

const nextConfig = {}

module.exports = nextConfig
