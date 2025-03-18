let drinks = [
    { name: 'Tea', price: 29 },
    { name: 'Coffee', price: 49 },
    { name: 'Coke', price: 29 },
    { name: 'Chocolate Shake', price: 99 },
    { name: 'Mango Shake', price: 69 },
    { name: 'Jamun Shot', price: 29 },
    { name: 'Pineapple Shake', price: 79 },
  ];
  
  drinks = drinks.filter(drinks => drinks.price > 50);
  console.log(drinks);
  