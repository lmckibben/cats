const assert = require('chai').assert;
const breedDetails = require('../syncBreeds');

describe('#breedDetails', () => {
  it('returns breed details for the Bombay breed', () => {
    const bombay = breedDetails('Bombay');
    console.log(bombay);
  });

  it('returns breed details for the Balinese breed', () => {
    const balinese = breedDetails('Balinese');
    console.log(balinese);
  });

  it('returns no breed details for the Tomcat breed', () => {
    const tomcat = breedDetails('Tomcat');
    console.log(tomcat);
  });
});