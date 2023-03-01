// import * as dotenv from 'dotenv' // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
// dotenv.config()

const input = 'Call%20of%20Duty'
const url = ('https://api.igdb.com/v4/games/?fields=name,genres&search='+ input)
const gameCardTemplate = document.querySelector("[games-template]")
const gameCardContainer = document.querySelector("[data-games-cards-container]")

// const ClientID = process.env.CLIENTID
// const token = process.env.TOKEN

fetch(url, {
  headers: {
    'Client-ID': '',
    'Authorization': '',
    'Content-Type': 'application/json'
  },

}).then(res =>  res.json())
.then(data => {
  data.forEach(gameItem => {
  const card =  gameCardTemplate.content.cloneNode(true).children[0]
  const header = card.querySelector("[data-header]")
  const summary = card.querySelector("[data-genre]")
  header.textContent = gameItem.name
  summary.textContent = gameItem.storyline
  gameCardContainer.append(card)
  console.log(card)
  })
})
.catch(error => console.log('ERROR'))