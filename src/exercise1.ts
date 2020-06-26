const exercise1 = () => {
  // Exercise: Rewrite this function to make it usable in strongly typed manner.
  // Stretch: Try to rewrite in both normal form and arrow function form
  function printAndReturn(thing: any): any {
    console.log(thing);
    return thing;
  }

  printAndReturn(5);
  printAndReturn('This is a string');
  printAndReturn([1, 2, 3, 4, 5]);
};

export default exercise1;
