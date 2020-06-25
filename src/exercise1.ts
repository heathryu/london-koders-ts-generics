const exercise1 = () => {
  // Rewrite this function to make it usable in strongly typed manner.
  // Stretch: Try to rewrite in both normal form and arrow function form
  function printAndReturn(thing: any): any {
    console.log(thing);
    return thing;
  }

  printAndReturn(5);
  printAndReturn('This is a string');
  printAndReturn([1, 2, 3, 4, 5]);
  printAndReturn({
    Heath: 'Credit Karma',
    Jungyoung: "Lloyd's Banking Group",
    Jihyun: 'Credit Karma',
    Taeim: "Blackwell's",
  });
};

export default exercise1;
