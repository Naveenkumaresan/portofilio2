const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navItem = document.querySelectorAll(".nav__item"),
  header = document.getElementById("header");

// open and close menu
navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("nav__menu--open");
  changeIcon();
});

// close the menu when the user clicks the nav links
navItem.forEach((item) => {
  item.addEventListener("click", () => {
    if (navMenu.classList.contains("nav__menu--open")) {
      navMenu.classList.remove("nav__menu--open");
    }
    changeIcon();
  });
});

// Change nav toggle icon
function changeIcon() {
  if (navMenu.classList.contains("nav__menu--open")) {
    navToggle.classList.replace("ri-menu-3-line", "ri-close-line");
  } else {
    navToggle.classList.replace("ri-close-line", "ri-menu-3-line");
  }
}

window.addEventListener("scroll", () => {
  if (window.scrollY > 40) {
    header.classList.add("header--scroll");
  } else {
    header.classList.remove("header--scroll");
  }
});


  const sr = ScrollReveal({
    duration: 2000,
    distance: "100px",
    delay: 400,
    reset: false,
  });
  // sr.reveal(".nav__brand", { origin: "left" });
  sr.reveal(".introver, .backgro", { origin: "bottom" });
  sr.reveal(".intro", { origin: "top" });
  sr.reveal(".hom2", { origin: "left"});
  sr.reveal(".line", { origin: "left", delay: 300 });
  sr.reveal(".res h2", { origin: "bottom", delay: 300 });
  sr.reveal(".res a", { origin: "top", delay: 300 });
  sr.reveal(".about h1", { origin: "left", delay: 200 });
  sr.reveal(".meimg", { origin: "top", delay: 300 });
  sr.reveal(".about_text", { origin: "left", delay: 400 });
  sr.reveal(".skills_head", { origin: "bottom", delay: 400 });
  sr.reveal(".skills", { origin: "bottom", delay: 500 });
  sr.reveal(".lft, .pr", { origin: "left", interval: 200 });
  sr.reveal(".exp", { origin: "bottom", delay: 200 });
  sr.reveal(".exp h1", { origin: "top", delay: 200 });
  sr.reveal(".exp h3", { origin: "left", delay: 200 });
  sr.reveal(".exp h4", { origin: "bottom", delay: 200 });
  sr.reveal(".exp h6", { origin: "top", delay: 200 });
  sr.reveal(".exp p", { origin: "bottom", delay: 200 });
  sr.reveal(".project-head", { origin: "top", delay: 200 });
  sr.reveal(".project-cards", { origin: "bottom", delay: 300 });
  sr.reveal(".card-1", { origin: "left", interval: 200 });
  sr.reveal(".card-2", { origin: "bottom", interval: 200 });
  sr.reveal(".card-3", { origin: "left", interval: 200 });
  sr.reveal("footer h1, footer h3", { origin: "bottom", delay: 200 });
  sr.reveal("footer h6", { origin: "top", delay: 200 });
  


  document.addEventListener('DOMContentLoaded', () => {
    const socialIcons = document.querySelector('.smicons');
    const mailDetails = document.querySelector('.maildetails');
    const socialHeading = document.querySelector('.social-heading');
    const mailHeading = document.querySelector('.mail-heading');
  
    function addActiveClass(heading) {
      heading.classList.add('active');
    }
  
    function removeActiveClass(heading) {
      heading.classList.remove('active');
    }
  
    socialIcons.addEventListener('mouseover', () => addActiveClass(socialHeading));
    socialIcons.addEventListener('mouseout', () => removeActiveClass(socialHeading));
  
    mailDetails.addEventListener('mouseover', () => addActiveClass(mailHeading));
    mailDetails.addEventListener('mouseout', () => removeActiveClass(mailHeading));
  });
  


document.addEventListener('DOMContentLoaded', function() {
    const paragraphs = document.querySelectorAll('.project-cards .card p');

    paragraphs.forEach(paragraph => {
        paragraph.addEventListener('click', function() {
            this.classList.toggle('expanded');
        });
    });
});




