let infoHeader = document.querySelectorAll(".infoHeader");

[...infoHeader].map((i) => {
  i.addEventListener("click", (e) => {
    let info = e.target.nextElementSibling;
    info.classList.toggle("dropdownHide");
  });
});

let aboutInfo = document.querySelector(".aboutInfo");
let whyChooseInfo = document.querySelector(".whyChooseInfo");
let aboutChevron = document.getElementById("aboutChevron");
let whyChevron = document.getElementById("langChevron");

aboutInfo.addEventListener("click", () => {
  aboutChevron.classList.toggle("rotate180");
});

whyChooseInfo.addEventListener("click", () => {
  whyChevron.classList.toggle("rotate180");
});
