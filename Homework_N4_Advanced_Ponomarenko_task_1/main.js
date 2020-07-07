
class Worker {
    status = 'worker'
    constructor(firstName, secondName, rate, days) {
        this.firstName = firstName;
        this.secondName = secondName;
        this.rate = rate;
        this.days = days;
        
        }
        salary() {
            return this.rate * this.days;

    }
}
const worker1 = new Worker('Taras', 'Ponomarenko', 100, 22)
console.log(worker1.status)
console.log(worker1.firstName)
console.log(worker1.secondName)
console.log(worker1.rate)
console.log(worker1.days)
console.log(worker1.salary())
