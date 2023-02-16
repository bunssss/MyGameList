const data = 'fields name; limit 10;'
const input = 'Call%20of%20Duty'
const url = ('https://api.igdb.com/v4/games/?fields=name&search='+ input)
const dotenv = require('dotenv');
require("dotenv").config();

const ClientID = process.env.ClientID;
const token = process.env.TOKEN;

fetch(url, {
  method: 'POST',
  headers: {
    'Client-ID': ClientID,
    'Authorization': token,
    'Content-Type': 'application/json'
  },

  body: JSON.stringify(data)

}).then(res =>  res.json())
.then(data => console.log(data))
.catch(error => console.log('ERROR'))