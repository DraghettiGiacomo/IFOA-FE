
const Persona = function (nome, cognome){
    this.nome = nome
    this.cognome = cognome
    this.getPippo = function (){
        console.log(nome + ' ' + cognome);
    }
}

const persona1 = new Persona('Chiara','Andreasi')  
const persona2 = new Persona('Gabriele','Maggi')
const persona3 = new Persona('Giacomo','Draghetti')
const persona4 = new Persona('Agnese','Draghetti')
const persona5 = new Persona('Giovanni','Galloni')
const persona6 = new Persona('Alessandra','Pellizzaro')
const persona7 = new Persona('Gattino','Briscola')

const arraynomi = [
    persona1.getPippo() 
]

/* ---------------------- ********************************* ---------------------- */

const NamadPerson = function(nome, cognome){
    this.nome = nome
    this.cognome = cognome
    this.greet = function (){
        return `Hello, my name is ${nome}, and my surname is ${cognome}`
    }
}

const p1 = new NamadPerson('Giuseppino', 'Bellinzona')

console.log(p1.greet());


/* ---------------------- **************** CONSTRUTTO CLASS ***************** ---------------------- */
/* permette di fare la stessa funzione solo che come linguaggio è più simile a java, php, C#*/

class namePerson {
    constructor(name, surname){
        this.name = name
        this.surname = surname
    }
    greet(){
        return `Hello, my name is ${this.name}, and my surname is ${this.surname}`
    }
}

const p2 = new namePerson('Giacomo', 'Draghetti')
console.log(p2.greet());




class programmatore extends namePerson{
    constructor(name, persona){
        super(nome, cognome)    //--------->> serve per richiamare il constructor della calss nameperson
    }
}


/* --------------------- ****************** ESEMPIO ****************** --------------------- */

class casaCostruttrice {
    constructor(nome, sede){
        this.nome = nome;
        this.sede = sede;
        this._capitale = 100000;  //------>>
    }
    getNome(){
        console.log(this.nome);
    }
    getSede(){
        console.log(this.sede);
    }
    setCapitale(){
        this._capitale = valore  //------>>
    }

    brochure(){
        console.log(`Siamo ${this.nome} e diamo di ${this.sede}`);
    }
}

class Concessionaria extends casaCostruttrice {
    constructor(nome, sede, numerodipendenti){
        super(nome, sede);
        this.numerodipendenti = numerodipendenti;
    }
    getNome(){
        console.log(this.nome + 'concessionaria');
    }
    vendita(value){
        this.setCapitale(this._capitale + value)
    }
    brochureConcessionaria(){
        super.brochure()
        console.log('Questa è la concessionaria');
    }
    getDipendenti(){
        console.log(this.numerodipendenti);
    }
}

class Suv extends Concessionaria {
    constructor(nome, sede, numerodipendenti, modello, colore, prezzo){
        super(nome, sede, numerodipendenti);
        this.modello = modello
        this.colore = colore
        this.prezzo = prezzo 
    }

    getProvenienza(){
        console.log(`Arrivo dalla sede di ${this.sede} di ${this.nome}`);
    }

    getColore(){
        console.log(this.colore);
    }

    getPrezzo(){
        console.log(this.prezzo);
    }

    getModello(){
        console.log(this.modello);
    }
}


macchina = new Suv('Range Rover', 'Roma', 10, 'Evoque', 'Rosso', 50000)
macchina.getProvenienza();
macchina.getColore();
macchina.getModello();
macchina.getPrezzo();
macchina.getDipendenti();
macchina.brochure();
macchina.brochureConcessionaria();

macchina2 = new Suv('Ferrari', 'Milano', 50, 'SUV', 'Rosso', 50000)
macchina2.getProvenienza();
macchina2.getColore();
macchina2.getModello();
macchina2.getPrezzo();
macchina2.getDipendenti();
macchina2.brochure();
macchina2.brochureConcessionaria();







