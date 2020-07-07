function CofeeMashin(){}

CofeeMashin.prototype.on= function(coffee){
    this.coffee=coffee
    console.log('coock coffee', this.coffee)
}
CofeeMashin.prototype.off=function(cup){
    this.cup=cup
    console.log('pour coffee', this.cup)
}

function DripCoffeeMaker(coffee, cup){
    this.coffee=coffee
    this.cup=cup
}

DripCoffeeMaker.prototype=CofeeMashin.prototype

DripCoffeeMaker.prototype.keepWarm= function(bottle){
    this.bottle=bottle
    console.log('keep warm', this.bottle)
}

const myDripCoffeeMaker = new DripCoffeeMaker()

myDripCoffeeMaker.on('arabica')
myDripCoffeeMaker.off('glass')
myDripCoffeeMaker.keepWarm('termos')


function CapsuleCoffeeMaker(coffee, cup, bottle){
    this.coffee=coffee
    this.cup=cup
    this.bottle=bottle
}

CapsuleCoffeeMaker.prototype=DripCoffeeMaker.prototype

CapsuleCoffeeMaker.prototype.makeStrongCoffee = function(name){
    this.name=name
    console.log('made espresso', this.name)
}

const myCapsuleCoffeeMaker =  new CapsuleCoffeeMaker()

myCapsuleCoffeeMaker.on('arabica')
myCapsuleCoffeeMaker.off('glass')
myCapsuleCoffeeMaker.keepWarm('termos')
myCapsuleCoffeeMaker.makeStrongCoffee('espresso')

function EspressoCoffeeMaker(coffee, cup, name){
    this.coffee=coffee
    this.cup=cup
    this.name=name
}

EspressoCoffeeMaker.prototype=CapsuleCoffeeMaker.prototype

delete EspressoCoffeeMaker.keepWarm
// delete CapsuleCoffeeMaker.prototype.keepWarm

EspressoCoffeeMaker.prototype.makeLate = function(addMilk){
    this.addMilk=addMilk
    console.log('make Late', this.addMilk)
}

const myEspressoCoffeeMaker = new EspressoCoffeeMaker()

myEspressoCoffeeMaker.on('mokka')
myEspressoCoffeeMaker.off('porcelain')
// myEspressoCoffeeMaker.keepWarm('neVazno')
myEspressoCoffeeMaker.makeStrongCoffee('espresso')
myEspressoCoffeeMaker.makeLate('milk')





let watchKeyCapsuleCoffeeMaker=[]
let watchKeyEspressoCoffeeMaker=[]
for(let key in myCapsuleCoffeeMaker){
    watchKeyCapsuleCoffeeMaker[key]=key
}
for(let key in myEspressoCoffeeMaker){
    watchKeyEspressoCoffeeMaker[key]=key
}
console.log(watchKeyCapsuleCoffeeMaker)
console.log(watchKeyEspressoCoffeeMaker)