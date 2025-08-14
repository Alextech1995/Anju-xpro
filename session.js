//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//                                                                                                      //
//                                   𝗤𝗨𝗘𝗘𝗡-𝗔𝗡𝗝𝗨 𝗫ᴾᴿᴼ 𝐁𝐎𝐓                                               //
//                                                                                                      //
//                                         Ｖ：4.0                                                       //
//
//
//░██████╗░██╗░░░██╗███████╗███████╗███╗░░██╗  ░█████╗░███╗░░██╗░░░░░██╗██╗░░░██╗  ██╗░░██╗██████╗░██████╗░░█████╗░
//██╔═══██╗██║░░░██║██╔════╝██╔════╝████╗░██║  ██╔══██╗████╗░██║░░░░░██║██║░░░██║  ╚██╗██╔╝██╔══██╗██╔══██╗██╔══██╗
//██║██╗██║██║░░░██║█████╗░░█████╗░░██╔██╗██║  ███████║██╔██╗██║░░░░░██║██║░░░██║  ░╚███╔╝░██████╔╝██████╔╝██║░░██║
//╚██████╔╝██║░░░██║██╔══╝░░██╔══╝░░██║╚████║  ██╔══██║██║╚████║██╗░░██║██║░░░██║  ░██╔██╗░██╔═══╝░██╔══██╗██║░░██║
//░╚═██╔═╝░╚██████╔╝███████╗███████╗██║░╚███║  ██║░░██║██║░╚███║╚█████╔╝╚██████╔╝  ██╔╝╚██╗██║░░░░░██║░░██║╚█████╔╝
//░░░╚═╝░░░░╚═════╝░╚══════╝╚══════╝╚═╝░░╚══╝  ╚═╝░░╚═╝╚═╝░░╚══╝░╚════╝░░╚═════╝░  ╚═╝░░╚═╝╚═╝░░░░░╚═╝░░╚═╝░╚════╝░                                           
//
//
//
//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//*
//  * @project_name : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ
//  * @version      : 4.0
//  * @author       : Janith Rashmika
//  * @youtube      : https://www.youtube.com/@gamingrash2006
//  * @description  : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ, A Multi-functional WhatsApp bot created by Janith Rashmika.
//*
//*
//Base by Janith Rashmika
//GitHub: @Mrrashmika
//WhatsApp: +258869862722
//Want more free bot scripts? Subscribe to my YouTube channel: https://youtube.com/@gamingrash2006
//   * Created By GitHub: Mrrashmika
//   * Credit To Janith Rashmika
//   * © 2025 © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ-V4.
// ⛥┌┤
// */

const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidUVDMjJ2TFZhRWRjUW4yM29jRG80QmhRdmF3cHZ1YjArakdLdG1VeTFHTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS0ZQUUpYd041Tkh0TGlZZUFaTHNjVDVIQkkwNlR1Ry9KQ1E1cmtrYXhrQT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJvQVFPaEthcFJiU1dPZXk1Z2hYTmJCS0pRNnBtTktMM3p3VXFmRkwxK1dFPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJyNkx6dnNVQndUQWNrQnc5ZGEwSHFTVkt0TFQzTzk3NmJ1bThMcEh1QUVZPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjZNb0xOYmhxd01ReGkyODk1TFRYRXV3ZzEweDh2R2dEb3B0cHcxQ1d6RTg9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkMyYURyT3d4T0Y4SElBS3VBOStxNkhIMEdoYktMNGpLdGNtMExsTTArRDQ9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUUFxWE5lbUJGb29PQ1ppd1Ixd1dCTnd4cWYrOEg5cFlhV3VWeTJCTkVGWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidFJKM3FIdVExL2paQmFnSWV5R3p1R2EzMHYwYWRLeGRlRmNkTW0vSmN4TT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InhFZkZsbFFKamxWdnVaVndiQjB3eFBGdkJNRG81Z2plaUpWV3FIUXNYNmZTL3hCLzNzNTVnVDBZelpuNjAvMEJBa0VCWkZiZWNQKy9zaEVmSnpQN2h3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NTMsImFkdlNlY3JldEtleSI6Im5LVUZpa3ZGelMwWmN1UmM0NWhORWlwaXhsalJCRmhlZTEyVDJOMVJzV009IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiMjU4ODY5ODYyNzIyQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkU5MTg3ODk4NDcxQjcyMjdBM0Y1REE2M0NDM0MzQTQzIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NTUxMzcxNDR9LHsia2V5Ijp7InJlbW90ZUppZCI6IjI1ODg2OTg2MjcyMkBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJBRUM2MUZDQzk5QjJDMDU1M0RERDNEMEM2M0RDQUY3QiJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzU1MTM3MTQ0fV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJ5SWhRNjVlQlNteS1NV1BHUGgta2pnIiwicGhvbmVJZCI6Ijk3YjE0MjY0LTU3NzQtNDRhYS05OTk4LTE3YjBiMzZhYzJlYyIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJxY3NMckt3QUh1OS8yK0JjZjAzUW5tVDlWcDQ9In0sInJlZ2lzdGVyZWQiOmZhbHNlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InRBcXpVMnFHT2NvdERtZzM1c1U3N1JETUZFdz0ifSwicmVnaXN0cmF0aW9uIjp7fSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0tiTGxib0dFUENJOWNRR0dBSWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IlZmbmlqVERQZC80VE5ZVjhOeE50T0tnaXVPYTZGVG1LdDB2QnJUN0JyZ1k9IiwiYWNjb3VudFNpZ25hdHVyZSI6IndkQmlISnRNWHI3MTZwemxGc1Q3YUR2Rk9CcTVrS1dtbXloNkMzWmM3cTlrcy9Nd0IwdXVFNDhYdytOczVsUWlBN0g1UFVVd1NLZ1BBMHdHZWFLMUJ3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiJzSWUvQlZEOUJkSWcxTVMwZnh1dkI3cTNZNDNHN0NrdTIrQ3VWUjZrUkZwaytMM212aDUzMTEwWDlJeVZMRXUvRG1VMC9yZmhlcFMyN2M1WnVsSDRqQT09In0sIm1lIjp7ImlkIjoiMjU4ODY5ODYyNzIyOjVAcy53aGF0c2FwcC5uZXQiLCJsaWQiOiIyNTk2NTcxODAzODk1NTM6NUBsaWQiLCJuYW1lIjoiQm91bnRvbiJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyNTg4Njk4NjI3MjI6NUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJWWDU0bzB3ejNmK0V6V0ZmRGNUYlRpb0lyam11aFU1aXJkTHdhMCt3YTRHIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQTBJQ0E9PSJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NTUxMzcxNDEsImxhc3RQcm9wSGFzaCI6IjNSOVozOSIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBTnppIn0="
PORT: process.env.PORT || "8000"
};
