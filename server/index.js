import express from 'express';
import cors from 'cors';
import multer from 'multer';
import mysql from 'mysql2';

const app = express();

app.use(cors());
app.use(express.json());

// For file uploads
const upload = multer({ dest: 'uploads/' });

// MySQL connection
const db = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: 'winter',
  database: 'tvk_party',
});

// GET /tables returns all table names
app.get('/tables', (req, res) => {
  db.query('SHOW TABLES', (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    const tableNames = results.map(row => Object.values(row)[0]);
    res.json(tableNames);
  });
});

app.get('/GAD/:constituencyName', (req, res) => {
  const { constituencyName } = req.params;
  db.query(`SELECT DISTINCT GAD_Name FROM \`${constituencyName}\``, (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    const GAD_names = results.map(row => Object.values(row)[0]);
    res.json(GAD_names);
  });
});
app.get('/table', (req, res) => {
  const {gadName, constituencyName} = req.query;
  db.query(`SELECT * FROM  \`${constituencyName}\` WHERE BINARY GAD_Name = ?;`,[gadName],(err, results)=>{
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  })
});

// Insert route
app.post('/insert', upload.single('Photo'), (req, res) => {

  const {constituencyName} = req.body;
  console.log(constituencyName);
  const {
    GAD_Type, GAD_Name, Area_Name, Position, Name, Father_Name, DOB,
    Address, Email, Blood_Group, Aadhar, VoterID, Phone, Caste,
    Religion, Sex, Occupation, Education
  } = req.body;

  // For file, you can store req.file.filename or handle as needed
  const Photo = req.file ? req.file.filename : null;

  const sql = `
    INSERT INTO \`${constituencyName}\`
    (GAD_Type, GAD_Name, Area_Name, Position, Name, Father_Name, DOB, Address, Email, Blood_Group, Aadhar, VoterID, Phone, Caste, Religion, Sex, Occupation, Education, Photo)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `;
  const values = [
    GAD_Type, GAD_Name, Area_Name, Position, Name, Father_Name, DOB,
    Address, Email, Blood_Group, Aadhar, VoterID, Phone, Caste,
    Religion, Sex, Occupation, Education, Photo
  ];

  db.query(sql, values, (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ success: true, id: result.insertId });
  });
});

app.delete('/delete', (req, res) => {
  const { constituencyName, Name, id } = req.query;
  if (!constituencyName || !Name || !id) {
    return res.status(400).json({ error: 'Missing constituencyName, Name, or id' });
  }

  const sql = `DELETE FROM \`${constituencyName}\` WHERE Name = ? AND id = ?`;
  db.query(sql, [Name, id], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    if (result.affectedRows === 0) {
      return res.status(404).json({ error: 'No matching record found' });
    }
    res.json({ success: true });
  });
});

app.listen(3000, () => {
  console.log('Server running on port 3000');

});
