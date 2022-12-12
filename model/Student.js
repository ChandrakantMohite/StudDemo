
const Database = require("./Database");

class Student
{

    constructor(){
        this.id =0;
        this.name ="";
        this.email = "";
        this.city = "";
        this.mobileno = "";
        this.db = new Database();
        this.query = "";

    }

    save = ()=>{
        this.query = "INSERT INTO students (name, email, mobileno, city)";
        this.query += " VALUES ('"+this.name+"','"+this.email+"','"+this.mobileno+"','"+this.city+"')";
        return new Promise((resolve , reject)=>{
            this.db.query(this.query,(err, result)=>{
                if(err)
                reject(err);

                resolve(result);
                 
            })
        })
        

    }

    list = ()=>{
        this.query = "SELECT * FROM students";
        return new Promise((resolve , reject)=>{
            this.db.query(this.query,(err, result)=>{
                if(err)
                reject(err);

                resolve(result);
                 
            })
        })
    }
    update = ()=>{
        this.query = "UPDATE students SET name = '" + this.name + "', email =  '" + this.email + "'";
        this.query += " ,mobileno = '" + this.mobileno + "', city = '"+this.city + "' ";
        this.query += " WHERE id = "+this.id;
        return new Promise((resolve , reject)=>{
            this.db.query(this.query,(err, result)=>{
                if(err)
                reject(err);

                resolve(result);
                 
            })
        })
    }
    get = ()=>{
        this.query = "SELECT * FROM students WHERE id = "+this.id;
        return new Promise((resolve , reject)=>{
            this.db.query(this.query,(err, result)=>{
                if(err)
                reject(err);

                resolve(result);
                 
            })
        })
    }
    delete = ()=>{
        this.query = "DELETE  FROM students WHERE id = "+this.id;
        return new Promise((resolve , reject)=>{
            this.db.query(this.query,(err, result)=>{
                if(err)
                reject(err);

                resolve(result);
                 
            })
        })
    }

}
module.exports=Student;