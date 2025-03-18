let user = {
    name: 'Sneha',
    age: 21,
    city: 'Parbhani',
  };
  
  user.age = 21;
  user.profession = 'Student';
  delete user.city;
  
  console.log(user);
  