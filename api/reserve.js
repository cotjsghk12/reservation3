const mysql = require('mysql');

module.exports = (req, res) => {
  if (req.method === 'POST') {
    const {classNum, name } = req.body;

    const connection = mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME
    });

    connection.connect();

    const sql = 'INSERT INTO reservations (classNum, name) VALUES (?, ?, ?, ?)';
    const values = [ classNum, name];

    connection.query(sql, values, (err, result) => {
      if (err) {
        res.status(500).json({ error: 'Database error' });
      } else {
        res.status(200).json({ message: 'Reservation successful' });
      }
      connection.end();
    });
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
};
