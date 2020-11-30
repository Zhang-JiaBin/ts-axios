var User = /** @class */ (function () {
    function User(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.fullName = firstName + ' ' + lastName;
    }
    return User;
}());
function greeeter(person) {
    return 'Hello ' + person.firstName + ' ' + person.lastName;
}
;
// var user: Person = {
//     firstName: 'Yee',
//     lastName: 'Huang'
// };
var user = new User('Yee', 'Huang213');
console.log(greeeter(user));
