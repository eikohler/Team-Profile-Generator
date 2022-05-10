const generatePage = require('./src/page-template');

const inquirer = require('inquirer');

const promptManager = () => {
    return inquirer.prompt([
      {
        type: 'input',
        name: 'managerName',
        message: 'Enter the team manager’s name',
        validate: nameInput => {
          if (nameInput) {
            return true;
          } else {
            console.log('Please enter the team manager’s name');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'managerID',
        message: 'Enter the team manager’s ID',
        validate: (idInput) => {
            if (isNaN(idInput)) {
              return "Invalid entry, ID must be a number";
            }
            return true;
        }
      },
      {
        type: 'input',
        name: 'managerEmail',
        message: 'Enter the team manager’s email',
        validate: emailInput => {
          if (emailInput) {
            return true;
          } else {
            console.log('Please enter the team manager’s email');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'managerOfficeNum',
        message: 'Enter the team manager’s office number',
        validate: (ofNumInput) => {
            if (isNaN(ofNumInput)) {
              return "Invalid entry, office number must be a number";
            }
            return true;
        }
      },
    ]);
};

const promptNext = profileData => {
    return inquirer.prompt([
      {
        type: 'list',
        name: 'nextChoice',
        message: 'Choose an option',
        choices: ['Add an Engineer', 'Add an Intern', 'Finish building team']
      },      
    ]).then(choice => {
        if(choice.nextChoice == 'Add an Engineer'){
            console.log('Engineer');
        }else if(choice.nextChoice == 'Add an Engineer'){

        }
    });
};

promptManager().then(promptNext);