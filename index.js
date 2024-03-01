const navMenu = document.getElementById("navContent");
const navToggle = document.getElementById("nav-Toggle");
const navClose = document.getElementById("nav-Close");
const menuLinks = document.querySelectorAll('#menu li a');
menuLinks.forEach(function(link) {
  link.addEventListener('click', function() {
    menuLinks.forEach(function(link) {
      link.classList.remove('active');
    });
    this.classList.add('active');
  });
});
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("active");
  });
}

if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("active");
  });
}

$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 10,
  autoplay: true,
  nav: true,
  responsiveClass: true,
  responsive: {
    0: {
      items: 1,
      nav: true,
    },
    400: {
      items: 2,
      nav: true,
    },
    600: {
      items: 3,
      nav: true,
    },
    1000: {
      items: 6,
      nav: true,
    },
  },
});

