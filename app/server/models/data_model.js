class DataModel {
    constructor() {
        this.data = [];
        this.errors = [];
    }

    getAll() {
        //console.log(this.data)
        return this.data;
    }

    getById(id) {
        for (let i=0; i<this.data.length; i++){
            if (this.data[i].id === id) {
                //console.log (this.data[i])
                return this.data[i]
            }
            return null
        }
        
    }

    save(obj) {
        if (this.validate(obj)) {
            this.data.push(obj);
            return true;
        }
        return false;
    }

    update(obj, id) {
        for (let i=0; i<this.data.length; i++){
            if (this.data[i].id === id) {
                for(let key in obj) {
                    for (let key2 in this.data[i]) {
                        if(key === key2) {
                            this.data[i][key2] = obj[key]
                            //console.log(this.data[i])
                            }
                        }
                    
                    }
                return true
                }
            }
            return false;
       }
    delete(id) {
        for (let i=0; i<this.data.length; i++){
            if (this.data[i].id == id) {
                this.data.splice(i,1)
                //console.log(this.data)
            return true
            }
        }
        return false;
    }

    // this method will be overriden in the sub classes
    validate(obj) {
        return false;
    }
}

// Do not worry about the below for now; It is included so that we can test your code
// We will cover module exports in later parts of this course
module.exports = DataModel;