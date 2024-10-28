const trackAllBtn = document.querySelectorAll(".track-btn-container button");

const swiper = new Swiper(".swiper-container", {
  slidesPerView: 5,
  spaceBetween: 10,
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  grabCursor: true,
  freeMode: true,
  breakpoints: {
    // When window width is >= 1024px
    1150: {
      slidesPerView: 5, // 5 images on large screens
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 4, // 5 images on large screens
      spaceBetween: 10,
    },
    500: {
      slidesPerView: 3, // 5 images on large screens
      spaceBetween: 10,
    },
    300: {
      slidesPerView: 2, // 5 images on large screens
      spaceBetween: 10,
    },
  },
});

// img scale

window.addEventListener("load", function () {
  document.querySelector(".services-img").classList.add("scale-image");
});

// pricing slider
const pricingSwiper = new Swiper(".pricing-slider", {
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  loop: true,
  pagination: {
    el: ".pricing-pagination",
    clickable: true,
  },
  slidesPerView: 1, // This is correct for full-width slides
  spaceBetween: 0,
});

// track switcher
function tShowImage(imageId) {
  // Hide all images
  var images = document.querySelectorAll(".track-img-container img");
  images.forEach(function (image) {
    image.classList.remove("active-img");
  });

  // Show the selected image
  document.getElementById(imageId).classList.add("active-img");
}
trackAllBtn.forEach((b) => {
  b.addEventListener("click", () => {
    // Remove 'active-btn' class from all buttons first
    trackAllBtn.forEach((btn) => btn.classList.remove("active-btn"));

    // Add 'active-btn' class to the clicked button
    b.classList.add("active-btn");
  });
});

// faqs
function toggleFAQ(element) {
  const answer = element.nextElementSibling;
  const icon = element.querySelector(".faq-icon");

  if (answer.style.display === "block") {
    answer.style.display = "none";
    icon.textContent = "▶"; // Change icon to right arrow
  } else {
    answer.style.display = "block";
    icon.textContent = "▼"; // Change icon to down arrow
  }
}
