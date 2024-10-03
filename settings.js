const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });
function convertToBool(text, fault = 'true') {
return text === fault ? true : false;
}

module.exports = {
SESSION_ID: process.env.SESSION_ID === undefined ? '' : process.env.SESSION_ID, 'Byte;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ0M0SS9rYTVSOWx4Rk1VNTdDYmI5YmNHYTFZSWdnZFY4V0pUcEFPSHRFWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaWZYMDRGQU84TWJ1blB0MUlnMnYyNW4wOGRXT29zSVRpNDRNblptdlRYZz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJHUDg3Ukgyd0EzZ09CV2QvRUYralU0eXc2cmtWL1pvUE9GYlhIUmdFUjBRPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJuSk9xcG9IaEREMjAvWUt0YzNtS0E3ZFkreVZTeXFsMVJ6YXFGUXZIYVVNPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjBFQkp6OHdHay9jVjdiaWtvUGhCdXlhRkhCdzNTaHI1NEpFM2lEaTVJR1k9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImFSUlpOM1R3WnJuYk5mQmUrK2pEWEpHdm5JNkVmSjdpUTBJdlpaQm9zRDA9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibURQNmNvMmdjYmFUMDd6R3NYdEwrM0l6c0FpNXpaUndQdnJUc2k1YWFWbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYTFqa0NOMU5sSFU0VzY2aGlYQVJVdWkwWkVnRks1Y05KS0Y1QlhFcVlDOD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InRrV2FkWFFnWDRzSFNhUmZPT084T28xTERoODRTRGFvL0Uzb3RsUWNEMG40NlVnODZLVmltclRWWmhrN1ZzbFE4bUFSVGdNM25NeXNOa3Q4cDhzbkFBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NiwiYWR2U2VjcmV0S2V5IjoieU8vOEUzamxSZUtoZUxPd0tqeFg3MjdNS2Q4YlE1dEpJa2pLNXZQaXVqaz0iLCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXMiOlt7ImtleSI6eyJyZW1vdGVKaWQiOiIyNjM3MTY3ODk1MTVAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiRDM5MEFDQkU0NzI5RDI2NEM2ODgyNjQyNUFCRDc3QUYifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcyNzc5NjE1NH0seyJrZXkiOnsicmVtb3RlSmlkIjoiMjYzNzE2Nzg5NTE1QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjJCRTFFMzc2RDg0NDY3RUEyRUVBMjBGMDRBRDMwRDc2In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3Mjc3OTYxNTd9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IkFEaGprUFl4UlhLNUhTZlh1MmxraVEiLCJwaG9uZUlkIjoiY2ZkOWYxNmQtMWE5ZC00M2NmLTgzM2EtOGMyOGEyYTQ5ZTgwIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlhweGt2QjhoaUY3S1ZFRzMxVmErZ1RSbWZJTT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI4aW44WXh0bkI1OUVzZmhndGVNc1BQOERZTjQ9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiQjZDOUhDUDIiLCJtZSI6eyJpZCI6IjI2MzcxNjc4OTUxNToxOUBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJYeHggV3JsZPCfkqXwn4yNIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNML2Q4Y01HRUthbjhMY0dHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJMYUFlQnkvU2VXcDZTQnF2SWJ4Ui9WUHJ3V0ZobW5EcFFtMGs3bzRUUEc4PSIsImFjY291bnRTaWduYXR1cmUiOiJycWxkYk12N3VmSndNSk93WU5UUHAzV3pzSERPWi81aWdLUFQ2emVaZ2ZlcjFZMDA3WERxL2NyMWpTWitTN3hBQUx2TFBjR1BBaWZhWnVrcC93R2JCZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiK0tVaVFpT1BIM1RqM0l0RjY2aW4vemFMQXNGbGxBTk1vajNKTE5xREVKcU9JRG9QdGs0VElFTHRlT0l0VnBoby94aUxNSGF2ZWlDdkMxNE1IeE80QlE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyNjM3MTY3ODk1MTU6MTlAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCUzJnSGdjdjBubHFla2dhcnlHOFVmMVQ2OEZoWVpwdzZVSnRKTzZPRXp4diJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyNzc5NjE0OCwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFKb2EifQ=='
OWNER_NUMBER: process.env.OWNER_NUMBER === undefined ? '' : process.env.OWNER_NUMBER,   
ONLY_GROUP: process.env.ONLY_GROUP === undefined ? 'false' : process.env.ONLY_GROUP,
ONLY_ME: process.env.ONLY_ME === undefined ? 'false' : process.env.ONLY_ME,
AUTO_STATUS_READ:  process.env.AUTO_STATUS_READ  || false  ,
PREFIX: process.env.PREFIX || '.' ,
POSTGRESQL_URL: process.env.POSTGRESQL_URL === undefined ? 'postgres://db_7xp9_user:6hwmTN7rGPNsjlBEHyX49CXwrG7cDeYi@dpg-cj7ldu5jeehc73b2p7g0-a.oregon-postgres.render.com/db_7xp9" : "postgres://db_7xp9_user:6hwmTN7rGPNsjlBEHyX49CXwrG7cDeYi@dpg-cj7ldu5jeehc73b2p7g0-a.oregon-postgres.render.com/db_7xp9' : process.env.POSTGRESQL_URL,
MAX_SIZE: 500, 
ALIVE:  process.env.ALIVE  || ''  ,
FOOTER: process.env.FOOTER=== undefined ? '> Created by Hamza': process.env.FOOTER,
OWNER_REACT:  process.env.OWNER_REACT  || true  ,
ADMIN_EVENT:  process.env.ADMIN_EVENT  || true  ,   
AUTO_BLOCK:  process.env.AUTO_BLOCK  || false  ,
AUTO_VOICE:  process.env.AUTO_VOICE  || false  ,
AUTO_STICKER: process.env.AUTO_STICKER || false  ,
ANTI_BAD: process.env.ANTI_BAD || false  ,
AUTO_REACT:  process.env.AUTO_REACT  || false  ,
AUTO_TYPING:  process.env.AUTO_TYPING  || false  ,
AUTO_RECORDING:  process.env.AUTO_RECORDING  || false  ,
AUTO_READ:  process.env.AUTO_READ  || false  ,
READ_CMD_ONLY:  process.env.READ_CMD_ONLY  || false  ,
AUTO_BIO:  process.env.AUTO_BIO  || false  ,   
ALWAYS_ONLINE:  process.env.ALWAYS_ONLINE  || false  ,
WORK_TYPE: process.env.WORK_TYPE || 'private' ,
ANTI_LINK: process.env.ANTI_LINK || false  ,
ANTI_BOT: process.env.ANTI_BOT || false  ,
ANTI_CALL: process.env.ANTI_CALL || false  ,
AI_CHATBOT: process.env.AI_CHATBOT || false  ,
AI_IMAGE: process.env.AI_IMAGE || false  ,
MATHS_AI: process.env.MATHS_AI || false  ,
WELCOME: process.env.WELCOME || false  ,  
HEROKU_API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,
HEROKU_APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME, 
LOGO: process.env.LOGO || `https://raw.githubusercontent.com/HyHamza/HyHamza/main/Images/XByte-logo.png` ,
COMMAND_TYPE: process.env.COMMAND_TYPE || 'button' ,
ANTI_DELETE : process.env.ANTI_DELETE || true ,
// BLOCK_COUNTRY_PREFIX : process.env.BLOCK_COUNTRY_PREFIX || "1",
BOT_EXPIRY_DATE : process.env.BOT_EXPIRY_DATE || '2029-09-05',
BOT_EXPIRY_TIME : process.env.BOT_EXPIRY_TIME || '16:24:00',
DELETEMSGSENDTO : process.env.DELETEMSGSENDTO === undefined ? '' : process.env.DELETEMSGSENDTO,
  
};
