// const Employee=require("./lib/Employee")
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquire = require("inquirer");
const path = require("path");//is an object
const fs = require("fs");
// const mdGenPro=require('')//cli README.md-genPro, software I wrote for last assignment
const OUTPUT_DIR = path.resolve(__dirname, "output");
console.log(OUTPUT_DIR);
const outputPath = path.join(OUTPUT_DIR, "team.html");//I want to generate 'output' through here
//do I have to create a team.html?

const render = require("./lib/htmlRenderer");//whats the best way to use this module?
const teamHtmlArr=[];

//


// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

//this function being stored within a variable can be instantiated. just a thought

var configureManager=() => inquire.prompt([
    {
        type: 'input',
        name: 'name',
        message: "what is your Manager's name?"
    },
    {
        type: 'input',
        name: 'email',
        message: "what is your manager's email?"
    },
    {
        type: 'input',
        name: 'id',
        message: "what is your Manager's id?"
    },
    {
        type: 'input',
        name: 'officeNum',
        message: "what is your Manager's office number?"
    }
]).then(configuration => {
    console.log(configuration)    
    const newManager = new Manager(configuration.name, configuration.id, configuration.email, configuration.officeNum)//new instantiation
    console.log(newManager);
    teamHtmlArr.push(configuration);
    addTeamMember()//hoisted function   
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
        console.log(configuration);
        const newIntern=new Intern(configuration.name,configuration.id,configuration.email,configuration.shool);
        console.log(newIntern);
        teamHtmlArr.push(newIntern);//compiling team.html
        addTeamMember();//hoisted function
    })
}

const configureEngineer=()=>{
    inquire.prompt([
        {
            type: 'input',
            name: 'name',
            message: "what is your Manager's name?"
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
        console.log(configurataion);
        const newEngineer=new Engineer(configuration.name,configuration.id,configuration.email,configuration.github);
        console.log(newEngineer);
        teamHtmlArr.push(newEngineer);
        console.log(teamHtmlArr);//taking a look at this array of objects
        addTeamMember();//hoisted function
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
    ]).then(newHire=>{
        switch(newHire){
            case 'intern':
                configureIntern();//function prompting for intern config
                break;
            case 'engineer':
                configureEngineer();//hoisted functions
                break;
            default:
                render(teamHtmlArr)        
    }
})//this function will server as an anchor, continuing the flow until user reaches end

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided render function to work