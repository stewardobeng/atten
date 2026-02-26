import Database from 'better-sqlite3';

const db = new Database('attendance.db');

// Initialize database tables
db.exec(`
  CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    email TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL,
    role TEXT DEFAULT 'Employee',
    createdAt DATETIME DEFAULT CURRENT_TIMESTAMP
  );
`);

export default db;
