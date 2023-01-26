// 1. Declare a function to generate a random number
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  // 2. Use the function to generate a random number between 1 and 100
  console.log(getRandomNumber(1, 100));
  
  // 3. Declare a function to generate a random color
  function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  
  // 4. Use the function to generate a random color
  console.log(getRandomColor());
  
  // 5. Declare a variable to store an array of objects
  let cars = [
    { make: "Toyota", model: "Camry", year: 2020 },
    { make: "Ford", model: "Fiesta", year: 2018 },
    { make: "Honda", model: "Civic", year: 2016 }
  ];
  
  // 6. Use the filter method to get all cars made in 2020
  let newCars = cars.filter(function(car) {
    return car.year === 2020;
  });
  console.log(newCars);
  
  // 7. Use the map method to get the make of all cars
  let carMakes = cars.map(function(car) {
    return car.make;
  });
  console.log(carMakes);
  
  // 8. Use the reduce method to get the total year of all cars
  let totalYears = cars.reduce(function(accumulator, car) {
    return accumulator + car.year;
  }, 0);
  console.log(totalYears);
  
  // 9. Use the sort method to sort the cars by year
  cars.sort(function(a, b) {
    return a.year - b.year;
  });
  console
  