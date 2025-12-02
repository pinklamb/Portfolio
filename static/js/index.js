const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 100) { 
    navbar.classList.add('show-nav');
    navbar.classList.remove('hidden-nav');
  } else {
    navbar.classList.add('hidden-nav');
    navbar.classList.remove('show-nav');
  }
});


const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('nav ul li a');

window.addEventListener('scroll', () => {
  let current = '';
  
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (scrollY >= sectionTop - sectionHeight / 3) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === '#' + current) {
      link.classList.add('active');
    }
  });
});


const viewMoreBtn = document.querySelector('.view-more-box');

viewMoreBtn.addEventListener('click', (fun) => {
  fun.preventDefault();
  const targetSection = document.querySelector('#about');
  if (targetSection) {
    targetSection.scrollIntoView({ behavior: 'smooth' });
  }
});

navLinks.forEach(link => {
  link.addEventListener("click", function(e) {
    e.preventDefault();
    const targetId = this.getAttribute("href");
    const targetSection = document.querySelector(targetId);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth" });
    }
  });
});

