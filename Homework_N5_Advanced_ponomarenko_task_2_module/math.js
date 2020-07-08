
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
export function sell(name, count){
            products[name].count-=count;
            balans+=count*products[name].price;
        }
export function storage(name){
            return products[name].count
        }
export function cassa(){
            return balans 
        }
export function newProduct(name, count){
            products[name].count+=count;
            balans-=count*products[name].price;
        }
    
 