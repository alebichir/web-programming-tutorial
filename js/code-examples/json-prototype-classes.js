//JSON  ~ singletone (o singura instanta, JSON e un obiect)

// var person = {
//     name: 'matei',
//     job: 'trainer'
// };
//console person.name

var Factory = {
    name: 'Tesla',
    address: 'Olanda, Amsterdam, str. XXX 23',
    program: '9:00-18:00',
    getInfo: function(){
        return 'Welcome ' + this.name + '.' +
                'Our address: ' + this.address + '. ' +
                'Working hours: ' + this.program;

    },
    canIBuy: function(ownMoney){
        return ownMoney >= 10000;
    },
    service: function(myCar){
        //TODO fix myCar
        myCar.weels = 4;
        return myCar;
    }

};
Factory.getInfo();

Factory.name = 'Tesla INC';

Factory.getInfo();

Factory.canIBuy(9000); //false
Factory.canIBuy(11000); //true

var myCar ={owner: 'Matei', weels: 3};
console.info(myCar);
myCar = Factory.service(myCar);
console.info(myCar);



//Prototype
function Car(options){
    this.name = options.name;
    this.doors = options.doors;

}
Car.prototype.start = function(){
  return 'Starting....' + this.name;
};


function BMW(options){
    Car.call(this, options); //step 1
    this.color = options.color;
}
BMW.prototype = Object.create(Car.prototype); //step 2 - clonarea, copierea prototipului
BMW.prototype.constructor = BMW; //step 3 se apeleaza de fiecare data cand zic new

BMW.prototype.fly = function() {
    return '"I believe I can fly", says: ' + this.name;
};

var myCar = new Car({name:"Ford", doors: 4});
var andreisCar = new Car({name:"Dacia", doors: 5});
//myCar.name="BMV";
//andreisCar = 3;
var davidsCar = new BMW({name: 'BMW 5', color: 'blue', doors: 4});

myCar.start();
davidsCar.start();



//classes ES6
class Game {
    constructor(options) {
        this.name = options.name;
    }
    start(){
        return 'Starting ... ' + this.name;
    }
}

class Puzzle extends Game {
    constructor(options){
        super(options);
        this.pieces = options.pieces;
    }
    shuffle(){
        var s = 'Shuffling...' + this.pieces + ' pieces';
        console.info(s);
        return s;
    }
    start(){
        this.shuffle();
        super.start();
    }
}

var game = new Game({name: 'Transformers'});
var nfs = new Game({name: 'Need for speed'});
var n16 = new Puzzle({name: '15 numere si unul lipsa', pieces: 16});

nfs.start();
n16.start();
n16.shuffle();