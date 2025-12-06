class User{
    name: string;
    #age: number;
    //private age :number;
    //protected age :number;

    constructor(name:string, age:number) {
        this.name = name;
        this.#age = age;
    }

    public isAdult():boolean {
        return this.#age >= 20;
    } 
}

class PremiumUser extends User {
    rank: number = 1;

    public isAdult(): boolean {
        return true;
    }
}

const john = new User("John Smith", 15);
const hong = new PremiumUser("Hong gildong", 15);

console.log(john.isAdult())
console.log(hong.isAdult())
