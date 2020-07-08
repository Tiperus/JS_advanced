import{
    sell,
    storage,
    cassa,
    newProduct
} from './math.js'


console.log(cassa())
console.log(storage('bread'))


sell("bread",5)

console.log(cassa())
console.log(storage('bread'))


sell("milk",20)

console.log(cassa())
console.log(storage('milk'))

newProduct('milk',30)

console.log(cassa())
console.log(storage('milk'))