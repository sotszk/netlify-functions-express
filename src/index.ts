import express from 'express';

const app = express();
const port = 4300;

type joke = {
  content: string;
  name: string;
}

const myJokes: joke[]= [
  { name: 'hello', content: 'Ah... hi, hello...' }
]

app.get('/', (req, res) => {
  res.send('Hello, world!');
})

app.get('/hello', (req, res) => {
  res.json({
    data: myJokes
  }).status(200)
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});

