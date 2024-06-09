import { config } from 'dotenv';
import sql from 'mssql';

config();

const dbUser = process.env.DB_USER || '';
const dbPassword = process.env.DB_PASSWORD || '';
const dbServer = process.env.DB_SERVER || '';
const dbName = process.env.DB_NAME || '';

if (!dbUser || !dbPassword || !dbServer || !dbName) {
  throw new Error('Database configuration is missing. Please set DB_USER, DB_PASSWORD, DB_SERVER, and DB_NAME in your environment variables.');
}

const pool = new sql.ConnectionPool({
  user: dbUser,
  password: dbPassword,
  server: dbServer,
  database: dbName,
  options: {
    encrypt: false, // Use encryption
    trustServerCertificate: true // Add this line to trust self-signed certificates
  }
});

pool.connect()
  .then(() => {
    console.log('Connected to MSSQL');
  })
  .catch(err => {
    console.error('Database connection failed:', err);
  });

export default pool;