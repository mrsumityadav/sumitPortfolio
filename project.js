function smoothScroll() {
  const lenis = new Lenis();

  lenis.on("scroll", (e) => {
    console.log(e);
  });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);
}
smoothScroll();

function projectCard() {
  var data = [
    {
      img: "img/project-isotope/canvas.png",
      title: "Canvas Animation",
      source:
        "This Project is made in HTML5 canvas and main use of GSAP. It change frame on every scroll and also some text...",
      design: "html,CSS,GSAP",
      webLink: "https://mrsumityadav.github.io/doze-studio/",
    },
    {
      img: "img/project-isotope/significo.png",
      title: "Significo",
      source:
        "This Project contain good scroll animation using GSAP. Enjoy seamless background transitions with scroll, driven by GSAP",
      design: "HTML,Tailwind-CSS, GSAP",
      webLink: "https://mrsumityadav.github.io/significo/",
    },
    {
      img: "img/project-isotope/cartBox.png",
      title: "Add-to-Cart",
      source:
        "It features a dynamic cart system where, upon clicking the Add to Cart button, items are added to the cart, and the total price updates automatically",
      design: "HTML, CSS, JS",
      webLink: "https://mrsumityadav.github.io/Add-to-Cart/",
    },
    {
      img: "img/project-isotope/exoape.png",
      title: "Exoape",
      source:
        "This project is made in React JS and it also contains good animation by framer animation",
      design: "React JS",
      webLink: "https://exoape-ruddy.vercel.app/",
    },
  ];

  var clutter = "";
  data.forEach(function (item, index) {
    clutter += ` 
      <div class="project px-[7.5vw] flex items-center justify-evenly ${
        index % 2 === 1 && "flex-row-reverse"
      } max-[768px]:flex-col gap-[3vw]">
        <div  data-aos="fade-up-right" class="img w-[35vw] overflow-hidden h-[22vw] bg-white rounded-[1.2vw] max-[768px]:w-[70vw] max-[768px]:h-[44vw]">
          <a href="${item.webLink}" target="child"><img src="${
      item.img
    }" class="w-full h-full object-cover"></a>
        </div>
        <div  data-aos="fade-up-left" class="dets w-[35vw] max-[768px]:w-[70vw] max-[768px]:text-start text-[2vw] 
        max-[768px]:text-[4vw]">
          <h1 class="text-[4vw] max-[768px]:text-[6vw]">${item.title}</h1>
          <div>
            <h5 class="tracking-tighter font-[sans] font-[200]">Design On : ${
              item.design
            }</h5>
            <h3 class="text-xl text-[#7b7b7b] w-[80%] mt-2">${item.source}</h3>
          </div>
        </div>
      </div>`;
    document.querySelector(".projects").innerHTML = clutter;
  });
}
projectCard();

function isotopeCard() {
  var isocard = [
    {
      img: "img/project-isotope/significo.png",
      categoryClass: "html-css",
      overlaytitle: "Significo",
      overlayPara: "",
      dataDelay: "0",
      webLink: "https://mrsumityadav.github.io/significo/",
    },
    {
      img: "img/project-isotope/spotifyClone.png",
      categoryClass: "react",
      overlaytitle: "Spotify-Clone",
      overlayPara: "",
      dataDelay: "0",
      webLink: "https://musicplayer-oepq.vercel.app/",
    },
    {
      img: "img/project-isotope/bubble.png",
      categoryClass: "javascript",
      overlaytitle: "Bubble Game",
      overlayPara: "",
      dataDelay: "100",
      webLink: "https://mrsumityadav.github.io/Bubble-game/",
    },
    {
      img: "img/project-isotope/docs.png",
      categoryClass: "react",
      overlaytitle: "Dragable Card",
      overlayPara: "",
      dataDelay: "200",
      webLink: "https://draggable-cards-ivory.vercel.app/",
    },
    {
      img: "img/project-isotope/e-commerce.png",
      categoryClass: "react",
      overlaytitle: "Select Product--",
      overlayPara: "",
      dataDelay: "0",
      webLink: "",
    },
    {
      img: "img/project-isotope/exoape.png",
      categoryClass: "react",
      overlaytitle: "Exoape",
      overlayPara: "",
      dataDelay: "100",
      webLink: "https://exoape-ruddy.vercel.app/",
    },
    {
      img: "img/project-isotope/lazarev.png",
      categoryClass: "html-css",
      overlaytitle: "Lazarev",
      overlayPara: "",
      dataDelay: "200",
      webLink: "https://mrsumityadav.github.io/lazarev-clone/",
    },
    {
      img: "img/project-isotope/music-player.png",
      categoryClass: "javascript",
      overlaytitle: "Music Player",
      overlayPara: "",
      dataDelay: "0",
      webLink: "https://mrsumityadav.github.io/music-player/",
    },
    {
      img: "img/project-isotope/canvas.png",
      categoryClass: "html-css",
      overlaytitle: "Canvas Animation",
      overlayPara: "",
      dataDelay: "0",
      webLink: "https://mrsumityadav.github.io/doze-studio/",
    },
    {
      img: "img/project-isotope/sundown.png",
      categoryClass: "html-css",
      overlaytitle: "Sundown",
      overlayPara: "",
      dataDelay: "100",
      webLink: "https://mrsumityadav.github.io/sundown/",
    },
    {
      img: "img/project-isotope/refokus.png",
      categoryClass: "react",
      overlaytitle: "Refokus",
      overlayPara: "",
      dataDelay: "200",
      webLink: "https://refokus-gamma.vercel.app/",
    },
    {
      img: "img/project-isotope/tinder.png",
      categoryClass: "javascript",
      overlaytitle: "Tinder",
      overlayPara: "",
      dataDelay: "300",
      webLink: "https://mrsumityadav.github.io/Tinder-effect/",
    },
    {
      img: "img/project-isotope/graphic.png",
      categoryClass: "graphic",
      overlaytitle: "Grahic Projects",
      overlayPara: "",
      dataDelay: "0",
      webLink: "",
    },
    {
      img: "img/project-isotope/todoList.png",
      categoryClass: "javascript",
      overlaytitle: "TodoList",
      overlayPara: "",
      dataDelay: "100",
      webLink: "https://mrsumityadav.github.io/To-do-List/",
    },
    {
      img: "img/project-isotope/cartBox.png",
      categoryClass: "javascript",
      overlaytitle: "Add-to-Cart",
      overlayPara: "",
      dataDelay: "100",
      webLink: "https://mrsumityadav.github.io/Add-to-Cart/",
    },
  ];

  var clutter = "";
  isocard.forEach((item, index) => {
    clutter += `
    <a href="${item.webLink}" target="child"
            class="card w-72 h-fit ${item.categoryClass}  bg-[#88888852] rounded-lg backdrop-blur-[22.55px] px-8 py-6 drop-shadow-xl text-white text-center gallery-item">

            <div class="img h-44 overflow-hidden w-full rounded-lg">
                <img src=${item.img} class="w-full h-full object-cover " alt="">
            </div>
            <h1 class="text-2xl font-semibold my-3 mt-8">${item.overlaytitle}</h1>
            <p class="text-md font-light text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit.consectetur adipisicing </p>
        </a>`;
    document.querySelector(".gallery").innerHTML = clutter;
  });
}
isotopeCard();

