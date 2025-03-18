let grade = {
    Shrenik: 85,
    Abhay: 90,
    Rohit: 78,
    Shreyas: 92,
  };
  console.log(grade);
  grade.Shreyas = 95;
  console.log(grade);
  delete grade.Rohit;
  console.log(grade);
  