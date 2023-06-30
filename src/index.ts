class Hero {

    private _name: string;
    private _power: number;
    private _life: number;
    weapon: Weapon | undefined;

    constructor(name: string, power: number, life: number) {
        this._name = name;
        this._power = power;
        this._life = life;
    }

    public get name(): string {
        return this._name;
    }

    getpower(): number {
        return this._power;
    }

    getlife(): number {
        return this._life;
    }

    public set name(name: string) {
        this._name = name;
    }

    public set power(power: number) {
        this._power = power;
    }

    setlife(life: number) {
        this._life = life;
    }

    attack(opponent: Hero): void {
        this._life -= opponent._power;
    }

    isAlive(): boolean {
        return this._life > 0
    }


}
class Weapon {
    name: string;
    constructor(name: string) {
        this.name = name;
    }

}
const axe: Weapon = new Weapon("Axe");
const sword: Weapon = new Weapon("Sword");
const spear: Weapon = new Weapon("Spear");

class HeroAxe extends Hero {
    constructor(name: string, power: number, life: number) {
        super(name, power, life);
        this.weapon = axe;
    }
    attack(opponent: Hero): void {
        if (opponent instanceof HeroSword) {
            opponent.setlife(opponent.getlife() - this.getpower() * 2);
            
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
            opponent.setlife(opponent.getlife() - this.getpower() * 2);
            
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
            opponent.setlife(opponent.getlife() - this.getpower() * 2);
           
        } else {
            super.attack(opponent);
        }
    }
}

const hero1: HeroSword = new HeroSword("Jeanjean", 100, 1000);
const hero2: HeroSpear = new HeroSpear("Marceline", 100, 1000);
const hero3: HeroAxe = new HeroAxe("Dédé", 100, 1000);

function TapageDeGueule(hero1: Hero, hero2: Hero) {
    while (hero1.isAlive() && hero2.isAlive()) {

        hero1.attack(hero2);
        hero2.attack(hero1);
    }
    if (!hero1.isAlive() && !hero2.isAlive()) {
        console.log("Egalité bande de pingouins");
    } else if (hero1.isAlive()) {
        console.log(`${hero1.name} est le grand et félicitable gagnant`);
    } else {
        console.log(`C'est ${hero2.name} qui a gagné le golo golo`);
    };
};

TapageDeGueule(hero1, hero2); 


