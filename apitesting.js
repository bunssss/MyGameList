// import * as dotenv from 'dotenv' // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
// dotenv.config()

const data = 'fields name; limit 10;'
const input = 'Call%20of%20Duty'
const url = ('https://api.igdb.com/v4/games/?fields=name,genres&search='+ input)
const gameCardTemplate = document.querySelector("[games-template]")
const gameCardContainer = document.querySelector("[data-games-cards-container]")

// const ClientID = process.env.CLIENTID
// const token = process.env.TOKEN

fetch(url, {
  method: 'POST',
  headers: {
    'Client-ID': '',
    'Authorization': '',
    'Content-Type': 'application/json'
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
//     'Client-ID': 'bgiba2kpjhy98ea8s5xu3d04sx72kn',
//     'Authorization': 'Bearer 371rntzw90vdgqrad4od50sgrs6st3',
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify(data)

// }).then(res =>  res.json())
// .then(data => console.log(data))
// .catch(error => console.log('ERROR'))