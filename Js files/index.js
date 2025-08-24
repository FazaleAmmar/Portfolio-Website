// Typing Animation

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

// Intro Animation

const introText = document.querySelector(".intro-text");
const profilePic = document.querySelector(".profile-pic img");

const introAnimation = () => {
  setTimeout(() => {
    introText.style.transform = "translateY(0)";
    introText.style.opacity = "1";
    profilePic.style.transform = "translateY(0)";
    profilePic.style.opacity = "1";
  }, 500);
};

introAnimation();
