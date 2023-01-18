const menu = {
    "Breakfast Sandwich": 4.99,
    "Classic Breakfast": 6.99,
    "Veggie Omelette": 8.99,
    "Eggs Benedict": 9.99,
    "Bagel and Cream Cheese": 3.99,
    "Biscuits and Gravy": 5.99
  };
  
  console.log("Welcome to our breakfast cafe!");
  console.log("Here is our menu:");
  
  for (let item in menu) {
    console.log(item + ": $" + menu[item]);
  }
  