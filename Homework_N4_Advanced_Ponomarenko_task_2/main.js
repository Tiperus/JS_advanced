class MyString{
    constructor(string1, string2, string3){
        this.string1=string1;
        this.string2=string2;
        this.string3=string3
        
    }
    revers(){
        return this.string1.split('').reverse().join('')
    }
    ucFirst(){
        return this.string2.toLowerCase().charAt(0).toUpperCase() + this.string2.slice(1)
    }
    ucWords(){
        return this.string3.split(' ').map(function(string){
          return   string.charAt(0).toUpperCase()+string.slice(1)
        }).join(' ')

        // return this.string3.toLowerCase().charAt(0).toUpperCase()+ this.string3.slice(1,(this.string3.indexOf(' ')+1))+this.string3.charAt((this.string3.indexOf(' ')+1)).toUpperCase()+ this.string3.slice(1,(this.string3.indexOf(' ')+(this.string3.indexOf(' '))))+this.string3.charAt(0).toUpperCase()
    }
}
let string= new  MyString('Taras', 'arsenal', 'arsenal arsenal arsenal')

console.log(string.revers())
console.log(string.ucFirst())
console.log(string.ucWords())