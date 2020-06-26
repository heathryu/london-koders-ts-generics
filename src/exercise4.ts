import fs from 'fs'

interface Koder {
  name: string;
  employer: string;
  yearsSpentInLondon: number;
  favouriteAnimal: string;
}

// Exercise: Rewrite this class to be reusable for mapping data from a CSV file
// into any data type. - Hint: Abstract class will be your friend here - you'll need
// a child class that implements the row mapping logic for each data type.
class KodersCsvReader {
  data: Koder[] = [];

  constructor(private filename: string) {}

  read = (): void => {
    this.data = fs.readFileSync(this.filename, { encoding: 'utf-8'})
    .split('\n')
    .filter(line => line.trim())
    .map(line => line.split(','))
    .map(this.mapRow);
  }

  // Hint: this will take care of 
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

const exercise4 = () => {
  
  const kodersReader = new KodersCsvReader('./koders.csv');

  kodersReader.read();

  console.log(kodersReader.data);


  // Exercise: Create a new class for reading FoodAccountBook data from CSV
  // and finish the remaining code below to test your work

  // const foodAcountBookReader = new ???('./foodAccountBook.csv');

  // foodAcountBookReader.read();
  // console.log(foodAcountBookReader.data);
};

export default exercise4;
