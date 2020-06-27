type Fruit = '🍉';
type Chocolate = '🍫';

// Exercise: Refactor the code below to define a more reusable interface
interface FruitBox {
  unbox: () => Fruit;
}

interface ChocolateBox {
  unbox: () => Chocolate;
}

const exercise2 = () => {
  // Exercise: Update the type annotations to utilise the refactored interface definition
  const fruitBox: FruitBox = {
    unbox: () => '🍉',
  };

  const chocolateBox: ChocolateBox = {
    unbox: () => '🍫',
  };

  console.log(`Fruit box contains ${fruitBox.unbox()}`);
  console.log(`Chocolate box contains ${chocolateBox.unbox()}`);
};

export default exercise2;
