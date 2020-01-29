class BaseCharacter {
    constructor(name, hp, dmg) {
        this.name = name
        this.hp = hp
        this.dmg = dmg
    }

    attak() {
        console.log( this.name + " is attacking with " + this.dmg + " damage point" );
    }

    getHP() {
        console.log( this.name + " has " + this.hp + " healt points"  )
    }
}

class Soldier extends BaseCharacter {
    constructor() {
        super("Soldier", 100, 25)
    }
}

class Orc extends BaseCharacter {
    constructor() {
        super("Orc", 200, 35)
    }
}

class Combat {
    constructor( pj1, pj2 ) {
        this.pj1 = pj1
        this.pj2 = pj2
    }

    fight() {
        while( this.pj1.hp > 0 && this.pj2.hp > 0 ) {
            let whoAttack = Math.floor(Math.random() * 2) + 1
            if (whoAttack == 1 ) {
                this.pj1.attak()
                this.pj2.hp-= this.pj1.dmg
                this.pj2.getHP()

            } else {
                this.pj2.attak()
                this.pj1.hp-= this.pj2.dmg
                this.pj1.getHP()
            }
        }
        if (this.pj1.hp > 0) {
            console.log( this.pj1.name + " win" )
        } else {
            console.log( this.pj2.name + " win" )
        }
    }

}


const orc = new Orc()
const soldier = new Soldier()

const combat = new Combat(orc, soldier)

combat.fight()

// Math.floor(Math.random() * 2) + 1;