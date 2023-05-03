import dotenv from 'dotenv'
dotenv.config()
import express from 'express'
import routes from './routes/index.js'
import oracledb from 'oracledb'
import fs from 'fs'

let libPath;
if (process.platform === 'win32') {           // Windows
  libPath = 'C:\\instantclient';
} else if (process.platform === 'darwin') {   // macOS
  libPath = process.env.HOME + '/Documentos/instantclient';
}

if (libPath && fs.existsSync(libPath)) {
  oracledb.initOracleClient({ libDir: libPath });
}


const app = express()
app.use(express.json())
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
  });

routes(app)

export default app