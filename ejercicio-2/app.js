const fs = require('fs');
const csv = require('csv-parser');

fs.createReadStream('2abril_participants_94849208356.csv')
  .pipe(csv())
  .on('2abril_participants_94849208356', (row) => {
    console.log(row);
  })
  .on('end', () => {
    console.log('CSV file successfully processed');
  });