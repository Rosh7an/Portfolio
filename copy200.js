const fs = require('fs');
const path = require('path');

const src = path.join(__dirname, 'build', 'index.html');
const dest = path.join(__dirname, 'build', '200.html');

fs.copyFile(src, dest, (err) => {
  if (err) {
    console.error('❌ Failed to copy index.html to 200.html:', err);
  } else {
    console.log('✅ 200.html created from index.html');
  }
});
