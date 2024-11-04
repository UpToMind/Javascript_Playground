const title = document.querySelector("div.hello h1");

title.addEventListener("click", () => {
  const currentColor = title.style.color;
  let newColor;

  if (currentColor === "red") {
    newColor = "blue";
  } else {
    newColor = "red";
  }
  title.style.color = newColor;
});
