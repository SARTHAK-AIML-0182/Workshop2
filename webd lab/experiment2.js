
// EXPERIMENT - 2

// Perform CRUD operations on files using fs module

const fs = require('fs/promises');
const filePath = './student.txt';
// 1. CREATE
fs.writeFile(filePath, 'ID: 101\nName: Sarthak\nSalary: 12000')
  .then(() => {
    console.log('CREATE: File created.');
    // 2. READ
    return fs.readFile(filePath, 'utf8');
  })
  .then((data) => {
    console.log('\nREAD:\n' + data);
    // 3. UPDATE
    return fs.appendFile(filePath, '\nRole: Software Engineer');
  })
  .then(() => {
    console.log('\nUPDATE: Appended role.');
    // Verify update
    return fs.readFile(filePath, 'utf8');
  })
  .then((data) => {
    console.log('\nREAD AFTER UPDATE:\n' + data);
    // 4. DELETE
    return fs.unlink(filePath);
  })
  .then(() => {
    console.log('\nDELETE: File deleted.');
  })
  .catch((err) => {
    // Catches any failure across all steps above
    console.error('Operation failed:', err.message);
  });



