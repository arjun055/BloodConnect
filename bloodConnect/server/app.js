import express from "express";
import bodyParser from "body-parser";
import pg from "pg";
import bcrypt from "bcrypt";
import dotenv from "dotenv";
import cors from 'cors';
import admin from 'firebase-admin';

const app = express();


app.use(cors());
app.use(express.json());

const PORT = 3000;
const saltRounds = 10;
dotenv.config()

app.use(bodyParser.urlencoded({extended:true}));

const db = new pg.Client({
    user: "postgres",
    host: "localhost",
    database: "BloodConnect",
    password: "Arjun@2003",
    port: 5433,
});
db.connect();



// app.post('/users', async (req, res) => {
//     const { email, password, blood, latitude, longitude } = req.body;
//     console.log(email, password, blood, latitude, longitude );
    

//         bcrypt.hash(password, saltRounds, async (err, hash) => {
//             if (err) {
//               console.error("Error hashing password:", err);
//             } else {
//               const result = await db.query(
//                 "INSERT INTO users (email, password, bloodType, latitude, longitude) VALUES ($1, $2, $3, $4, $5)",
//                 [email,hash,blood,latitude,longitude]
//               );
//             //   const user = result.rows[0];
//             //   req.login(user, (err) => {
//             //     console.log("success");
//             //     res.redirect("/secrets");
//             //   });
//             }
//           });
        
//       });



admin.initializeApp({
    credential: admin.credential.applicationDefault(),
});

let userTokens = {};

app.post('/api/save-token', (req, res) => {
    const { token } = req.body;
    // Here you would save the token in your database
    userTokens[token] = true; // Example
    res.status(200).send('Token saved');
});


app.post('/api/notify-users', async (req, res) => {
    const { bloodType } = req.body;

    if (!bloodType) {
        return res.status(400).json({ error: "Missing bloodType field" });
    }

    try {
        // Fetch users with the specified blood type from the database
        const result = await db.query(
            'SELECT * FROM users WHERE bloodType = $1',
            [bloodType]
        );

        if (result.rows.length === 0) {
            return res.status(404).json({ error: `No users found with blood type ${bloodType}` });
        }

        // Prepare notification payload
        const payload = {
            notification: {
                title: 'Blood Donation Needed',
                body: `We need blood type ${bloodType}!`,
            },
        };

        // Collect the tokens of users to send notifications
        const userTokens = [];
        for (const user of result.rows) {
            // Assuming you have a field in users table where you store the device token
            if (user.deviceToken) {
                userTokens.push(user.deviceToken);
            }
        }

        // Send notifications to the collected tokens
        if (userTokens.length > 0) {
            await admin.messaging().sendToDevice(userTokens, payload);
            console.log(`Notifications sent to users with blood type ${bloodType}`);
            return res.status(200).json({ status: "Notifications sent" });
        } else {
            return res.status(404).json({ error: "No device tokens found for users" });
        }
    } catch (error) {
        console.error("Error fetching users or sending notifications:", error);
        return res.status(500).json({ error: "Error fetching users or sending notifications" });
    }
});


app.post('/api/save-token', (req, res) => {
    const { token } = req.body;
    // Here you would save the token in your database
    // For example, you can update the user's record with their device token
    const email = req.body.email; // Assuming you also send email in request

    db.query('UPDATE users SET deviceToken = $1 WHERE email = $2', [token, email])
        .then(() => {
            res.status(200).send('Token saved');
        })
        .catch(err => {
            console.error('Error saving token:', err);
            res.status(500).send('Error saving token');
        });
});


app.post('/users', async (req, res) => {
  console.log(req.body); // Check what is received from the frontend
  const email = req.body.email;
  const password = req.body.password;
  const blood = req.body.blood;
  const latitude = req.body.latitude;
  const longitude = req.body.longitude;

  
  if (!email || !password || !blood || !latitude || !longitude) {
    return res.status(400).json({ error: "Missing data fields" });
  }

  bcrypt.hash(password, saltRounds, async (err, hash) => {
    if (err) {
      console.error("Error hashing password:", err);
      return res.status(500).json({ error: "Error hashing password" });
    }

    try {
      const result = await db.query(
        "INSERT INTO users (email, password, bloodType, latitude, longitude) VALUES ($1, $2, $3, $4, $5)",
        [email, hash, blood, latitude, longitude]
      );
      res.status(200).json({ status: "Success" });
    } catch (dbErr) {
      console.error("Database insert error:", dbErr);
      res.status(500).json({ error: "Failed to store data in the database" });
    }
  });
});


app.post('/bloodbank',async (req,res)=>{
    const email = req.body.email;
    const date = req.body.date; 

    if (!email || !date) {
        return res.status(400).json({ error: "Missing data fields" });
    }

    try {
        const result = await db.query(
          "INSERT INTO bloodbank (email, donation_date) VALUES ($1, $2)",
          [email, date]
        );
        res.status(200).json({ status: "Success" });
    } catch (dbErr) {
        console.error("Database insert error:", dbErr);
        res.status(500).json({ error: "Failed to store data in the database" });
    }

});






app.post("/api/send-notification", async (req, res) => {
    const { token, title, body } = req.body;
    const message = {
      notification: {
        title,
        body,
      },
      token: token,
    };

    try {
        const response = await admin.messaging().send(message);
        console.log("Successfully sent message:", response);
        res.status(200).send("Notification sent successfully");
      } catch (error) {
        console.error("Error sending message:", error);
        res.status(500).send("Error sending notification");
      }
});



    

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})