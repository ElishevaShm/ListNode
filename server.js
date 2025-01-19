require('dotenv').config();
const express = require('express');
const axios = require('axios'); 
const app = express();
const port = 3000;
const API_KEY = process.env.RENDER_API_KEY;

app.get('/services', async (req, res) => {
  try {
    const response = await axios.get('https://api.render.com/v1/services', {
        headers: { Authorization: `Bearer ${API_KEY}` }
    });
    res.json(response.data); 
  } catch (error) {
    console.error(error);
    res.status(500).send('Error receiving data');
  }
});


app.listen(port, () => console.log(`Server running on port: ${port}`));
