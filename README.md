<h1>📂 Node.js Homework 01 — Contacts File Manager</h1>

<p>
This project is the first Node.js homework assignment.  
The goal of the project is to build a small command-line application that
works with <strong>files</strong> and manages a list of <strong>contacts</strong>.
</p>

<p>
The application reads and writes data to a JSON file and allows users to
generate, add, list, count, and remove contacts using simple npm scripts.
</p>

<hr/>

<h2>🔗 Project Link</h2>

<ul>
  <li>
    <strong>GitHub Repository:</strong><br/>
    <a href="https://github.com/kutluhangil/nodejs-hw-01" target="_blank">
      https://github.com/kutluhangil/nodejs-hw-01
    </a>
  </li>
</ul>

<hr/>

<h2>🎯 Project Goal</h2>

<p>
The objective of this homework is to learn the basics of
<strong>Node.js</strong> and how to work with files using JavaScript.
</p>

<p>
Students start from a prepared project template and gradually implement
different scripts that interact with a contacts database stored in a JSON file.
</p>

<p>
Each step introduces a new concept such as reading files, writing data,
generating fake data, and manipulating arrays stored in files.
</p>

<hr/>

<h2>⚙️ Technologies Used</h2>

<ul>
<li>Node.js</li>
<li>JavaScript (ES Modules)</li>
<li>File System (fs/promises)</li>
<li>@faker-js/faker</li>
<li>ESLint</li>
<li>Prettier</li>
</ul>

<hr/>

<h2>📂 Project Structure</h2>

<pre>
src/
├── constants/
│   └── contacts.js
│
├── db/
│   └── db.json
│
├── scripts/
│   ├── addOneContact.js
│   ├── countContacts.js
│   ├── generateContacts.js
│   ├── getAllContacts.js
│   ├── removeAllContacts.js
│   └── removeLastContact.js
│
├── utils/
│   ├── createFakeContact.js
│   ├── readContacts.js
│   └── writeContacts.js
│
└── index.js
</pre>

<hr/>

<h2>📦 Installation</h2>

<p>Install project dependencies:</p>

<pre>
npm install
</pre>

<p>Install faker library used to generate random contacts:</p>

<pre>
npm i -D @faker-js/faker
</pre>

<hr/>

<h2>🚀 Available Scripts</h2>

<p>The following npm commands run different scripts in the project:</p>

<ul>

<li>
<strong>Generate Contacts</strong><br/>
Creates multiple random contacts and saves them to the database.
<pre>npm run generate</pre>
</li>

<li>
<strong>Add One Contact</strong><br/>
Adds a single randomly generated contact.
<pre>npm run add-one</pre>
</li>

<li>
<strong>Get All Contacts</strong><br/>
Reads and displays all contacts from the database.
<pre>npm run get-all</pre>
</li>

<li>
<strong>Count Contacts</strong><br/>
Returns the total number of contacts stored in the database.
<pre>npm run count</pre>
</li>

<li>
<strong>Remove Last Contact</strong><br/>
Deletes the last contact in the list.
<pre>npm run remove-last</pre>
</li>

<li>
<strong>Remove All Contacts</strong><br/>
Deletes every contact from the database.
<pre>npm run remove-all</pre>
</li>

</ul>

<hr/>

<h2>📊 How It Works</h2>

<p>
All contacts are stored inside the following file:
</p>

<pre>
src/db/db.json
</pre>

<p>
The application reads data from this file, modifies the array of contacts,
and writes the updated data back to the file.
</p>

<p>
Random contacts are generated using the <strong>@faker-js/faker</strong> library.
</p>

<hr/>

<h2>✅ Homework Requirements</h2>

<ul>
<li>Create a repository named <strong>nodejs-hw-01</strong></li>
<li>Push all source code to GitHub</li>
<li>The application must run without errors</li>
<li>All scripts must correctly manipulate the contacts file</li>
</ul>

<hr/>

<h2>📌 Final Notes</h2>

<p>
This project introduces fundamental Node.js concepts such as
working with files, modular project structure, and executing scripts
through npm commands.
</p>

<p>
It serves as the foundation for more advanced backend development tasks.
</p>

<p>
<strong>Happy coding! 🚀</strong>
</p>
