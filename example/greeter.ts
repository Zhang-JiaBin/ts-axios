class User {
    fullName: string
    firstName: string
    lastName: string

    constructor (firstName: string, lastName: string) {
        this.firstName = firstName
        this.lastName = lastName
        this.fullName = firstName + ' ' + lastName
    } 
}

interface Person {
    firstName: String
    lastName: string
}

function greeeter(person: Person) {
    return 'Hello ' + person.firstName + ' ' + person.lastName;
}
;
// var user: Person = {
//     firstName: 'Yee',
//     lastName: 'Huang'
// };

let user = new User('Yee', 'Huang213')
console.log(greeeter(user));