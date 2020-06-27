type Fruit = '🍉';
type Chocolate = '🍫';

interface Box<T> {
  unbox: () => T
}


const exercise2 = () => {
  const fruitBox: Box<Fruit> = {
    unbox: () => '🍉',
  };

  const chocolateBox: Box<Chocolate> = {
    unbox: () => '🍫',
  };

  console.log(`Fruit box contains ${fruitBox.unbox()}`);
  console.log(`Chocolate box contains ${chocolateBox.unbox()}`);
};

export default exercise2;
