function smoothScroll() {
  const lenis = new Lenis();

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);
}
smoothScroll();

function homePageFollower() {
  const magneticElement = document.querySelector(".magnetic");

  document.addEventListener("mousemove", (e) => {
    const rect = magneticElement.getBoundingClientRect();
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const deltaX = mouseX - centerX;
    const deltaY = mouseY - centerY;

    const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

    // Calculate how much the div should move based on the distance
    const maxDistance = 400; // Maximum distance for the effect to apply
    const maxMove = 30; // Maximum movement in px

    if (distance < maxDistance) {
      const moveX = (deltaX / distance) * maxMove;
      const moveY = (deltaY / distance) * maxMove;

      magneticElement.style.transform = `translate(${moveX}px, ${moveY}px)`;
    } else {
      magneticElement.style.transform = `translate(0, 0)`;
    }
  });

  magneticElement.addEventListener("mouseleave", () => {
    magneticElement.style.transform = "translate(0, 0)";
  });
}
homePageFollower();

function typeText() {
  const texts = ["Front-End Developer!", "Graphic Designer!"];
  const typingSpeed = 100; // milliseconds for typing
  const deletingSpeed = 50; // milliseconds for deleting
  const delayBetweenTexts = 1000; // milliseconds delay between typing new text
  let textIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function type() {
    const currentText = texts[textIndex];
    const typedTextElement = document.getElementById("typedText");

    if (isDeleting) {
      // Delete text
      typedTextElement.textContent = currentText.substring(0, charIndex--);
      if (charIndex < 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % texts.length;
        setTimeout(type, delayBetweenTexts);
      } else {
        setTimeout(type, deletingSpeed);
      }
    } else {
      // Type text
      typedTextElement.textContent = currentText.substring(0, charIndex++);
      if (charIndex > currentText.length) {
        isDeleting = true;
        setTimeout(type, delayBetweenTexts);
      } else {
        setTimeout(type, typingSpeed);
      }
    }
  }
  setTimeout(type, 3000);
}
window.onload = typeText;

function skillDets() {
  var skill = [
    {
      img: "img/skill/html-2.png",
      skillName: "HTML",
      bar: "90%",
      percent: "90%",
    },
    {
      img: "img/skill/css-2.png",
      skillName: "CSS",
      bar: "86%",
      percent: "86%",
    },
    {
      img: "img/skill/js-2.png",
      skillName: "Javascript",
      bar: "70%",
      percent: "70%",
    },
    {
      img: "img/skill/react.png",
      skillName: "React",
      bar: "69%",
      percent: "69%",
    },
    {
      img: "img/skill/bootstrap.png",
      skillName: "BootStrap",
      bar: "88%",
      percent: "88%",
    },
    {
      img: "img/skill/tailwind.png",
      skillName: "Tailwind CSS",
      bar: "92%",
      percent: "92%",
    },
    {
      img: "img/skill/animation.png",
      skillName: "Web Animation",
      bar: "76%",
      percent: "76%",
    },
    {
      img: "img/skill/photoshop.png",
      skillName: "Photoshop",
      bar: "87%",
      percent: "87%",
    },
    {
      img: "img/skill/illustrator.png",
      skillName: "Illustrator",
      bar: "73%",
      percent: "73%",
    },
    {
      img: "img/skill/figma.png",
      skillName: "Figma",
      bar: "80%",
      percent: "80%",
    },
  ];

  var skillContainer = document.querySelector(".skill-container");

  clutter = "";
  skill.forEach(function (elem) {
    clutter += `<div class="skill-card hover:scale-[1.03] duration-300">
        <div class="img">
            <img src=${elem.img} alt="">
        </div>
        <div class="dets">
            <div class="skill-name">
                <h3>${elem.skillName}</h3>
                <div class="per-line">
                    <div class="line w-[${elem.bar}]">
                      <div class="line-child"></div>
                    </div>
                </div>
            </div>
            <div class="skill-per">${elem.percent}</div>
        </div>
    </div>`;
    skillContainer.innerHTML = clutter;
  });
}
skillDets();

