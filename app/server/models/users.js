const DataModel = require('./data_model');

class User {
    constructor(id, firstname, lastname, email, password, matricNumber, program, graduationYear) {
        this.id = id;
        this.firstname = firstname;
        this.lastname = lastname;
        this.email = email;
        this.password = password;
        this.matricNumber =matricNumber;
        this.program = program
        this.graduationYear = graduationYear
    }

    getFullName() {
        //console.log (`${this.firstname} ${this.lastname}`)
        return `${this.firstname} ${this.lastname}`
    }
}

class Users extends DataModel {
    authenticate(email, password) {
            for (let i=0; i<this.data.length; i++) {
                if (this.data[i].email == email && this.data[i].password == password){
                return true
            }
        }   
        return false
    }

    getByEmail(email) {
        for (let i=0; i<this.data.length; i++) {
            if (this.data[i].email === email){
            return this.data[i]
            } 
            return null
        }
    }

    getByMatricNumber(matricNumber) {
        for (let i=0; i<this.data.length; i++) {
            if (this.data[i].matricNumber === matricNumber){
            return this.data[i]
        } 
        else return null
    }
   
    }
    

    validate(obj) {
        this.errors = []
        for(let key in obj) {
            if(obj[key] === "") {
             this.errors.push(key + "should not be empty")
             //console.log("errors",this.errors)
            }
            //return false
        }
        for (let i = 0; i<this.data.length; i++) {
            if (this.data[i].email == obj.email) {
                this.errors.push('A user with specified email address already exists')
                return false
            }
            if (this.data[i].matricNumber == obj.matricNumber) {
                this.errors.push('A user with specified matric number already exists')
                return false
            }
            if (obj.password.length < 7) {
                this.errors.push('Password should have at least 7 characters')
                return false
            }
        }   
        return true
    }
}
// Do not worry about the below for now; It is included so that we can test your code
// We will cover module exports in later parts of this course
module.exports = {
    User,
    Users
};

