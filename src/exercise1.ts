const exercise1 = () => {
  function printAndReturn<T>(thing: T): T {
    console.log(thing);
    return thing;
  }

  printAndReturn<number>(5);

  // Type Inference for the type variable happening here
  printAndReturn('This is a string');

  printAndReturn<number[]>([1, 2, 3, 4, 5]);
};

export default exercise1;
