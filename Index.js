const express = require('express');
const fetch = require('node-fetch');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Hotel Search
app.post('/search-hotels', async (req, res) => {
  const { location, checkin, checkout, guests } = req.body;
  try {
    const response = await fetch(`https://api.impt.io/hotels/search?location=${location}&checkin=${checkin}&checkout=${checkout}&guests=${guests}`, {
      headers: {
        'Authorization': `Bearer ${process.env.IMPT_PARTNER_KEY}`
      }
