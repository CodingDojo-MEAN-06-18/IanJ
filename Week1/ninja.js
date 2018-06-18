var Ninja = function(name) {
    this.name = name;
    this.health = 100;
    var speed = 3;
    var strength = 3;

    this.sayName = function() {
        console.log("My ninja name is " + this.name + "!");
        return this;
    }

    this.showStats = function() {
        console.log("Name: " + this.name);
        console.log("Health: " + this.health);
        console.log("Speed: " + speed);
        console.log("Strength: " + strength);
        return this;
    }

    this.drinkSake = function() {
        this.health += 10;
        return this;
    }

    this.punch = function(ninja2) {
        if (!ninja2 instanceof Ninja) {
            console.log("Not a ninja");
            return null;
        }
        ninja.health -= 5;
        console.log(ninja2.name + " was punched by " + this.name + " and lost 5 health!");
        return this;
    }

    this.kick = function(ninja2) {
        if (!ninja2 instanceof Ninja) {
            console.log("Not a ninja");
            return null;
        }
        damage = strength * 15;
        console.log(damage);
        ninja.health -= damage;
        console.log(ninja2.name + " was kicked by " + this.name + " and lost " + damage + " health!");
        return this;
    }
}

var ninja = new Ninja("Calvin");
var ninja2 = new Ninja("Hobbes");
ninja.sayName();
ninja.showStats();
ninja.drinkSake();
ninja.punch(ninja2);
ninja.kick(ninja2);
