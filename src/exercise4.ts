import fs from 'fs'

interface Koder {
  name: string;
  employer: string;
  yearsSpentInLondon: number;
  favouriteAnimal: string;
}

abstract class CsvReader<T> {
  data: T[] = [];

  constructor(private filename: string) {}

  read = (): void => {
    this.data = fs.readFileSync(this.filename, { encoding: 'utf-8'})
    .split('\n')
    .filter(line => line.trim())
    .map(line => line.split(','))
    .map(this.mapRow);
  }
  
  protected abstract mapRow(row: string[]): T
}

class KodersCsvReader extends CsvReader<Koder> {

  mapRow(row: string[]): Koder {
     return {
      name: row[0],
      employer: row[1],
      yearsSpentInLondon: parseInt(row[2]),
      favouriteAnimal: row[3]
    }
  }
}

interface FoodAccountBookRecord {
  food: string;
  from: string;
  to: string;
}

class FoodAccountBookReaderCsvReader extends CsvReader<FoodAccountBookRecord> {

  mapRow(row: string[]) {
    return {
      food: row[0],
      from: row[1],
      to: row[2]
    }
  }
}

const exercise4 = () => {
  const kodersReader = new KodersCsvReader('./koders.csv');

  kodersReader.read();

  console.log(kodersReader.data);

  const foodAccountBookReader = new FoodAccountBookReaderCsvReader('./foodAccountBook.csv');

  foodAccountBookReader.read();
  console.log(foodAccountBookReader.data);
};

export default exercise4;
