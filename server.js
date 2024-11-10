const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;


app.use(cors());
app.use(bodyParser.json());


let movies = [
  { id: 1, title: "The Shawshank Redemption", genre: "Drama", director: "Frank Darabont", year: 1994 },
  { id: 2, title: "The Godfather", genre: "Crime", director: "Francis Ford Coppola", year: 1972 },
  { id: 3, title: "Pulp Fiction", genre: "Crime", director: "Quentin Tarantino", year: 1994 },
  { id: 4, title: "The Dark Knight", genre: "Action", director: "Christopher Nolan", year: 2008 },
  { id: 5, title: "Inception", genre: "Action", director: "Christopher Nolan", year: 2010 },
];


app.get('/', (req, res) => {
  res.send('Server is running');
});


app.get('/movies', (req, res) => {
  res.json(movies);
});


app.post('/movies', (req, res) => {
  const newMovie = { id: movies.length + 1, ...req.body };
  movies.push(newMovie);
  res.status(201).json(newMovie);
});


app.put('/movies/:id', (req, res) => {
  const { id } = req.params;
  const index = movies.findIndex(movie => movie.id === parseInt(id));
  if (index === -1) return res.status(404).send("Такого фильма нет");
  movies[index] = { ...movies[index], ...req.body };
  res.json(movies[index]);
});


app.patch('/movies/:id', (req, res) => {
  const { id } = req.params;
  const index = movies.findIndex(movie => movie.id === parseInt(id));
  if (index === -1) return res.status(404).send("Такого фильма нет");
  movies[index] = { ...movies[index], ...req.body };
  res.json(movies[index]);
});


app.delete('/movies/:id', (req, res) => {
  const { id } = req.params;
  const index = movies.findIndex(movie => movie.id === parseInt(id));
  if (index === -1) return res.status(404).send("Такого фильма нет");
  const deletedMovie = movies.splice(index, 1);
  res.json(deletedMovie);
});


app.listen(PORT, () => {
  console.log(`Server is running  http://localhost:${PORT}`);
});
