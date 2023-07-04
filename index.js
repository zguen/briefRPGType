"use strict";
class Hero {
    constructor(name, power, life) {
        this._name = name;
        this._power = power;
        this._life = life;
    }
    getname() {
        return this._name;
    }
    getpower() {
        return this._power;
    }
    getlife() {
        return this._life;
    }
    setname(name) {
        this._name = name;
    }
    setpower(power) {
        this._power = power;
    }
    setlife(life) {
        this._life = life;
    }
    attack(opponent) {
        if (typeof this.weapon == undefined) {
            opponent._life -= this._power;
        }
        else {
            opponent._life = this._power + this.weapon.damage;
        }
    }
    isAlive() {
        return this._life > 0;
    }
}
class Weapon {
    constructor(name, damage) {
        this.name = name;
        this.damage = damage;
    }
}
const axe = new Weapon("Axe", 110);
const sword = new Weapon("Sword", 100);
const spear = new Weapon("Spear", 90);
class HeroAxe extends Hero {
    constructor(name, power, life) {
        super(name, power, life);
        this.weapon = axe;
    }
    attack(opponent) {
        if (opponent instanceof HeroSword) {
            opponent.setlife(opponent.getlife() - this.getpower() * 2);
        }
        else {
            super.attack(opponent);
        }
    }
}
class HeroSword extends Hero {
    constructor(name, power, life) {
        super(name, power, life);
        this.weapon = sword;
    }
    attack(opponent) {
        if (opponent instanceof HeroSpear) {
            opponent.setlife(opponent.getlife() - this.getpower() * 2);
        }
        else {
            super.attack(opponent);
        }
    }
}
class HeroSpear extends Hero {
    constructor(name, power, life) {
        super(name, power, life);
        this.weapon = spear;
    }
    attack(opponent) {
        if (opponent instanceof HeroAxe) {
            opponent.setlife(opponent.getlife() - this.getpower() * 2);
        }
        else {
            super.attack(opponent);
        }
    }
}
const hero1 = new HeroSword("Jeanjean", 100, 1000);
const hero2 = new HeroSpear("Marceline", 100, 1000);
const hero3 = new HeroAxe("Dédé", 100, 1000);
function TapageDeGueule(hero1, hero2) {
    while (hero1.isAlive() && hero2.isAlive()) {
        hero1.attack(hero2);
        hero2.attack(hero1);
    }
    if (!hero1.isAlive() && !hero2.isAlive()) {
        console.log("Egalité bande de pingouins");
    }
    else if (hero1.isAlive()) {
        console.log(`${hero1.getname()} est le grand et félicitable gagnant`);
    }
    else {
        console.log(`C'est ${hero2.getname()} qui a gagné le golo golo`);
    }
    ;
}
;
TapageDeGueule(hero1, hero3);
console.log(hero1);
