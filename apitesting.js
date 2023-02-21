const input = 'Call%20of%20Duty'
const url = ('https://api.igdb.com/v4/games/?fields=name,genres&search='+ input)
import * as dotenv from 'dotenv' 
dotenv.config()
const gameCardTemplate = document.querySelector("[games-template]")
const gameCardContainer = document.querySelector("[data-games-cards-container]")

dotenv.config();

const ClientID = process.env.ClientID;
const token = process.env.TOKEN;


fetch(url, {
  headers: {
    'Client-ID': ClientID,
    'Authorization': token,
    'Content-Type': 'application/json'
  },

  body: JSON.stringify(data)

}).then(res =>  res.json())
.then(data => {
  data.forEach(gameItem => {
  const card =  gameCardTemplate.content.cloneNode(true).children[0]
  const header = card.querySelector("[data-header]")
  const genre = card.querySelector("[data-genre]")
  header.textContent = gameItem.name
  genre.textContent = gameItem.storyline
  gameCardContainer.append(card)
  console.log(card)
  })
})
.catch(error => console.log('ERROR'))