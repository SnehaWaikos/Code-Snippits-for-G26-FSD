let book = {
    title: 'Thank you for leaving',
    author: 'Rithvik Singh',
    isAvaitable: true,
  };
  
  if (book.isAvaitable) {
    console.log(`The book "${book.title}" is available`);
    book.isAvaitable = false;
  } else {
    console.log(`The book "${book.title}" is unavailable`);
  }
  