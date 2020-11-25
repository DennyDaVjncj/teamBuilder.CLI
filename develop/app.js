const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquire = require("inquirer");
const path = require("path");
const fs = require("fs");
const OUTPUT_DIR = path.resolve(__dirname, "output");
console.log(OUTPUT_DIR);
const outputPath = path.join(OUTPUT_DIR, "team.html");//I want to generate 'output' through here
const render = require("./lib/htmlRenderer");
const teamHtmlArr=[];

const configureManager=() => inquire.prompt([
    {
        type: 'input',
        name: 'name',
        message: "what is your manager's name?"
    },
    {
        type: 'input',
        name: 'id',
        message: "what is your manager's id?"
    },
    {
        type: 'input',
        name: 'email',
        message: "what is your manager's email?"
    },
    {
        type: 'input',
        name: 'officeNum',
        message: "what is your manager's office number?"
    }
]).then(configuration => {        
    const newManager = new Manager(configuration.name, configuration.id, configuration.email, configuration.officeNum)//new instantiation    
    teamHtmlArr.push(newManager);
    hireEmployee()//hoisted function
})

const configureIntern=()=>{
    inquire.prompt([
        {
            type: 'input',
            name: 'name',
            message: "what is your interns's name?"
        },
        {
            type: 'input',
            name: 'id',
            message: "what is your intern's id?"
        },
        {
            type: 'input',
            name: 'email',
            message: "what is your intern's email?"
        },
        {
            type: 'input',
            name: 'school',
            message: "what school does your intern attend?"
        }
    ]).then(configuration=>{        
        const newIntern=new Intern(configuration.name,configuration.id,configuration.email,configuration.school);        
        teamHtmlArr.push(newIntern);//compiling team.html
        hireEmployee();//hoisted function
    })
}

const configureEngineer=()=>{
    inquire.prompt([
        {
            type: 'input',
            name: 'name',
            message: "what is your engineer's name?"
        },
        {
            type: 'input',
            name: 'id',
            message: "what is your engineer's id?"
        },
        {
            type: 'input',
            name: 'email',
            message: "what is your engineer's email?"
        },
        {
            type: 'input',
            name: 'github',
            message: "what is your engineer's github?"
        }
    ]).then(configuration=>{
        console.log(configuration);
        const newEngineer=new Engineer(configuration.name,configuration.id,configuration.email,configuration.github);
        console.log(newEngineer);
        teamHtmlArr.push(newEngineer);
        console.log(teamHtmlArr);//taking a look at this array of objects
        hireEmployee();//hoisted function
    })
}

function hireEmployee(){
    inquire.prompt([
        {
            type:'list',
            name:'newHire',
            message:'would you like to hire a new employee?',
            choices:['intern','engineer','none']
        }
    ]).then(configuration=>{
        switch(configuration.newHire){
            case 'intern':
                configureIntern();//function prompting for intern config
                break;
            case 'engineer':
                configureEngineer();//hoisted functions
                break;
            default:
                if (!fs.existsSync(OUTPUT_DIR)) {
                    fs.mkdirSync(OUTPUT_DIR)
                }
                //my TA definitely helped with this block
                fs.writeFile(outputPath,render(teamHtmlArr),error=>{
                    if(error){
                        throw error
                    }
                });
        }                
    })
}//this function will serve as an anchor, continuing the flow until user reaches programmatic end

configureManager()//application trigger