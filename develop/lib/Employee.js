// TODO: Write code to define and export the Employee class

class Employee{
    constructor(name,id,email){
        this.name=name;
        this.id=id;//value must be a digit
        this.email=email;
    }//this class will be extended

    getName(){ 
        return this.name;
    }
    getId(){        
        return this.id;
    }
    getEmail(){        
        return this.email;
    }
    getRole(){
        return 'Employee';
    }    
}

module.exports=Employee;//can be instantiated

//this file serves to support instances thereof. never to be redered