function cards() {
  var project = [
    {
      name: "HTML, CSS, GSAP",
      image: "./img/skill/css-2.png",
      pr1: {
        link: "Significo",
        data: "./img/project-isotope/significo.png",
        mainLink: "",
      },
      pr2: {
        link: "Sundown",
        data: "./img/project-isotope/sundown.png",
        mainLink: "",
      },
      pr3: {
        link: "Lazarev",
        data: "./img/project-isotope/Lazarev.png",
        mainLink: "",
      },
      pr4: {
        link: "Duo Studio",
        data: "./img/project-isotope/duo.png",
        mainLink: "",
      },
      // pr : [
      //   {link:"Significo", data: "./img/project-isotope/significo.png"},
      //   {link:"Sundown", data: "./img/project-isotope/Sundown.png"},
      //   {link:"Lazarev", data: "./img/project-isotope/Lazarev.png"},
      //   {link:"Duo Studio", data: "./img/project-isotope/duo.png"},
      // ]
    },
    {
      name: "Javascript",
      image: "./img/skill/js-2.png",
      pr1: {
        link: "Music Player",
        data: "./img/project-isotope/music-player.png",
        mainLink: "",
      },
      pr2: {
        link: "Password Generator",
        data: "./img/project-isotope/password.png",
        mainLink: "",
      },
      pr3: {
        link: "To-Do List",
        data: "./img/project-isotope/todoList.png",
        mainLink: "",
      },
      pr4: {
        link: "Tinder Effect",
        data: "./img/project-isotope/tinder.png",
        mainLink: "",
      },
    },
    {
      name: "React",
      image: "./img/skill/react.png",
      pr1: {
        link: "DragableCards",
        data: "./img/project-isotope/draggableCard.png",
        mainLink: "",
      },
      pr2: {
        link: "OchiDesign",
        data: "./img/project-isotope/ochi.png",
        mainLink: "",
      },
      pr3: {
        link: "Exoape",
        data: "./img/project-isotope/exoape.png",
        mainLink: "",
      },
      pr4: {
        link: "Refokus",
        data: "./img/project-isotope/Refokus.png",
        mainLink: "",
      },
    },
    {
      name: "Graphic",
      image: "./img/skill/graphic.png",
      pr1: {
        link: "UI/UX Design",
        data: "./img/project-isotope/ui-ux.jpg",
        mainLink:
          "https://www.figma.com/design/gLKDtrszNzYtnXaccXczsQ/portfolio?node-id=43-66&t=AZhnBTiTvAmNwCRd-1",
      },
      pr2: {
        link: "Web Template",
        data: "./img/project-isotope/web-temp.png",
        mainLink:
          "https://www.figma.com/design/5B47efqXMdqE5NNVJQbUm4/kg-studio?node-id=358-170&t=05oI2moazqB3wpEQ-1",
      },
      pr3: {
        link: "Post",
        data: "./img/project-isotope/SocialMediaPost.png",
        mainLink: "img/project-isotope/SocialMediaPost.png",
      },
      pr4: {
        link: "Illustration",
        data: "./img/project-isotope/illustration.png",
        mainLink: "img/project-isotope/illustration.png",
      },
    },
  ];

  var cardsContainer = document.querySelector(".cards");

  var clutter = "";
  project.forEach(function (item, index) {
    clutter += `
        <div class="card border-t-2 ${
          index === 3 && `border-b-2`
        } border-white w-full">
            <div class="card-heading relative py-10 max-[768px]:py-6 w-full px-28 max-[768px]:px-10 flex items-center justify-between cursor-pointer">
                <div
                    class="floating-img absolute max-[768px]:hidden top-1/2 left-1/2 opacity-0 pointer-events-none -translate-x-1/2 -translate-y-1/2 w-[10vw]">
                    <img src=${item.image} alt="">
                </div>
                <div class="text-[2vw] max-[768px]:text-[4vw] card-title">${
                  item.name
                }</div>
                <div class="w-[3vw] h-[3vw] rounded-full bg-[#4C4C4C] card-icon text-white flex items-center justify-center  max-[768px]:w-[5vw] max-[768px]:h-[5vw]">
                    <i class="text-[2vw] ri-arrow-down-s-line max-[768px]:text-[4vw]"></i>
                 </div>
                </div>
            <div
                class="project-link w-full flex justify-between px-40 max-[768px]:px-20 h-[0vw] overflow-hidden duration-300 ease-out">
            <div class="text-[1.5vw] max-[768px]:text-[3vw] flex flex-col">
                <li data-video="${item.pr1.data}" class="active">
                <a href="${
                  item.pr1.mainLink
                }" target="child" class="max-[768px]:underline">${
      item.pr1.link
    }</a>
                </li>
                <li data-video="${item.pr2.data}">
                <a href="${
                  item.pr2.mainLink
                }" target="child" class="max-[768px]:underline">${
      item.pr2.link
    }</a>
                </li>
                <li data-video="${item.pr3.data}">
                <a href="${
                  item.pr3.mainLink
                }" target="child" class="max-[768px]:underline">${
      item.pr3.link
    }</a>
                </li>
                <li data-video="${item.pr4.data}">
                <a href="${
                  item.pr4.mainLink
                }" target="child" class="max-[768px]:underline">${
      item.pr4.link
    }</a>
                </li>
            </div>
            <div class="vdo flex items-center justify-center">
            <div class="w-[20vw] h-[12vw] rounded-md max-[768px]:hidden overflow-hidden child-png">
                <img id="png-box-1" width="320" height="240" style="display: none;" class="w-full h-full object-cover" />
            </div>
            <a href="#" class="px-4 py-2 max-[768px]:text-[2.5vw] border-2 border-white rounded-md hidden max-[768px]:block">See All</a>
            </div>
        </div>
    </div>`;
    cardsContainer.innerHTML = clutter;
  });

  var cardhead = document.querySelectorAll(".card-heading");

  cardhead.forEach(function (dets) {
    dets.addEventListener("click", function () {
      var projectlink = dets.nextElementSibling;
      projectlink.classList.toggle("height");
    });

    var rotate = 0;
    var diffrot = 0;

    dets.addEventListener("mousemove", function (elem) {
      var diff = elem.clientY - dets.getBoundingClientRect().top;
      diffrot = elem.clientX - rotate;
      rotate = elem.clientX;

      var xvalue = gsap.utils.mapRange(
        0,
        window.innerWidth,
        200,
        window.innerWidth - 200,
        elem.clientX
      );

      gsap.to(dets.querySelector(".floating-img"), {
        opacity: 1,
        ease: Power3,
        top: diff,
        left: xvalue,
      });
    });

    dets.addEventListener("mouseleave", function (elem) {
      gsap.to(dets.querySelector(".floating-img"), {
        opacity: 0,
        ease: Power3,
        duration: 0.5,
      });
    });
  });
}
cards();

