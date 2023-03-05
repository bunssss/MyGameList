import * as dotenv from 'dotenv' 
dotenv.config()

const data = 'fields name; limit 10;'
const url = ('	https://tox9brvade.execute-api.us-west-2.amazonaws.com/production/v4/games/')
const gameCardTemplate = document.querySelector("[games-template]")
const gameCardContainer = document.querySelector("[data-games-cards-container]")

const ClientID = process.env.CLIENTID
const token = process.env.TOKEN

fetch(url, {
  method: 'POST',
  headers: {
    'Client-ID': ClientID,
    'Authorization': token,
    'Content-Type': 'application/json',
    'x-api-key': 'LjoKUjDt0D7gLZKT133p45MUKRK9j6TtaMUcnIWn'
  },

}).then(res =>  res.json())
.then(data => {
  data.forEach(gameItem => {
  const card =  gameCardTemplate.content.cloneNode(true).children[0]
  const header = card.querySelector("[data-gname]")
  const summary = card.querySelector("[data-summary]")
  header.textContent = gameItem.name
  summary.textContent = "summary"
  gameCardContainer.append(card)
  console.log(card)
  })
})
.catch(error => console.log(error))

// const data = 'fields name; limit 10;'
// const input = 'Call%20of%20Duty'
// const url = ('https://api.igdb.com/v4/games/?fields=name,genres&search='+ input)

// const ClientID = process.env.CLIENTID
// const token = process.env.TOKEN

// fetch(url, {
//   method: 'POST',
//   headers: {
//     'Client-ID': ClientID,
//     'Authorization': token,
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify(data)

// }).then(res =>  res.json())
// .then(data => console.log(data))
// .catch(error => console.log('ERROR'))