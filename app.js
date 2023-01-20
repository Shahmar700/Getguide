const icons = document.querySelectorAll(".fa-plus");
const answer = document.querySelectorAll(".faq-answer");

[...icons].map((i) => {
  i.addEventListener("click", (e) => {
    icons.forEach((a) => a.classList.remove("rotate"));
    i.classList.add("rotate");
    [...document.querySelectorAll(".faq-answer")].map(
      (a) => (a.style.height = 0)
    );
    let p = e.target.nextElementSibling;
    p.style.height = `${p.scrollHeight}px`;
  });
});

// const i = [...document.querySelectorAll(".fa-plus")];
// i.map((i) => {
//   i.addEventListener("click", (e) => {
//     //  if (p.style.height != 0) {

//     //  } else {
//     //    i.style.transform = "rotate(180deg)";
//     //  }
//     [...document.querySelectorAll(".faq-answer")].map(
//       (a) => (a.style.height = 0)
//     );
//     i.style.transform = "rotate(45deg)";
//     let p = e.target.nextElementSibling;
//     p.style.height = `${p.scrollHeight}px`;
//   });
// });