window.oncontextmenu = (e) => {
  e.preventDefault();
};

function vdoPlay() {
  document.querySelectorAll(".card").forEach((parent) => {
    const pngBox = parent.querySelector('img[id^="png-box"]');
    const placeholder = parent.querySelector(".png-placeholder");

    parent.querySelectorAll(".project-link li").forEach((item) => {
      // Flag to avoid multiple png reloads
      let pngPlaying = false;

      item.addEventListener("mouseover", () => {
        if (!pngPlaying) {
          const pngSource = item.getAttribute("data-video");
          pngBox.setAttribute("src", pngSource);
          pngBox.style.display = "block"; // Show the png
          // placeholder.style.display = 'none'; // Hide the placeholder image
          pngPlaying = true;
        }
      });

      item.addEventListener("mouseleave", () => {
        pngBox.style.display = "none"; // Hide the png
        // placeholder.style.display = 'block'; // Show the placeholder image
        pngPlaying = false;
      });

      // Prevent the png from restarting when hovering over the anchor tag
      item.querySelector("a").addEventListener("mouseover", (event) => {
        event.stopPropagation();
      });
    });
  });
}
vdoPlay();

// -------------- GSAP -------------- //

function allAnimation() {
  function homeAnimation() {
    const tl = gsap.timeline();
    tl.from("nav", { opacity: 0, y: -200, duration: 0.8, ease: "power4" });
    tl.from(".detail .name h1", { y: -200, opacity: 0 }, "home");
    tl.from(".detail .home-skill h3", { x: -200, opacity: 0 });
    tl.from(".detail .para", { opacity: 0 }, "a");
    tl.from(".detail .para p ", { opacity: 0, x: -200, duration: 0.25 }, "a");
    tl.from(".detail .btncontainer .home-btn", {
      opacity: 0,
      y: 200,
      duration: 0.2,
    });
    tl.from(".details .img", { opacity: 0, rotate: 90, scale: 0 }, "-=1.5");
    tl.from(".home svg", { opacity: 0, x: 200, duration: 0.1 });
  }
  homeAnimation();

  function aboutAnimation() {
    var tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: ".about",
        scroller: "body",
        start: "top 80%",
        end: "top 0%",
        scrub: 2,
        once: true,
      },
    });
    tl2.from(".about .heading span", { rotate: 90, y: "100%" });
    tl2.from(".about-img", { x: "-100%", opacity: 0 });
    tl2.from(".about-detail h2 span", { x: "-100%" }, "hello");
    tl2.from(".about-detail p span", { x: "100%" }, "hello");
    tl2.from(".about-detail .about-links", { opacity: 0, scale: 0 });
  }
  aboutAnimation();

  function skillHeading() {
    gsap.from(".skill .heading span", {
      scrollTrigger: {
        trigger: ".skill",
        scroller: "body",
        start: "top 80%",
      },
      rotate: 90,
      y: "100%",
    });
  }
  skillHeading();

  function skillDets() {
    document
      .querySelectorAll(".skill-card .line .line-child")
      .forEach((item) => {
        gsap.from(item, {
          scrollTrigger: {
            trigger: ".skill",
            scroller: "body",
            start: "top 90%",
            end: "top 80%",
          },
          width: 0,
          duration: 1,
        });
      });
  }
  skillDets();

  function projectAnimation() {
    var projecttl = gsap.timeline({
      scrollTrigger: {
        trigger: ".project .heading",
        scroller: "body",
        start: "top 80%",
      },
    });
    projecttl.from(".project .heading span", { rotate: 90, y: "100%" });
    projecttl.from(".project-star", { opacity: 0, scale: 0 });

    document.querySelectorAll(".cards .card").forEach((item) => {
      var tl3 = gsap.timeline({
        scrollTrigger: { trigger: item, scroller: "body", start: "top 90%" },
      });
      tl3.from(
        item.querySelector(".card-title"),
        { opacity: 0, scale: 0 },
        "card"
      );
      tl3.from(
        item.querySelector(".card-icon"),
        { opacity: 0, scale: 0 },

        "card"
      );
    });
    gsap.from(".project .btncontainer", {
      scrollTrigger: {
        trigger: ".project .btncontainer",

        scroller: "body",
        start: "top 80%",
      },
      opacity: 0,
      scale: 0,
    });
  }
  projectAnimation();

  function contactAnimation() {
    gsap.from(".contact .heading span", {
      scrollTrigger: {
        trigger: ".contact .heading",
        scroller: "body",
        start: "top 90%",
      },
      rotate: 90,
      y: "100%",
    });

    var tl4 = gsap.timeline({
      scrollTrigger: {
        trigger: ".contact .contact-container",
        scroller: "body",
        start: "top 80%",
      },
    });
    tl4.from(".contact-dets", { opacity: 0, x: "-100%" }, "form");
    tl4.from("form", { opacity: 0, x: "100%" }, "form");
  }
  contactAnimation();

  function footerAnimation() {
    var footertl = gsap.timeline({
      scrollTrigger: {
        trigger: "footer",
        scroller: "body",
        start: "top 80%",
        end: "top 60%",
        scrub: 2,
        once: true,
      },
    });
    footertl.from(".contact-branch", { opacity: 0, y: "-100%" });
    footertl.from(".contact-dots", { opacity: 0, x: "100%" });
    footertl.from(".footer-dets", { opacity: 0, scale: 0 });
    footertl.from("footer h3", { opacity: 0, y: "100%" });
  }
  footerAnimation();
}
allAnimation();
