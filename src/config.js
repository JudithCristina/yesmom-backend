import { config } from 'dotenv';
config({path:".env"});

module.exports = {
    MONGODB_URI: process.env.MONGODB_URI || '',
    APP_KEY: process.env.APP_KEY || '',
    SECURITY_KEY:process.env.SECURITY_KEY || ''
}