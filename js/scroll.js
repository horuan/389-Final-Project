// Set scroll duration and create virtual scene
const SCROLL_DURATION = 1200;
let controller = new ScrollMagic.Controller();

new ScrollMagic.Scene({
  duration: SCROLL_DURATION,
  offset: 0
})
  .setPin("#landing")
  .addTo(controller);

// Create a function on scroll that transitions landing page
$(document).ready(function(e) {
  $(window).scroll(function(e) {
    // Document element selectors
    const background = document.querySelector("#landing-background");
    const mainText = document.querySelector("#landing-main");
    const secondaryText = document.querySelector("#landing-secondary");
    const continueDiv = document.querySelector("#continue");
    const position = $(window).scrollTop();

    const width = $(window).innerWidth() / 2.0;

    // If position is 0, we are at top
    // Therefore at start position
    if (position === 0) {
      background.style.width = "45vw";
      mainText.style.transform = "translate(-0%)";
      continueDiv.style.opacity = "1";
      secondaryText.style.opacity = "0";
    } else {
      // Transition elements as user is scrolling
      background.style.width = "90vw";
      continueDiv.style.opacity = "0";
      secondaryText.style.opacity = "1";

      // Depending on screen size, translate different distances
      if (width >= 950 / 2.0) {
        mainText.style.transform = `translate(+${width + 100}px)`;
      } else if (width >= 800 / 2.0) {
        mainText.style.transform = `translate(+${width + 110}px)`;
      } else if (width >= 700 / 2.0) {
        mainText.style.transform = `translate(+${width + 105}px)`;
      } else if (width >= 600 / 2.0) {
        mainText.style.transform = `translate(+${width + 60}px)`;
      } else if (width >= 500 / 2.0) {
        mainText.style.transform = `translate(+${width + 70}px)`;
      } else if (width >= 400 / 2.0) {
        mainText.style.transform = `translate(+${width + 70}px)`;
      } else {
        mainText.style.transform = `translate(+${width + 55}px)`;
      }
    }
  });
});

// Animate smooth scroll
$("#work-btn").on("click", () => {
  const work = $("#work").position().top + SCROLL_DURATION;
  $("html, body").animate(
    {
      scrollTop: work
    },
    1200
  );
});

$("#about-btn").on("click", () => {
  const about = $("#about").position().top + SCROLL_DURATION;
  $("html, body").animate(
    {
      scrollTop: about
    },
    1200
  );
});

$("#contact-btn").on("click", () => {
  const contact = $("#contact").position().top + SCROLL_DURATION;
  $("html, body").animate(
    {
      scrollTop: contact
    },
    1200
  );
});

$("#back-to-top").on("click", () => {
  const root = $("#root").position().top;
  $("html, body").animate(
    {
      scrollTop: 0
    },
    1200
  );
});
