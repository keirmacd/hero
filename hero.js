var Hero = function(name, health, favfood){
  this.health = health,
  this.name = name,
  this.favfood = favfood,
  
  }
hero.prototype = function() {
talk: function(){
    system.log('I AM ' + this.name);
};
}
module.exports = Hero;