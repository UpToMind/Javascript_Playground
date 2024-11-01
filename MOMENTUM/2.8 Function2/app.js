function sayHello(name, age) {
  console.log(`hello my name is ${name} and I'm ${age} years old`);
}

sayHello("lee", 20);

const player = {
  name: "lee",
  printAge: function (age) {
    console.log(`hello I'm ${age} years old`);
  },
};

player.printAge(20);
