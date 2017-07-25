var assert = require('assert');
var Dinosaur = require('../Dinosaur.js');
var Park = require('../jurassic_park.js');


describe('Park', function(){

  var park;
  var dinosaur;

  beforeEach(function() {
    park = new Park();
    dinosaur = new Dinosaur("SexySoreHorse", 5);
    dinosaur2 = new Dinosaur("Horndog", 30);
    dinosaur3 = new Dinosaur("Sperm Raptor", 1); 
  });


  // it("should have an enclosure", function(){
  //   assert.strictEqual(park.enclosure, []);
  // });
  it("enclosure should start empty", function(){
    assert.strictEqual(park.enclosure.length, 0); 
  });

  it("should be able to add dinosaur", function(){
    park.add(dinosaur); 
    assert.strictEqual(park.enclosure.length, 1);
  });

  it("should be able to remove all dinosaurs of a particular type", function(){
    park.add(dinosaur); 
    park.add(dinosaur);  
    park.add(dinosaur2); 
    park.add(dinosaur2); 
    park.add(dinosaur2); 
    park.extinctThem("Horndog");
    assert.strictEqual(park.enclosure.length, 2); 
  });


  it("should get all the dinosaurs with an offspring count of more than 2", function(){
    park.add(dinosaur); 
    park.add(dinosaur);  
    park.add(dinosaur2); 
    park.add(dinosaur2); 
    park.add(dinosaur2); 
    park.add(dinosaur3); 
    park.add(dinosaur3); 
    assert.strictEqual(park.enclosure.length, 5); 
  });

  it("should be able to calculate number of dinosaurs after year one, starting with 1 dinosaur", function(){
    park.add(dinosaur); 
    assert.strictEqual(park.rollCall(1), 6); 
  });
  it("should be able to calculate number of dinosaurs after year two, starting with 1 dinosaur", function(){
    park.add(dinosaur); 
    assert.strictEqual(park.rollCall(2), 11); 
  });
  it("should be able to calculate number of dinosaurs after year two, starting with 2 dinosaurs", function(){
    park.add(dinosaur); 
    park.add(dinosaur2);
    assert.strictEqual(park.rollCall(2), 72); 
  });


  it("babies having babies--should be able to calculate number of dinosaurs after year one, starting with 1 dinosaur", function(){
    park.add(dinosaur); 
    assert.strictEqual(park.rollCallBabies(1), 6); 
  });
  it("babies having babies--should be able to calculate number of dinosaurs after year two, starting with 1 dinosaur", function(){
    park.add(dinosaur); 
    assert.strictEqual(park.rollCallBabies(2), 36); 
  });

  it("babies having babies--should be able to calculate number of dinosaurs after year two, starting with 2 dinosaurs", function(){
    park.add(dinosaur); 
    park.add(dinosaur2);
    assert.strictEqual(park.rollCallBabies(2), 997);
  });



}); 