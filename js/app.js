/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
 */

/**
 * Define Global Variables
 *
 */

const nav = document.getElementById("navbar__menu");
const ul = document.getElementById("navbar__list");
const sections = document.querySelectorAll("section");
const sectionsLength = sections.length;
let sectionsPosition = [];
let prePosition = 0;
let currentPosition = 0;

/**
 * End Global Variables
 * Start Helper Functions
 *
 */

/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

// build the nav
sections.forEach((element, index) => {
  let sectionName = element.getAttribute("data-nav");
  let toOffSection = element.offsetTop;
  let li = document.createElement("li");
  li.setAttribute("class", "menu__link" + index);
  li.setAttribute("id", "menu__link" + index);
  li.innerHTML = `<a onClick="scrollToSection(${toOffSection})">${sectionName}</a>`;
  ul.appendChild(li);
});

// Add class 'active' to section when near top of viewport
document.addEventListener("click", () => {
  currentPosition = this.scrollY;
  sectionsPosition = [];
  sections.forEach((element) =>
    sectionsPosition.push(element.getBoundingClientRect().top + 5)
  );

  let addIndex = sectionsPosition.findIndex((element) => element > 0);
  for (let i = 0; i < sectionsLength; i++) {
    if (addIndex === i) {
      document.querySelector(".menu__link" + addIndex).classList.add("active");
      document
        .querySelector(`#section${addIndex + 1}`)
        .classList.add("current-active-section");
    } else {
      document.querySelector(".menu__link" + i).classList.remove("active");
      document.querySelector(`#section${i + 1}`).removeAttribute("class");
    }
  }
});

// Scroll to anchor ID using scrollTO event
function scrollToSection(sectionID) {
  // event.preventDefault();
  // window.scrollTo(0, sectionID);
  window.scrollTo({ top: sectionID, behavior: "smooth" });
}

/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu

// Scroll to section on link click

// Set sections as active

// -------------------------------------------------------
