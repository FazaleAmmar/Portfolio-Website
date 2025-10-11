// Typing Animation

function typeText() {
  const typedText = document.getElementById("typed-text");
  const cursor = document.querySelector(".cursor");

  const textArray = [
    "Frontend Developer",
    "Web Developer",
    "Freelancer",
    "Problem Solver",
  ];
  let textArrayIndex = 0;
  let charIndex = 0;

  function type() {
    if (charIndex < textArray[textArrayIndex].length) {
      typedText.textContent += textArray[textArrayIndex].charAt(charIndex);
      charIndex++;
      setTimeout(type, 100);
    } else {
      setTimeout(erase, 1500);
    }
  }

  function erase() {
    if (charIndex > 0) {
      typedText.textContent = textArray[textArrayIndex].substring(
        0,
        charIndex - 1
      );
      charIndex--;
      setTimeout(erase, 50);
    } else {
      textArrayIndex++;
      if (textArrayIndex >= textArray.length) textArrayIndex = 0;
      setTimeout(type, 500);
    }
  }

  document.addEventListener("DOMContentLoaded", () => {
    setTimeout(type, 500);
  });
}

// Intro Animation

function Intro() {
  const introText = document.querySelector(".intro-text");
  const profilePic = document.querySelector(".profile-pic ");

  const introAnimation = () => {
    setTimeout(() => {
      introText.style.transform = "translateY(0)";
      introText.style.opacity = "1";
      profilePic.style.transform = "translateY(0)";
      profilePic.style.opacity = "1";
    }, 500);
  };

  introAnimation();
}

// FaQ section

function faq() {
  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach((item) => {
    const question = item.querySelector(".faq-question");
    question.addEventListener("click", () => {
      const isActive = item.classList.contains("active");

      faqItems.forEach((i) => {
        i.classList.remove("active");
        i.querySelector(".faq-icon").textContent = "+";
      });

      if (!isActive) {
        item.classList.add("active");
        item.querySelector(".faq-icon").textContent = "−";
      }
    });
  });
}

// Intro Image with animation

function introImageAnimation() {
  const introImage = document.querySelector(".profile-pic img");
  const images = ["../images/Ammar1.png", "../images/Ammar2.png"];
  let currentIndex = 0;

  const changeImage = () => {
    introImage.style.opacity = "0";

    setTimeout(() => {
      currentIndex = (currentIndex + 1) % images.length;
      introImage.src = images[currentIndex];

      introImage.style.opacity = "1";
    }, 1000);
  };

  setInterval(changeImage, 5000);
}

// Hamburger
function hamburger() {
  const hamburger = document.querySelector(".hamburger");
  const navLinksUL = document.querySelector(".navLinks ul");

  hamburger.addEventListener("click", () => {
    navLinksUL.classList.toggle("show");
  });
}

function main() {
  typeText();
  hamburger();
  Intro();
  faq();
  introImageAnimation();
}

main();
