const fs = require('fs');

function parseCSVLine(text) {
  const result = [];
  let cur = '';
  let inQuotes = false;
  for (let i = 0; i < text.length; i++) {
    const c = text[i];
    if (c === '"') {
      if (inQuotes && text[i + 1] === '"') {
        cur += '"';
        i++;
      } else {
        inQuotes = !inQuotes;
      }
    } else if (c === ',' && !inQuotes) {
      result.push(cur.trim());
      cur = '';
    } else {
      cur += c;
    }
  }
  result.push(cur.trim());
  return result;
}

const lines = fs.readFileSync('sheet_gid0.csv', 'utf8').split(/\r?\n/);
const header = parseCSVLine(lines[0]);
console.log('Header columns:', header.length, header.slice(0, 10));

const roster = {};
const groups = {};
let studentCount = 0;

for (let i = 1; i < lines.length; i++) {
  const line = lines[i].trim();
  if (!line) continue;
  const cols = parseCSVLine(line);
  if (cols.length < 9) continue;
  
  const group = (cols[0] || cols[11] || '').trim();
  const taId = (cols[1] || '').trim();
  const taName = (cols[2] || '').trim();
  const taEmail = (cols[3] || '').trim();
  const taPhone = (cols[4] || '').trim();
  const studentName = (cols[6] || '').trim();
  const rollNo = (cols[7] || '').trim();
  const rawEmail = (cols[8] || '').trim();
  const email = rawEmail.toLowerCase();

  if (!email || !email.includes('@')) continue;

  const studentObj = {
    name: studentName,
    rollNo: rollNo,
    email: email,
    group: group,
    ta: {
      id: taId,
      name: taName,
      email: taEmail,
      phone: taPhone
    }
  };

  roster[email] = studentObj;
  studentCount++;

  // Also index by roll number if present
  if (rollNo) {
    roster[rollNo.toLowerCase()] = studentObj;
  }
  // Also index by prefix before @
  const username = email.split('@')[0];
  if (username) {
    roster[username] = studentObj;
  }

  groups[group] = (groups[group] || 0) + 1;
}

console.log('Unique students added:', studentCount);
console.log('Total keys in roster (emails, roll numbers, prefixes):', Object.keys(roster).length);
console.log('Group counts:', groups);

// Write to roster_data.js for easy inclusion in index.html
fs.writeFileSync('roster_data.js', 'window.STUDENT_ROSTER = ' + JSON.stringify(roster, null, 2) + ';\n');
console.log('Successfully written to roster_data.js');
