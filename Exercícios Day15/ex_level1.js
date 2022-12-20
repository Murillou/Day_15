class Animal{
    constructor(nome, idade, color, patas){
        this.nome = nome
        this.idade = idade
        this.color = color
        this.patas = patas
    }
    getAnimalInformação(){
        const infos = `Olá, meu nome é ${this.nome} e minha cor é: ${this.color}, 
tenho ${this.idade} aninhos e ando sobre ${this.patas}`  
        return infos
    }
}


console.log('=====OUTRA QUESTÃO=====')

class Dog extends Animal{
    apresentacao(){
        console.log(`Olá, meu nome é ${this.nome} e minha cor é: ${this.color}, 
tenho ${this.idade} aninhos e ando sobre ${this.patas}` )
    }
}

const cachorro = new Dog('Juca', 2, 'Preto', '4 Patas')
console.log(cachorro)
console.log(cachorro.apresentacao())

class Cat extends Animal{
    apresentacao(){
        console.log(`Olá, meu nome é ${this.nome} e minha cor é: ${this.color}, 
tenho ${this.idade} aninhos e ando sobre ${this.patas}` )
    }
}

const gato = new Dog('Selenita', 2, 'Branca', '4 Patas')
console.log(gato)
console.log(gato.apresentacao())