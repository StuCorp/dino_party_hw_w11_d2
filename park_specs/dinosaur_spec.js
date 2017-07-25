var assert = require('assert');
var Dinosaur = require('../Dinosaur.js');
var Park = require('../jurassic_park.js');


describe('Dinosaur', function(){
  var dinosaur;

beforeEach(function(){
  dinosaur = new Dinosaur("Horndog", 30); 

});

it('should have a type', function(){
  assert.strictEqual(dinosaur.type, "Horndog"); 
});

it('should have a number of offspring per year', function(){
  assert.strictEqual(dinosaur.birthrate, 30);
});


});