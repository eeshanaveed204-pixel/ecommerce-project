const express = require('express');
const path = require('path');

const app = express();

app.use(express.static('public'));

// Sample products data
const products = [
  {id: 1, name: "iPhone 14", description: "Latest Apple iPhone with A15 chip"},
  {id: 2, name: "Samsung Galaxy S23", description: "New Samsung flagship phone"},
  {id: 3, name: "MacBook Air", description: "Apple MacBook Air M2"},
  {id: 4, name: "Dell XPS 13", description: "Dell thin and powerful laptop"},
  {id: 5, name: "Sony WH-1000XM5", description: "Noise-cancelling headphones"},
  {id: 6, name: "Apple AirPods Max", description: "Premium wireless headphones"}
];

// Home route
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'home.html'));
});

// Products page…