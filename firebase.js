

//database
const reviewForm = document.querySelector('.review-form');
const GameName = document.querySelector('.gamename');
const DateStarted = document.querySelector('.DateSt');
const DateCompleted = document.querySelector('.DateComp');
const Rating = document.querySelector('.Rating');
const Comments = document.querySelector('.Comment');
const submit = document.querySelector('.submitbutton')

submit.addEventListener('click', (e) =>{
  e.preventDefault();
  db.collection('reviews').doc().set({
    gameName: GameName.value,
    DateStarted: DateStarted.value,
    DateCompleted: DateCompleted.value,
    Rating: Rating.value,
    Comment: Comments.value
  }).then(() => {
    reviewForm.reset;
  })
})
