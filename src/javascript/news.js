const express = require('express');
const bodyParser = require('body-parser');
const { createClient } = require('@supabase/supabase-js');
require('dotenv').config();

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(express.static('public'));

const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);

app.get('/api/latest_news', async (req, res) => {
  const { data, error } = await supabase.from('latest_news').select('*');
  if (error) return res.status(500).json({ error });
  res.json(data);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
