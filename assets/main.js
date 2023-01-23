// HAMBURGER MENU
const header = document.getElementById('header');
const toggle = document.getElementById('toggle');
const navbar = document.getElementById('navbar');
    document.onclick = function(e){
    if(e.target.id !== 'header' && e.target.id !== 'toggle' && e.target.id !== 'navbar'){
        toggle.classList.remove('active');
        navbar.classList.remove('active');
    }
}

toggle.onclick = function(){
    toggle.classList.toggle('active');
    navbar.classList.toggle('active');
}

//NAV LINKS
const sections = document.querySelectorAll("section");
const navLi = document.querySelectorAll(".section__link");
window.onscroll = () => {
  var current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    if (scrollY >= sectionTop - 60) {
      current = section.getAttribute("id"); }
  });

  navLi.forEach((a) => {
    a.classList.remove("active");
    if (a.href.includes(current)) {
        a.classList.add('active');
        }
  });
};


// ANIMATIONS
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if(entry.isIntersecting)
        {
            entry.target.classList.add("show");
        }
        else
        {
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));