import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

const generateContacts = async (number) => {
    const existing = await readContacts();

    // yeni kişileri oluşturup eskilerle birleştiriyoruz
    const newContacts = Array.from({ length: number }, createFakeContact);
    const updated = [...existing, ...newContacts];

    await writeContacts(updated);
    console.log(`${number} contact(s) added. Total: ${updated.length}`);
};

generateContacts(5);
