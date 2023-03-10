import express from 'express';
import serverless from 'serverless-http';

const app = express();

// Create a router to handle routes
const router = express.Router();

type joke = {
  content: string;
  name: string;
}

const myJokes: joke[]= [
  { name: 'hello', content: 'Ah... hi, hello...' }
]

router.get('/', (req, res) => {
  res.send('Hello, world!');
})

router.get('/hello', (req, res) => {
  res.json({
    data: myJokes
  }).status(200)
});

app.use('/.netlify/functions/api', router);

module.exports = app;
module.exports.handler = serverless(app);
