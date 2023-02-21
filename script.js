// Get the tabs and sections
const tabs = document.querySelector("#tabs").children;
const sections = document.querySelectorAll("section");

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

