import express from 'express';
import cors from 'cors';
import fetch from 'node-fetch';

const app = express();
const PORT = 9167;

app.use(cors());

app.get('/api/blood-banks', async (req, res) => {
  const { latitude, longitude } = req.query;
  const GAK = import.meta.env.VITE_GOOGLE_API_KEY; // Set your API key in an environment variable
  const radius = 5000; // Example radius

  try {
    const response = await fetch(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${latitude},${longitude}&radius=${radius}&type=blood_bank&key=${GAK}`);
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
