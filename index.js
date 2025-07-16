// Global scope
let burgers = ['Hamburger', 'Cheeseburger'];
let featuredDrink = 'Strawberry Milkshake';

// Function to add 'Flatburger' to the burgers array
function addBurger() {
  // Function-scoped variable
  let newBurger = 'Flatburger';
  burgers.push(newBurger);
}

if (true) {
  // Block-scoped variable
  const anothernewBurger = 'Maple Bacon Burger';
  burgers.push(anothernewBurger);
}

// Function to update the featured drink
function changeFeaturedDrink() {
  featuredDrink = 'The JavaShake';
}

console.log("Before adding Flatburger:", burgers);
addBurger();
console.log("After addBurger():", burgers);

console.log("Featured drink before:", featuredDrink);
changeFeaturedDrink();
console.log("Featured drink after:", featuredDrink);