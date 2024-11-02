const hellos = document.getElementsByClassName("hello");
console.log(hellos);

const hellosByTagName = document.getElementsByTagName("h1");
console.log(hellosByTagName);

const hellosByQuery = document.querySelector(".hello h1:nth-child(2)");
console.log(hellosByQuery);

hellosByQuery.innerText = "Hello!";
