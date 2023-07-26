const dog = {
    name: 'Чарли',
    type: 'Собака',
    makeSound() {
        return 'Гав-Гав';
    }
}

const bird = {
    name: 'Петя',
    type: 'Воробей',
    makeSound() {
        return 'Чик-чирик';
    }
}

function makeDomestic (isDomestic) {
    console.log(`${this.type} по имени ${this.name} говорит ${this.makeSound()}`);
    this.isDomestic = isDomestic;
    console.log(this);
    return this;
}

makeDomestic.call(bird, false);
makeDomestic.apply(bird, [false]);

const bindedAnimal = makeDomestic.bind(dog, true);
bindedAnimal();
