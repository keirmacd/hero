var Hero = function(name, health, favfood, talk){
  this.health = health,
  this.name = name,
  this.favfood = favfood,
  this.talk = function(){
    system.log('I AM ' + this.name);
  }
}
module.exports = Hero;