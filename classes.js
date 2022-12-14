class Human {

    name = ""
    grade = 100

    constructor(name){
        this.name = name
    }

    sayHi() {
        return `my name is ${this.name}!`
    }
}

class Teacher extends Human{
    currentlyTeaching = "yes"
    sayHi() {
        return `Hi, I'm professor ${this.name}`
    }
}

class Student extends Human{
    grade = 100
}

let student1 = new Student("Bobby")
let teacher = new Teacher("Jennifer")

console.log(teacher.name)
console.log(teacher.sayHi())
console.log(student1.sayHi())