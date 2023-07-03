//Toggle Nav

const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelectorAll(".links");

navToggle.addEventListener("click", function () {
  links.forEach(function (link) {
    link.classList.toggle("show-links");
  });
});
