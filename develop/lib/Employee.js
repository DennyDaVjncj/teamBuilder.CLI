// TODO: Write code to define and export the Employee class

class Employee{//this class needs to set some base values
    constructor(name,id,email){
        this.name=name;//second test passed
        this.id=id;
        this.email=email;
    }//this class will be extended

    getName(){
        // this.name=`${data.name}`;//'data' being a hypothetical anchor value
        // console.log(this.name);             
        return `${this.name}`//this line passes test
    }
    getId(){
        return `${this.id}`;
    }
    getEmail(){
        
        return `${this.email}`;
    }
    
}

exports.module=Employee;//can be instantiated

//this file serves to support instances thereof. never to be redered