const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
app.use(cors({
  origin: 'http://localhost:5173',
  methods: 'GET,POST,PUT,DELETE',
  allowedHeaders: 'Content-Type,Authorization'
}))

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Abhi1234',
    database: 'tuf'
})

db.connect((err) => {
    if (err) {
      console.error('Error connecting to MySQL:', err.message);
      return;
    }
    console.log('Connected to MySQL');
  });
  

app.get("/questions",(req,res)=>{
    db.query('SELECT * FROM Question order by created_at desc;',(err,results,fields)=>{
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(results);
    })
})

app.post('/questions', (req, res) => {
    const { question, answer } = req.body;
    db.query('INSERT INTO question (question, answer) VALUES (?, ?)', [question, answer], (err, result) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      res.json({ id: result.insertId, question, answer });
    });
  });
  
  app.put('/questions/:id', (req, res) => {
    const questionId = req.params.id;
    const { question, answer } = req.body;
    db.query(
      'UPDATE question SET question = ?, answer = ? WHERE id = ?',
      [question, answer, questionId],
      (err) => {
        if (err) {
          return res.status(500).json({ error: err.message });
        }
        res.json({ message: 'Post updated successfully' });
      }
    );
  });

  app.delete('/questions/:id', (req, res) => {
    const questionId = req.params.id;
    db.query('DELETE FROM question WHERE id = ?', [questionId], (err) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      res.json({ message: 'Post deleted successfully' });
    });
  });

app.listen(3000,()=>{
    console.log('Server is running on port 3000');
})