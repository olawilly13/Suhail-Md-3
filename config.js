const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false"  
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md-3";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website =process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "Made With LOVE! - @WILDAN" 


global.devs = "" // Developer Contacts
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "2347081414294";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2347081414294";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" //"https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";

global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_14_21_09_28_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc2LFxuICAgICAgICAyMTQsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTgwLFxuICAgICAgICAxNzQsXG4gICAgICAgIDEzNSxcbiAgICAgICAgODQsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTk4LFxuICAgICAgICAxMTAsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTM1LFxuICAgICAgICA3LFxuICAgICAgICAxNyxcbiAgICAgICAgNDcsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTYyLFxuICAgICAgICA3LFxuICAgICAgICA1NixcbiAgICAgICAgMjM2LFxuICAgICAgICAxMDUsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjM3LFxuICAgICAgICA0MyxcbiAgICAgICAgMjA1LFxuICAgICAgICA4OSxcbiAgICAgICAgODAsXG4gICAgICAgIDU4LFxuICAgICAgICAxNjMsXG4gICAgICAgIDU1LFxuICAgICAgICAxNixcbiAgICAgICAgMTIyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDkxLFxuICAgICAgICAxODQsXG4gICAgICAgIDcsXG4gICAgICAgIDMwLFxuICAgICAgICAxNzgsXG4gICAgICAgIDIyNixcbiAgICAgICAgNDEsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjQsXG4gICAgICAgIDI0MixcbiAgICAgICAgNDksXG4gICAgICAgIDU2LFxuICAgICAgICAxNjcsXG4gICAgICAgIDExNixcbiAgICAgICAgMjI4LFxuICAgICAgICAxOTIsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjQsXG4gICAgICAgIDMyLFxuICAgICAgICAyNDUsXG4gICAgICAgIDExNixcbiAgICAgICAgMTYyLFxuICAgICAgICAxNjAsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMzcsXG4gICAgICAgIDIzOCxcbiAgICAgICAgNjIsXG4gICAgICAgIDE2NSxcbiAgICAgICAgNDIsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjMxLFxuICAgICAgICA5OVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg0LFxuICAgICAgICAyMjEsXG4gICAgICAgIDk4LFxuICAgICAgICA4NyxcbiAgICAgICAgMTE4LFxuICAgICAgICAxMzIsXG4gICAgICAgIDcxLFxuICAgICAgICAyMTAsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTAsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTIsXG4gICAgICAgIDM1LFxuICAgICAgICAxODIsXG4gICAgICAgIDM2LFxuICAgICAgICA2NyxcbiAgICAgICAgMTg0LFxuICAgICAgICAyMzQsXG4gICAgICAgIDYxLFxuICAgICAgICA3NyxcbiAgICAgICAgMTg2LFxuICAgICAgICAxMjYsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTE2LFxuICAgICAgICAyOSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyMjksXG4gICAgICAgIDMzLFxuICAgICAgICAxNjYsXG4gICAgICAgIDEyMyxcbiAgICAgICAgOCxcbiAgICAgICAgMTEyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQ3LFxuICAgICAgICAxODMsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTk0LFxuICAgICAgICAyNDIsXG4gICAgICAgIDExMCxcbiAgICAgICAgNTksXG4gICAgICAgIDE0MCxcbiAgICAgICAgOTQsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTMwLFxuICAgICAgICAyOSxcbiAgICAgICAgMTcyLFxuICAgICAgICAxMTUsXG4gICAgICAgIDUzLFxuICAgICAgICA5MixcbiAgICAgICAgNTgsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjM5LFxuICAgICAgICAyOSxcbiAgICAgICAgNjMsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxODcsXG4gICAgICAgIDcsXG4gICAgICAgIDY0LFxuICAgICAgICAxMSxcbiAgICAgICAgMjE5LFxuICAgICAgICAyMDMsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjI2LFxuICAgICAgICA2OFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgOTQsXG4gICAgICAgIDIxOSxcbiAgICAgICAgNjIsXG4gICAgICAgIDQsXG4gICAgICAgIDEzMixcbiAgICAgICAgMCxcbiAgICAgICAgMjQyLFxuICAgICAgICAyMjYsXG4gICAgICAgIDQ5LFxuICAgICAgICAxMjEsXG4gICAgICAgIDI3LFxuICAgICAgICAxNDQsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTAyLFxuICAgICAgICAyMzYsXG4gICAgICAgIDEyMyxcbiAgICAgICAgNixcbiAgICAgICAgOTgsXG4gICAgICAgIDQyLFxuICAgICAgICAyMjAsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjI3LFxuICAgICAgICAxODksXG4gICAgICAgIDExNSxcbiAgICAgICAgMjAsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxMzMsXG4gICAgICAgIDQ5LFxuICAgICAgICAyMTcsXG4gICAgICAgIDEwM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzAsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjIsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjExLFxuICAgICAgICAxMjUsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTA3LFxuICAgICAgICA2MyxcbiAgICAgICAgMjI2LFxuICAgICAgICA0MixcbiAgICAgICAgMTA4LFxuICAgICAgICA0MyxcbiAgICAgICAgMTMxLFxuICAgICAgICA2NixcbiAgICAgICAgMjAwLFxuICAgICAgICAyMTEsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTk3LFxuICAgICAgICAxMDUsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTQ1LFxuICAgICAgICA4MyxcbiAgICAgICAgMTU5LFxuICAgICAgICAxOTYsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjA4LFxuICAgICAgICAyMTcsXG4gICAgICAgIDY0LFxuICAgICAgICAxNDksXG4gICAgICAgIDQwLFxuICAgICAgICA4OVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDY0XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE0MyxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgNTksXG4gICAgICAgICAgODksXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgNDhcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNyxcbiAgICAgICAgNzgsXG4gICAgICAgIDQsXG4gICAgICAgIDIyNSxcbiAgICAgICAgNjgsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTY1LFxuICAgICAgICA1OCxcbiAgICAgICAgNzcsXG4gICAgICAgIDgwLFxuICAgICAgICAxODYsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjIzLFxuICAgICAgICAyMSxcbiAgICAgICAgMzAsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTkxLFxuICAgICAgICA5NSxcbiAgICAgICAgODAsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTg5LFxuICAgICAgICAxNzQsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTU2LFxuICAgICAgICAyMDksXG4gICAgICAgIDIzMCxcbiAgICAgICAgNjUsXG4gICAgICAgIDE2LFxuICAgICAgICA1MyxcbiAgICAgICAgOTQsXG4gICAgICAgIDQ0LFxuICAgICAgICAyMTAsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxNjQsXG4gICAgICAgIDE2NCxcbiAgICAgICAgNjMsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTY0LFxuICAgICAgICAxMTMsXG4gICAgICAgIDgxLFxuICAgICAgICAxNjIsXG4gICAgICAgIDM1LFxuICAgICAgICAxMjcsXG4gICAgICAgIDIzNyxcbiAgICAgICAgNjMsXG4gICAgICAgIDM4LFxuICAgICAgICA1MSxcbiAgICAgICAgNDksXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjIyLFxuICAgICAgICA5MSxcbiAgICAgICAgMTYyLFxuICAgICAgICA3MSxcbiAgICAgICAgNSxcbiAgICAgICAgMTM3LFxuICAgICAgICAxODAsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjU0LFxuICAgICAgICA4NyxcbiAgICAgICAgODMsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjAsXG4gICAgICAgIDE0XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA0OSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJFN2tMazdwRkdVUWYveGVmYzcyM2NqNUVPdnpFMkRyaDVubFg4K2ZiYVpjPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCI4U2oxVkZrOFJwR0dIVXdxa3VHeVBRXCIsXG4gIFwicGhvbmVJZFwiOiBcImUyZjVlODE2LTJiNWUtNDE5NS05ODhmLWZjMTFiOTgwYmY1NlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMDYsXG4gICAgICAxNDIsXG4gICAgICAyMzAsXG4gICAgICAxMTAsXG4gICAgICA1OSxcbiAgICAgIDYwLFxuICAgICAgNTAsXG4gICAgICAxMzMsXG4gICAgICAyMzIsXG4gICAgICAxMjksXG4gICAgICA1NixcbiAgICAgIDIyMSxcbiAgICAgIDI1NCxcbiAgICAgIDc3LFxuICAgICAgMTE5LFxuICAgICAgMjMyLFxuICAgICAgMTMzLFxuICAgICAgMjQ4LFxuICAgICAgMzQsXG4gICAgICAxODZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiBmYWxzZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE1MSxcbiAgICAgIDE5MyxcbiAgICAgIDE3MCxcbiAgICAgIDIwLFxuICAgICAgMTI2LFxuICAgICAgMjI3LFxuICAgICAgMzAsXG4gICAgICAyMyxcbiAgICAgIDE5NSxcbiAgICAgIDI2LFxuICAgICAgNzcsXG4gICAgICAyMTEsXG4gICAgICAxODMsXG4gICAgICA5MyxcbiAgICAgIDM1LFxuICAgICAgNTksXG4gICAgICAxNDQsXG4gICAgICAxMzUsXG4gICAgICAxMjYsXG4gICAgICAxNzdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNQVDd5YjBHRU1xSTVjWUdHQVVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImhPbmdZclErSitBdFlkS3Y0RlA1SFVoRTRXam5vdzl1RFUzRDJsMURBVDA9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwianFBK1hVY3ZRclNndnNUdy9OZk45Tk5BZmpuSUVNTkxTMCtmSDlmTUJ6UUsyYlVaYVVtZHN1MWJreWJYZWtJMU9vdjNCaGhuNXAzeHFBYjZBN3VGQ3c9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiYXRhd0s0S09pK2ZXcFduT29Ld0xDMEQ5WVpkd1JwZGx3b0p1bmpDVldEait0bVNLekM2VW4zeWpHcDYvMDV2UXBlZEMxNWV6eVlINm05Q1FjMEFvRGc9PVwiXG4gIH0sXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ3MDgxNDE0Mjk0OjU3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxOTA4NDMwMTMwOTk2NDM6NTdAbGlkXCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ3MDgxNDE0Mjk0OjU3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMjksXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgNjFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTc1OTA2OTI2MixcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUx2U1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTHZRLmpzb24iOiAie1wia2V5RGF0YVwiOlwiZzNKSWZwcC8yNFhHUWU5U2ZWYkxjQStNL0doTUYrZ0VYOFlHYUdoUGZTMD1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNzM5NzUwOTAwLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFMdlIuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJ1b0VJd2JnRXJKRzFsN0Q5NkVsUXVCRndEMDNFYVpWTlFqbnVmcUV0dnFVPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE3Mzk3NTA5MDAsXCJjdXJyZW50SW5kZXhcIjoyLFwiZGV2aWNlSW5kZXhlc1wiOlswLDJdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUx2Uy5qc29uIjogIntcImtleURhdGFcIjpcImIwR1JvVk9ERzBtTDNjRUdQMGx6Y21rbzdzNWxXc3ZWeEhWS3FzODBnajA9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTczOTc1MDkwMCxcImN1cnJlbnRJbmRleFwiOjQsXCJkZXZpY2VJbmRleGVzXCI6WzAsMiwzXX0sXCJ0aW1lc3RhbXBcIjpcIjE3NTkwNjc2MTkzNDVcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "3.0.1-developement",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ WILDAN ® 』```","),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "WILDAN-MD",
  ownername:process.env.OWNER_NAME|| "WilDan:Shy<3",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",

