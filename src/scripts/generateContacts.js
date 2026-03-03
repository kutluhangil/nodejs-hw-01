import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

const generateContacts = async (number) => {
    const existing = await readContacts();

    // Create the requested number of new contacts and merge with existing ones
    const newContacts = Array.from({ length: number }, createFakeContact);
    const updated = [...existing, ...newContacts];

    await writeContacts(updated);
    console.log(`${number} contact(s) added. Total: ${updated.length}`);
};

generateContacts(5);
