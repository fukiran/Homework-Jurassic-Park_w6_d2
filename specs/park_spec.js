const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {
  let park;
  let dinosaur1;
  let dinosaur2;
  let dinosaur3;
  let dinosaur4;
  let collectionOfDinosaurs;
  beforeEach(function () {
    
    dinosaur = new Dinosaur('t-rex', 'carnivore', 50);
    dinosaur1 = new Dinosaur('z-rex', 'carnivore', 53);
    dinosaur2 = new Dinosaur('x-rex', 'carnivore', 57);
    dinosaur3 = new Dinosaur('c-rex', 'herbivore', 150);
    dinosaur4 = new Dinosaur('v-rex', 'herbivore', 151);

    collectionOfDinosaurs = [dinosaur, dinosaur1, dinosaur2]
    park = new Park('JPark', 20, collectionOfDinosaurs);
  });

  it('should have a name', function() {
    const actual = park.name;
    assert.strictEqual(actual,'JPark')
  });

  it('should have a ticket price', function() {
    const actual = park.ticketPrice;
    assert.strictEqual(actual, 20)

  });
    

  it('should have a collection of dinosaurs', function() {
    const actual = park.collectionOfDinosaurs;
    assert.deepStrictEqual(actual,[dinosaur, dinosaur1, dinosaur2])
  });


  it('should be able to add a dinosaur to its collection', function() {
    park.addDinosaur(dinosaur3);
    const actual = [dinosaur, dinosaur1, dinosaur2, dinosaur3];
    assert.deepStrictEqual(actual, park.collectionOfDinosaurs)
  });
    

  it('should be able to remove a dinosaur from its collection', function() {
    park.removeDinosaur(dinosaur);
    const actual = [dinosaur1, dinosaur2];
    assert.deepStrictEqual(actual, park.collectionOfDinosaurs)
    
  });


  it('should be able to find the dinosaur that attracts the most visitors', function(){
    assert.strictEqual(dinosaur2,park.mostVisitors())
    

  });


  it('should be able to find all dinosaurs of a particular species');

  it('should be able to calculate the total number of visitors per day');

  it('should be able to calculate the total number of visitors per year');

  it('should be able to calculate total revenue for one year');

});
