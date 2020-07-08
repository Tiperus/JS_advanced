const myShop =(function shop(){
let balans=1000;
let products = {
    bread:{
        price: 10,
        count: 100
    },
    milk:{
        price: 20,
        count: 50
    },
    water:{
        price:5,
        count:30
    }
    
    }
    function sell(name, count){
        products[name].count-=count;
        balans+=count*products[name].price;
    }
    function storage(name){
        return products[name].count
    }
    function cassa(){
        return balans 
    }

return{
    sellOperation: sell,
    storage: storage,
    cash: cassa

}
}());


console.log(myShop.cash())
console.log(myShop.storage('bread'))

myShop.sellOperation("bread",5)

console.log(myShop.cash())
console.log(myShop.storage('bread'))


myShop.sellOperation("milk",20)

console.log(myShop.cash())
console.log(myShop.storage('milk'))