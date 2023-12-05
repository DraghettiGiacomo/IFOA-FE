class User {
    constructor(firstName, lastName, age, location){
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
        this.location = location
    }

    confronto(user){
        if(this.age > user.age){
            console.log(`${this.firstName} è più vecchia/o di ${user.firstName}`);
        } else if(this.age < user.age){
            console.log(`${user.firstName} è più vecchia/o di ${this.firstName}`);
        } else {
            console.log(`${this.firstName} e ${user.firstName} hanno la stessa età`);
        }
    }
}

user1 = new User('Giacomo', 'Draghetti', 210, 'Bologna')
user2 = new User('Agnese', 'Draghetti', 22, 'Bologna')

user1.confronto(user2);
