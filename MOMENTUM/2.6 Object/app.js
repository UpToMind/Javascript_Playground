// const playerName = "lee";
// const playerPoints = 100;
// const playerHandsome = true;
// const playerFat = "little bit";

// const player = ["lee", 100, true, "little bit"];

const player = {
  name: "lee",
  points: 100,
  handsome: true,
  fat: "little bit",
};

console.log(player);

player.lastname = "dong";
console.log(player.lastname);

console.log(player.name);
console.log(player["name"]);

console.log(player.points);
console.log(player["points"]);

console.log(player.handsome);
console.log(player["handsome"]);

player.points = player.points + 15;
console.log(player.points);
