var assert = require('assert');
var hero = require('../hero')
var food = require('../food')

describe('Hero', function(){
  hero = new Hero("Keir", 100, "Pizza");
  it('Should Have name',function(){
    assert.equal("Keir", Hero.name)
  });
  it('Should have favfood', function(){
    assert.equal("Pizza", )
  })
});