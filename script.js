// Get the tabs and sections
const tabs = document.querySelector("#tabs").children;
const sections = document.querySelectorAll("section");

// const gameCardTemplate = document.querySelector("[games-template]")
// const gameCardContainer = document.querySelector("[data-games-cards-container]")


// Add click event listeners to the tabs
for (let i = 0; i < tabs.length; i++) {
  tabs[i].addEventListener("click", function() {
    // Remove the active class from all tabs and sections
    for (let j = 0; j < tabs.length; j++) {
      tabs[j].classList.remove("active");
      sections[j].style.display = "none";
    }

    // Add the active class to the current tab and show its section
    this.classList.add("active");
    sections[i].style.display = "block";
  });
}

// Show the first tab and section by default
tabs[0].classList.add("active");
sections[0].style.display = "block";

// const card =  gameCardTemplate.content.cloneNode(true).children[0]
//   const gname = card.querySelector("[game-name]")
//   const date1 = card.querySelector("[date-started]")
//   const date2 = card.querySelector("[date-completed]")
//   const rating = card.querySelector("[rating]")
//   const comments = card.querySelector("[comments]")
//   gname.textContent = document.querySelector('#gamename')
//   date1.textContent = document.querySelector('#DateStart')
//   date2.textContent = document.querySelector('#DateComplete')
//   rating.textContent = document.querySelector('#Rating')
//   comments.textContent = document.querySelector('#Comments')
//   gameCardContainer.append(card)
