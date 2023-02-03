// Login & SignUp
const guideBtn = document.querySelector(".guideBtn");
const companyBtn = document.querySelector(".companyBtn");
const card = document.querySelector(".card");
const cardInner = document.querySelector(".card-inner");
const cardFront = document.querySelector(".card-front");

companyBtn.addEventListener("click", () => {
  guideBtn.classList.remove("activeBtn");
  companyBtn.classList.add("activeBtn");
  cardInner.classList.add("rotateY180");
  cardFront.classList.add("backFaceHiddes");
  // cardInner.style.transform = `rotateY(180deg)`;
});

guideBtn.addEventListener("click", () => {
  guideBtn.classList.add("activeBtn");
  companyBtn.classList.remove("activeBtn");
  cardInner.classList.remove("rotateY180");
});
// Login & SignUp End

