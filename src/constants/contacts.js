import { fileURLToPath } from 'node:url';
import { join, dirname } from 'node:path';

// Build the path relative to this file so it always points to the right place
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const PATH_DB = join(__dirname, '../db/db.json');
