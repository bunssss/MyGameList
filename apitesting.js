const data = 'fields name; limit 10;'
const input = 'Call%20of%20Duty'
const url = ('https://api.igdb.com/v4/games/?fields=name&search='+ input)
const dotenv = require('dotenv');

dotenv.config()


fetch(url, {
  method: 'POST',
  headers: {
    'Client-ID': ,
    'Authorization': ,
    'Content-Type': 'application/json'
  },

  body: JSON.stringify(data)

}).then(res =>  res.json())
.then(data => console.log(data))
.catch(error => console.log('ERROR'))