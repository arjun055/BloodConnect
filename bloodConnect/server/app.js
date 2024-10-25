import express from "express";
import bodyParser from "body-parser";
import pg from "pg";
import bcrypt from "bcrypt";
import dotenv from "dotenv";
import cors from 'cors'
dotenv.config()
const app = express();

app.use(cors());
const PORT = 3000;
const saltRounds = 10;

app.use(bodyParser.urlencoded({extended:true}));

const db = new pg.Client({
    user: "postgres",
    host: "localhost",
    database: "BloodConnect",
    password: "Arjun@2003",
    port: 5433,
});
db.connect();



app.post('/users', async (req, res) => {
    const { email, password, blood, latitude, longitude } = req.body;
    console.log(email, password, blood, latitude, longitude );
    
    bcrypt.hash(password, saltRounds, async (err, hash) => {
        if (err) {
          console.error("Error hashing password:", err);
        } else {
          const result = await db.query(
            "INSERT INTO users (email, password, bloodType, latitude, longitude) VALUES ($1, $2, $3, $4, $5)",
            [email,hash,blood,latitude,longitude]
          );
        //   const user = result.rows[0];
        //   req.login(user, (err) => {
        //     console.log("success");
        //     res.redirect("/secrets");
        //   });
        }
      });
    
  });

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})