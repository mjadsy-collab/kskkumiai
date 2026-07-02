

console.log("script loaded");
console.log(typeof gsap);
console.log(typeof ScrollTrigger);

const opening = document.querySelector(".opening");
const heroContent = document.querySelector(".hero-content");
const header = document.querySelector(".header");


window.addEventListener("scroll", () => {
  const y = window.scrollY;

  let blackOpacity = 1 - y / 1000;
  if (blackOpacity < 0) blackOpacity = 0;

  opening.style.opacity = blackOpacity;

  let textOpacity = (y - 60) / 160;
  if (textOpacity < 0) textOpacity = 0;
  if (textOpacity > 1) textOpacity = 1;

  heroContent.style.opacity = textOpacity;

});


gsap.registerPlugin(ScrollTrigger);

const mm = gsap.matchMedia();

mm.add("(min-width: 769px)", () => {
    // PC用
  ScrollTrigger.create({
    trigger: ".hero-content",
    start: "top 35%",
    end: "+=1030",
    pin: true,
    pinSpacing: false,
    markers: false
  });
});

mm.add("(max-width: 768px)", () => {
    // スマホ用
  ScrollTrigger.create({
    trigger: ".hero-content",
    start: "top center",
    end: "+=730",
    pin: true,
    pinSpacing: false,
    markers: true
  });
});