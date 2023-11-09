const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors()); // เปิดให้ CORS ทำงาน

// กำหนดการเชื่อมต่อ MySQL
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '12345678',
  database: 'mydb1',
});

// เชื่อมต่อ MySQL
db.connect((err) => {
  if (err) {
    console.error('ไม่สามารถเชื่อมต่อกับ MySQL:', err);
  } else {
    console.log('เชื่อมต่อกับ MySQL สำเร็จ');
  }
});

// ตั้งค่าการใช้งาน JSON สำหรับรับข้อมูล POST
app.use(express.json());

// สร้าง API endpoint สำหรับ POST ข้อมูล
app.post('/api/register', (req, res) => {
  const data = req.body;
  const sql = 'INSERT INTO account (username, password, firstname, lastname) VALUES (?, ?, ?, ?)';
  db.query(sql, [data.username, data.password, data.firstname, data.lastname], (err, result) => {
    if (err) {
      console.error('เกิดข้อผิดพลาดในการบันทึกข้อมูล:', err);
      res.status(500).send('เกิดข้อผิดพลาดในการบันทึกข้อมูล');
    } else {
      console.log('บันทึกข้อมูลสำเร็จ');
      res.status(200).json({"u":data.username,"oo":"resitor sessus"})
    }
  });
});

app.post('/api/login', (req, res) => {
    const data = req.body;
    const sql = 'select username,password from account where username = ? and password = ?';
    db.query(sql, [data.username, data.password], (err, result) => {
      if (err) {
        console.error('เกิดข้อผิดพลาดในการบันทึกข้อมูล:', err);
        res.status(500).send('เกิดข้อผิดพลาดในการบันทึกข้อมูล');
      } else {
        if (result.length === 0){
            res.status(401).json({"error":'ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง'});
        }else{
            res.status(200).json({"u":data+"uigh","oo":result})
        }     
      }
    });
  });

app.post('/api/profile', (req, res) => {
    const data = req.body;
    const sql = 'select * from account where username = ?';
    db.query(sql, [data.username], (err, result) => {
        if (err) {
            console.error('เกิดข้อผิดพลาดในการบันทึกข้อมูล:', err);
            res.status(500).send('เกิดข้อผิดพลาดในการบันทึกข้อมูล');
        } else {
            res.status(200).json({"u": data.username, "oo": result});
        }
    });
});

app.post('/api/uploaddata', (req, res) => {
    const data = req.body;
    const sql = 'UPDATE esp32data SET voltage = ?, current = ?, energy = ?, frequency = ?, pf = ?, power = ?, temperture= ? WHERE (id = 1)';
    db.query(sql, [data.voltage, data.current, data.energy, data.frequency, data.pf, data.power, data.temperture], (err, result) => {
        if (err) {
            console.error('เกิดข้อผิดพลาดในการบันทึกข้อมูล:', err);
            res.status(500).send('เกิดข้อผิดพลาดในการบันทึกข้อมูล');
        } else {
            res.status(200).json({"u": data.voltage, "oo": result});
        }
    });
});

app.get('/api/history', (req, res) => {
    const data = req.body;
    const sql = 'SELECT * FROM esp32data';
    db.query(sql,  (err, result) => {
        if (err) {
            console.error('Error while querying the database:', err);
            res.status(500).send('Internal Server Error'); // Use a valid status code like 500 for server errors
          } else {
            res.status(200).json({"u": data.voltage, "oo": result});
          }
    });
});

app.get('/api/mode', (req, res) => {
    const sql = 'SELECT mode FROM esp32data where id = 1';
    db.query(sql, (err, result) => {
      if (err) {
        console.error('Error while querying the database:', err);
        res.status(500).send('Internal Server Error'); // Use a valid status code like 500 for server errors
      } else {
        if (result.length === 0) {
          res.status(404).send('Not Found'); // Use 404 for not found
        } else {
          res.status(200).send(`${result[0].mode}`);
        }
      }
    });
  });
  

app.post('/api/setmode', (req, res) => {
    const data = req.body;
    const sql = 'Update esp32data SET mode=? where (id=1)';
    console.log(data.mode)
    db.query(sql, [data.mode], (err, result) => {
        if (err) {
            console.error('เกิดข้อผิดพลาดในการบันทึกข้อมูล:', err);
            res.status(500).send('เกิดข้อผิดพลาดในการบันทึกข้อมูล');
        }
    });
});

app.listen(port, () => {
  console.log(`แอปพลิเคชันทำงานที่พอร์ต ${port}`);
});
