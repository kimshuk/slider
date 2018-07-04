"use strict";

let imageIndex = 1;
const imgsArr = [
  "https://placeunicorn.com/1000x400/2",
  "https://placeunicorn.com/1000x400/3",
  "https://placeunicorn.com/1000x400/4"
];

const imageContainer = $(".image");
const indicatorContainer = document.getElementsByClassName("indicator");

// slide forward

const next = () => {
  imageContainer.removeClass("active");
  $(".indicator").removeClass("active");

  if (imageIndex < imgsArr.length) {
    imageIndex++;
  } else {
    imageIndex = 1;
  }

  indicatorContainer[imageIndex - 1].className += " active";
  $(`.image--${imageIndex}`).addClass("active");
};

// slide backward

const prev = () => {
  imageContainer.removeClass("active");
  $(".indicator").removeClass("active");

  if (imageIndex < imgsArr.length + 1 && imageIndex > 1) {
    imageIndex--;
  } else if (imageIndex === 1) {
    imageIndex = imgsArr.length;
  }

  indicatorContainer[imageIndex - 1].className += " active";
  $(`.image--${imageIndex}`).addClass("active");
};

// detect current slide with indicator
const current = n => {
  if (n == imageIndex && imageContainer.hasClass("active")) {
    return;
  } else {
    imageIndex = n;

    imageContainer.removeClass("active");
    $(".indicator").removeClass("active");

    indicatorContainer[imageIndex - 1].className += " active";
    $(`.image--${imageIndex}`).addClass("active");
  }
};

// auto slide
setInterval(next, 6000);
