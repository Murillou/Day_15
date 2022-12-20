
// sintax
class NomeClasse{

}

// instanciação de classe
class Personagem{

}
const personagem = new Personagem()
console.log(personagem)

// usando constructor 

class PersonagemConstructor{
    constructor(primeiroNome, segundoNome){ // podemos adicionar varias outras informações a nossa classe, como idade, país, cidade etc 
        this.primeiroNome = primeiroNome // também podemos definir valores padrão aos parametros com o sinal de '='
        this.segundoNome = segundoNome
    }
}
const personNoValue = new PersonagemConstructor() // exemplo sem valor nos parametros
const person = new PersonagemConstructor('Murillo', 'Vinícius') // devemos passar o valor aqui <<
console.log(personNoValue) 
console.log(person) 
// abaixo veremos uns exemplo de que podemos reutilizar uma classe para fazer vários objetos
const personagem1 = new PersonagemConstructor('Letycia', 'Lins')
const personagem2 = new PersonagemConstructor('Gabriel', 'William')
const personagem3 = new PersonagemConstructor('Karla', 'Renata')

console.log(personagem1)
console.log(personagem2)
console.log(personagem3)

// conseguimos utilizar metodos dentro da classe

class PersonConstructor{
    constructor(primeiroNome, segundoNome, idade, país, cidade){
        this.primeiroNome = primeiroNome
        this.segundoNome = segundoNome
        this.idade = idade
        this.país = país
        this.cidade = cidade
    }
    getNomeCompleto(){  // função de nome completo
        const nomeCompleto = this.primeiroNome + ' ' + this.segundoNome
        return nomeCompleto
    }
}

const pessoa = new PersonConstructor('Murillo', 'Vinícius', 20, 'Brasil', 'João Pessoa')
const pessoa1 = new PersonConstructor('Letycia', 'Lins', 18, 'Brasil', 'João Pessoa')
console.log(pessoa.getNomeCompleto())
console.log(pessoa1.getNomeCompleto())

// podemos settar valores iniciais

class PersonConstructorOne{
    constructor(primeiroNome, segundoNome, idade, país, cidade){
        this.primeiroNome = primeiroNome
        this.segundoNome = segundoNome
        this.idade = idade
        this.país = país
        this.cidade = cidade
        this.pontuacao = 0 // valor inicial de forma regular
        this.habilidades = [] // valor inicial de forma regular
    }
    getNomeCompleto(){  // função de nome completo
        const nomeCompleto = this.primeiroNome + ' ' + this.segundoNome
        return nomeCompleto
    }
    getPontuacao(){
        return this.pontuacao
    }
    getHabilidades(){
        return this.habilidades
    } 
    set setPontuacao(pontuacao){
        this.pontuacao += pontuacao
    }
    set setHabilidades(habilidade){
        this.habilidades.push(habilidade)
    }

    static habilidadeFavorita(){ // exemplo de criação de metodo static
        const habilidade = ['WordPress', 'PHP', 'HTML', 'CSS', 'JavaScript']
        const indice = Math.floor(Math.random() * habilidade.length)
        return habilidade[indice]
    }
}

const pessoaOne = new PersonConstructorOne('Murillo', 'Vinícius', 20, 'Brasil', 'João Pessoa')
const pessoaTwo = new PersonConstructorOne('Letycia', 'Lins', 18, 'Brasil', 'João Pessoa')


console.log(pessoaOne.pontuacao)
console.log(pessoaTwo.pontuacao)
console.log(pessoaOne.habilidades)
console.log(pessoaTwo.habilidades)
// utilizando o get
console.log(pessoaOne.getPontuacao())
console.log(pessoaTwo.getPontuacao())
console.log(pessoaOne.getHabilidades())
console.log(pessoaTwo.getHabilidades())
// utilizando o set podemos settar valores 
pessoaOne.setPontuacao = 1
pessoaOne.setHabilidades = 'CSS'
pessoaOne.setHabilidades = 'HTML'
pessoaOne.setHabilidades = 'JS'
 
pessoaTwo.setPontuacao = 2
pessoaTwo.setHabilidades = 'Java'
pessoaTwo.setHabilidades = 'Pyhon'
pessoaTwo.setHabilidades = 'MongoDB'

console.log(pessoaOne.pontuacao)
console.log(pessoaTwo.pontuacao)
console.log(pessoaOne.habilidades)
console.log(pessoaTwo.habilidades)


// metodo static, são chamados com a PROPRIA CLASSE

console.log(/* como pode ver, chama diretamente com a classe*/PersonConstructorOne.habilidadeFavorita())

// podemos criar classes filhos para reduzir o tamanho do código, sintax:

/*class NomeDoFilho extends NomeDoPai{

}*/

class Estudante extends PersonConstructorOne{
    apresentacao() {
        console.log('Eu sou filho da class PersonConstuctorOne')
    }
}

const filho1 = new Estudante('Murillo', 'Vinícius', 20, 'Brasil', 'Paraíba')
console.log(filho1.apresentacao())
console.log(filho1.getNomeCompleto())

