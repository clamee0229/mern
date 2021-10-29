class Ninja {
    constructor(nameInput, health){
        this.nameInput = nameInput
        this.health = health
        this.speed = 3
        this.strength = 3
    }
    sayName(){
        console.log(this.nameInput)
    }
    showStats(){
        console.log('Name:', this.nameInput, ' Strength:', this.strength, ' Speed:', this.speed, ' Health:', this.health)
    }
    drinkSake(){
        this.health += 10
    }
}

class Sensei extends Ninja{
    constructor(nameInput){
        super(nameInput, 210)
        this.speed = 10
        this.strength = 10
        this.wisdom = 10
    }
    speakWisdom(){
        console.log('What one programmer can do in a month, two programmers can do in two months')
    }
}

const ninja1 = new Ninja('Hyabusa', 20)
const superSensei = new Sensei('Master Splinter')
superSensei.speakWisdom();
superSensei.showStats();

