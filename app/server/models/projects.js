const DataModel = require('./data_model');

class Project {
    constructor(id, name, abstract, authors, tags, createdBy) {
        this.id = id
        this.name = name
        this.abstract = abstract
        this.authors = authors
        this.tags = tags
        this.createdBy = createdBy
    }
}

class Projects extends DataModel {
    validate(obj) {
        this.errors = []
        if(!Array.isArray(obj.authors)) {
            this.errors.push('Authors should be an array')
            //console.log("errors",this.errors)
        }
        if(!Array.isArray(obj.tags)) {
            this.errors.push('Tags should be an array')
            //console.log("errors",this.errors)
            return false
        }
        if (obj.id == "") { 
            this.errors.push("Id should not be empty")
            //console.log("errors",this.errors)
        }
        if (obj.name == "") { 
            this.errors.push("name should not be empty")
            //console.log("errors",this.errors)
        }
        if (obj.abstract == "") { 
            this.errors.push("abstract should not be empty")
            //console.log("errors",this.errors)
        }
        if (obj.createdBy == "") { 
            this.errors.push("createdBy should not be empty")
            //console.log("errors",this.errors)
            return false
        }
        return true        
    }          
}
    


// Do not worry about the below for now; It is included so that we can test your code
// We will cover module exports in later parts of this course
module.exports = {
    Project,
    Projects
};