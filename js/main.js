document.addEventListener("DOMContentLoaded", function () {
  setVh();
  collapseNav();
  var scroll = new SmoothScroll('a[href*="#"]');

  let body = document.getElementsByTagName("html")[0];

  const trigger = document.getElementById("menu-trigger");
  if (trigger) {
    trigger.addEventListener("click", function () {
      body.classList.add("menu-opened");
    });
  }

  const closeMenu = document.getElementById("close-menu");
  if (closeMenu) {
    closeMenu.addEventListener("click", function () {
      body.classList.remove("menu-opened");
    });
  }

  let buttons = document.querySelectorAll("header nav a");
  if (buttons.length) {
    buttons.forEach((element) => {
      element.addEventListener("click", () => {
        body.classList.remove("menu-opened");
      });
    });
  }

  new Glide(".glide", {
    type: "carousel",
    startAt: 0,
    perView: 1,
    autoplay: 3000,
    animationDuration: 1000,
    hoverpause: true,
  }).mount();

  bindAnimations();
});

function bindAnimations() {
  let tl = gsap.timeline();
  tl.from(document.querySelectorAll("#landing .fade-up"), {
    stagger: 0.2,
    y: 30,
    opacity: 0,
    duration: 0.5,
    delay: 0.2,
  });

  gsap.fromTo(document.querySelectorAll("nav a"), { autoAlpha: 0, y: 30 }, { duration: 0.5, stagger: 0.2, autoAlpha: 1, y: 0, ease: "back.out(1.3)" });

  const stepsBlock = document.querySelector(".steps");
  var steps = stepsBlock.querySelectorAll(".step");
  gsap
    .timeline({
      scrollTrigger: {
        trigger: stepsBlock,
        start: "top 80%",
        toggleActions: "play none complete none",
      },
    })
    .fromTo(steps, { autoAlpha: 0, y: 100 }, { duration: 1, stagger: 0.2, autoAlpha: 1, y: 0, ease: "back.out(1.3)" });

  const infoBlock = document.querySelector("#info .list");
  var infoItems = infoBlock.querySelectorAll(":scope > *");
  gsap
    .timeline({
      scrollTrigger: {
        trigger: infoBlock,
        start: "top 80%",
        toggleActions: "play none complete none",
      },
    })
    .fromTo(infoItems, { autoAlpha: 0, y: 100 }, { duration: 1, stagger: 0.2, autoAlpha: 1, y: 0, ease: "back.out(1.1)" });
}

window.onscroll = function () {
  collapseNav();
};

function collapseNav() {
  var header = document.getElementById("main-header");
  if (window.pageYOffset > 10) {
    header.classList.add("collapse");
  } else {
    header.classList.remove("collapse");
  }
}

window.addEventListener("resize", () => {
  setVh();
});

function setVh() {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);
}
