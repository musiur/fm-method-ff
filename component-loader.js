function loadComponent(url, targetId, callback = null) {
  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error(
          `Error loading component from ${url}: ${response.statusText}`
        );
      }
      return response.text();
    })
    .then((data) => {
      const targetElement = document.getElementById(targetId);
      if (!targetElement) {
        throw new Error(`Element with ID ${targetId} not found.`);
      }
      targetElement.innerHTML = data;
      lucide.createIcons();

      // Call the callback function if provided
      if (callback && typeof callback === "function") {
        callback();
      }
    })
    .catch((error) => {
      console.error(error);
    });
}

document.addEventListener("DOMContentLoaded", function () {
  // 1. Load Navbar
  loadComponent("components/navbar.html", "navbar-slot", function () {
    console.log("Navbar loaded successfully.");
  });

  // 2. Load Hero Section
  loadComponent("components/home/hero.html", "hero-slot", function () {
    console.log("Hero section loaded successfully.");
  });

  // 3. Load Courses Section with Swiper Initialization
  loadComponent("components/home/courses.html", "courses-slot", function () {
    console.log("Courses section loaded successfully.");
    new Swiper(".courses.container", {
      slidesPerView: 1,
      spaceBetween: 10,
      pagination: {
        el: ".swiper-pagination-courses",
        clickable: true,
      },
      breakpoints: {
        576: { slidesPerView: 2, spaceBetween: 10 },
        1024: { slidesPerView: 3, spaceBetween: 30 },
        1200: { slidesPerView: 4, spaceBetween: 30 },
      },
    });
  });

  // 4. Load About Section
  loadComponent("components/home/about.html", "home-about-slot", function () {
    console.log("About section loaded successfully.");
  });

  // 5. Load Online Courses Section with Swiper Initialization
  loadComponent(
    "components/home/online-courses.html",
    "online-courses-slot",
    function () {
      console.log("Online Courses section loaded successfully.");
      new Swiper(".online-course-one.container", {
        slidesPerView: 1,
        spaceBetween: 10,
        pagination: {
          el: ".swiper-pagination-online-courses",
          clickable: true,
        },
        breakpoints: {
          576: { slidesPerView: 2, spaceBetween: 10 },
          1024: { slidesPerView: 3, spaceBetween: 30 },
        },
      });
      new Swiper(".online-course-two.container", {
        slidesPerView: 1,
        spaceBetween: 10,
        pagination: {
          el: ".swiper-pagination-online-courses-two",
          clickable: true,
        },
        breakpoints: {
          576: { slidesPerView: 2, spaceBetween: 10 },
          1024: { slidesPerView: 3, spaceBetween: 30 },
        },
      });
    }
  );
});
