const title = document.querySelector("div.hello h1");
console.log(title);
console.dir(title);

title.style.color = "red";

title.addEventListener("click", () => {
  title.style.color = "blue";
});
title.addEventListener("mouseenter", () => {
  console.log("Mouse entered");
});
title.addEventListener("mouseleave", () => {
  console.log("Mouse leaved");
});
