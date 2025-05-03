const open = document.querySelector(".img");
const close = document.querySelector(".close");
const side = document.querySelector(".side");

open.addEventListener("click", (event) => {
  side.classList.toggle("show");
  event.stopPropagation(); // Prevents the click from propagating to the document
});

close.addEventListener("click", () => {
  side.classList.remove("show");
});

document.addEventListener("click", (event) => {
  if (!side.contains(event.target) && !open.contains(event.target)) {
    side.classList.remove("show");
  }
});

const drop = document.querySelector(".drop1");
const acitve = document.querySelector(".brand");

drop.addEventListener("click", (event) => {
  acitve.classList.toggle("shov");
  event.stopPropagation();
});
document.addEventListener("click", (event) => {
  if (!drop.contains("event".target) && !acitve.contains(event.target)) {
    acitve.classList.remove("shov");
  }
});

const drop2 = document.querySelector(".evenning");
const show = document.querySelector(".drop2");

drop2.addEventListener("click", (event) => {
  show.classList.toggle("show");
  event.stopPropagation(); // Prevents the click from propagating to the document
});

document.addEventListener("click", (event) => {
  if (!drop2.contains(event.target) && !show.contains(event.target)) {
    show.classList.remove("show");
  }
});



//Previous and Next Section Slider
const slides = document.querySelectorAll(".slide");
var counter = 0;
// console.log(slides)

slides.forEach((slide, index) => {
  slide.style.left = `${index * 100}%`;
});

const goprev = () => {
  // counter--;
  if (counter > 0) {
    counter--;
  }
  slideImage();
};

const gonext = () => {
  // counter++;
  if (counter < 9) {
    counter++;
  }
  slideImage();
};

const slideImage = () => {
  slides.forEach((slide) => {
    slide.style.transform = `translateX(-${counter * 100}%)`;
  });
};





const after2_open = document.querySelector(".after2_open");
const afternoon = document.querySelector(".afternoon");

after2_open.addEventListener("click", (event) => {
  afternoon.classList.toggle("show");
  event.stopPropagation();
});
document.addEventListener("click", (event) => {
  if (!after2_open.contains(event.target) && !show.contains(event.target)) {
    afternoon.classList.remove("show");
  }
});

const evening2 = document.querySelector(".evening2");
const even_ning = document.querySelector(".even_ning");

evening2.addEventListener("click", (event) => {
  even_ning.classList.toggle("show");
  event.stopPropagation();
});
document.addEventListener("click", (event) => {
  if (!evening2.contains(event.target) && !even_ning.contains(event.target)) {
    even_ning.classList.remove("show");
  }
});
