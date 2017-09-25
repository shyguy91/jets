var Jet = function (color, size) {
    this.color = color;
    this.size = size;
  
    this.takeOff = function () {
      console.log('take off the clothes!');
    }
  }
  
  module.exports = Jet;