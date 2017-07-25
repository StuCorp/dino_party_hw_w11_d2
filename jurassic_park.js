
var Park = function(){
  this.enclosure = []; 
};

Park.prototype = {
  add: function(dinosaur){
    if(dinosaur.birthrate > 2){
      this.enclosure.push(dinosaur);
    }
  },

  extinctThem:  function(type){
    var yourNumbersUp = []; 
    for(dinosaur of this.enclosure){
      if(dinosaur.type === type){
        yourNumbersUp += this.enclosure.indexOf(dinosaur);
      }
    }

    for(index of yourNumbersUp){
      this.enclosure.splice(index, 1); 
    }
  },

  rollCall: function(year){
    var totalSaurus = 0;
    for(dinosaur of this.enclosure){
      totalSaurus += dinosaur.birthrate * year;
      totalSaurus++; 
    }
    return totalSaurus; 
  },

  rollCallBabies: function(year){
    for (var i = 0; i < year; i++){ 
    var extraEnclosure = [];
      for(dinosaur of this.enclosure){
        for(var j = 0; j < dinosaur.birthrate; j++){
          extraEnclosure.push(dinosaur); 
        }
      }

      for(dinosaur of extraEnclosure){
        this.add(dinosaur); 
      }

    }

    return this.enclosure.length; 
  }

};

module.exports = Park; 