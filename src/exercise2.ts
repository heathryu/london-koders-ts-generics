type Fruit = '🍉'
type Chocolate = '🍫'

// Exercise: Refactor the code below to define a more reusable interface
interface FruitBox {
  content: Fruit
}

interface ChocolateBox {
  content: Chocolate
}

const exercise2 = () => {

  // Exercise: Update the type annotations to utilise the refactored interface definition
  const fruitBox: FruitBox = { content: '🍉' };
  const chocolateBox: ChocolateBox = { content: '🍫' };

  console.log(`Fruit box contains ${fruitBox.content}`)
  console.log(`Chocolate box contains ${chocolateBox.content}`)
};

export default exercise2;
