

console.log("script loaded");
console.log(typeof gsap);
console.log(typeof ScrollTrigger);

const opening = document.querySelector(".opening");
const heroContent = document.querySelector(".hero-content");
const header = document.querySelector("header");

const isMobile = window.innerWidth <= 768;

const blackDistance = isMobile ? 500 : 1000;
const textStart = isMobile ? 20 : 60;
const textDistance = isMobile ? 100 : 160;

const fileSection = document.querySelector("#about");
console.log("header:", header);
console.log("fileSection:", fileSection);

window.addEventListener("scroll", () => {
  const y = window.scrollY;

  let blackOpacity = 1 - y / blackDistance;
  blackOpacity = Math.max(0, blackOpacity);

  if (opening) {
  opening.style.opacity = blackOpacity;
  }

  let textOpacity = (y - textStart) / textDistance;
  textOpacity = Math.min(1, Math.max(0, textOpacity));

  if (heroContent) {
  heroContent.style.opacity = textOpacity;
  }


  if (header && fileSection) {
    const showPoint = fileSection.offsetTop + 20;

    console.log("y:", y, "showPoint:", showPoint);

    if (y >= showPoint) {
      header.classList.add("show");
    } else {
      header.classList.remove("show");
    }
  }

  console.log("scroll", window.scrollY);


});


const endValue = isMobile ? "+=530" : "+=1030";
const startValue = isMobile ? "top center" : "top 35%";

gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.create({
  trigger: ".hero-content",
  start: startValue,
  end: endValue,
  pin: true,
  pinSpacing: false
});



