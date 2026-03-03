import { fileURLToPath } from 'node:url';
import { join, dirname } from 'node:path';

// bu dosyaya göre yolu oluşturuyoruz ki her zaman doğru yeri bulsun
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const PATH_DB = join(__dirname, '../db/db.json');