function isotope() {
  const filterButtons = document.querySelectorAll(".filter-button");
  const galleryItems = document.querySelectorAll(".gallery-item");

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const filter = button.getAttribute("data-filter");

      galleryItems.forEach((item) => {
        if (filter === "all" || item.classList.contains(filter)) {
          item.style.display = "block";
        } else {
          item.style.display = "none";
        }
      });

      filterButtons.forEach((btn) => btn.classList.remove("active"));
      button.classList.add("active");
    });
  });

  window.onload = () => {
    galleryItems.forEach((item) => (item.style.display = "block"));
  };
}
isotope();

function slider() {
  const slideContainer = document.querySelector(".slide-container");
  const slide = document.querySelector(".slides");
  const nextBtn = document.getElementById("next-btn");
  const prevBtn = document.getElementById("prev-btn");
  const interval = 6000;

  let slides = document.querySelectorAll(".slide");
  let index = 1;
  let slideId;
  let slideWidth;

  const firstClone = slides[0].cloneNode(true);
  const lastClone = slides[slides.length - 1].cloneNode(true);

  firstClone.id = "first-clone";
  lastClone.id = "last-clone";

  slide.append(firstClone);
  slide.prepend(lastClone);

  const updateSlideDimensions = () => {
    slides = document.querySelectorAll(".slide"); // Update slides
    slideWidth = slides[index].clientWidth; // Update slide width
    slide.style.transform = `translateX(${-slideWidth * index}px)`; // Adjust position
  };

  const startSlide = () => {
    slideId = setInterval(() => {
      moveToNextSlide();
    }, interval);
  };

  const handleTransition = () => {
    slides = document.querySelectorAll(".slide");
    if (slides[index].id === firstClone.id) {
      slide.style.transition = "none";
      index = 1;
      slide.style.transform = `translateX(${-slideWidth * index}px)`;
    }

    if (slides[index].id === lastClone.id) {
      slide.style.transition = "none";
      index = slides.length - 2;
      slide.style.transform = `translateX(${-slideWidth * index}px)`;
    }
  };

  const moveToNextSlide = () => {
    slides = document.querySelectorAll(".slide");
    if (index >= slides.length - 1) return;
    index++;
    slide.style.transition = ".7s ease-out";
    slide.style.transform = `translateX(${-slideWidth * index}px)`;
  };

  const moveToPreviousSlide = () => {
    if (index <= 0) return;
    index--;
    slide.style.transition = ".7s ease-out";
    slide.style.transform = `translateX(${-slideWidth * index}px)`;
  };

  slide.addEventListener("transitionend", handleTransition);

  slideContainer.addEventListener("mouseenter", () => {
    clearInterval(slideId);
  });

  slideContainer.addEventListener("mouseleave", startSlide);

  nextBtn.addEventListener("click", moveToNextSlide);
  prevBtn.addEventListener("click", moveToPreviousSlide);

  window.addEventListener("resize", () => {
    updateSlideDimensions();
  });

  updateSlideDimensions();
  startSlide();
}
slider();
