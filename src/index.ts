class Hero {

    private _name: string;
    private _power: number;
    private _life: number;
    weapon!: Weapon;

    constructor(name: string, power: number, life: number) {
        this._name = name;
        this._power = power;
        this._life = life;
    }

    getName(): string {
        return this._name;
    }

    getPower(): number {
        return this._power;
    }

    getLife(): number {
        return this._life;
    }

    setName(name: string) {
        this._name = name;
    }

    setPower(power: number) {
        this._power = power;
    }

    setLife(life: number) {
        this._life = life;
    }

    attack(opponent: Hero): void {
        if (typeof this.weapon == undefined) {
            opponent._life -= this._power;
        } else {
            opponent._life -= (this._power + this.weapon.damage);
        }
    }

    isAlive(): boolean {
        return this._life > 0
    }


}
class Weapon {
    name: string;
    damage: number;
    constructor(name: string, damage: number) {
        this.name = name;
        this.damage = damage;
    }

}
const axe: Weapon = new Weapon("Axe", 110);
const sword: Weapon = new Weapon("Sword", 100);
const spear: Weapon = new Weapon("Spear", 90);

class HeroAxe extends Hero {
    constructor(name: string, power: number, life: number) {
        super(name, power, life);
        this.weapon = axe;
    }
    attack(opponent: Hero): void {
        if (opponent instanceof HeroSword) {
            opponent.setLife(opponent.getLife() - this.getPower() * 2);

        } else {
            super.attack(opponent);
        }
    }

}
class HeroSword extends Hero {
    constructor(name: string, power: number, life: number) {
        super(name, power, life);
        this.weapon = sword;
    }
    attack(opponent: Hero): void {
        if (opponent instanceof HeroSpear) {
            opponent.setLife(opponent.getLife() - this.getPower() * 2);

        } else {
            super.attack(opponent);
        }
    }

}
class HeroSpear extends Hero {
    constructor(name: string, power: number, life: number) {
        super(name, power, life);
        this.weapon = spear;
    }
    attack(opponent: Hero): void {
        if (opponent instanceof HeroAxe) {
            opponent.setLife(opponent.getLife() - this.getPower() * 2);

        } else {
            super.attack(opponent);
        }
    }
}

const hero1: HeroAxe = new HeroAxe("Dédé", 100, 1000);
const hero2: HeroSword = new HeroSword("Jeanjean", 100, 1000);
const hero3: HeroSpear = new HeroSpear("Marceline", 100, 1000);
let i = 1;

function TapageDeGueule(hero1: Hero, hero2: Hero) {
    while (hero1.isAlive() && hero2.isAlive()) {
        console.log("round", i);
        hero1.attack(hero2);
        hero2.attack(hero1);
        i++;
        console.log(hero1);
        console.log(hero2);
    }
    if (!hero1.isAlive() && !hero2.isAlive()) {
        console.log("Egalité bande de pingouins");
    } else if (hero1.isAlive()) {
        console.log(`${hero1.getName()} est le grand et félicitable gagnant`);
    } else {
        console.log(`C'est ${hero2.getName()} qui a gagné le golo golo`);
    };
};

TapageDeGueule(hero3, hero2);