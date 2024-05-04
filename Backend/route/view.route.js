import express from 'express';

const app = express();
let viewCount = 0;

app.get('/views', (req, res) => {
  try {
    viewCount++;
  } catch (error) {
    console.log(error)
  }
  res.json({ views: viewCount });
});

export { app, viewCount };
