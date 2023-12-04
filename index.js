const express = require('express');
// alternativt om du har "type": "module"
// inställt i din package.json
// import express from 'express'

// ange samma port som live server har kört på
// eller ändra baseUrl för cypress...
const port = 5500;

const app = express();

app.use(express.static('.'));

app.listen(port, () => console.log('Espresso Addict is served at http://localhost:' + port));