const h1 = document.querySelector("div.hello h1");

// h1.addEventListener("click", () => {
//   const clickedClass = "clicked";

//   if (h1.classList.contains(clickedClass)) {
//     h1.classList.remove(clickedClass);
//   } else {
//     h1.classList.add(clickedClass);
//   }

// });

h1.addEventListener("click", () => {
  h1.classList.toggle("clicked");
 

});