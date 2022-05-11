const generatePage = require('./src/page-template');

const inquirer = require('inquirer');

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const promptManager = () => {

    let profileData = [];

    return inquirer.prompt([
      {
        type: 'input',
        name: 'name',
        message: 'Enter the team manager’s name',
        validate: nameInput => {
          if (isNaN(nameInput) && nameInput) {
            return true;
          } else {
            return 'Please enter the team manager’s name';
          }
        }
      },
      {
        type: 'input',
        name: 'id',
        message: 'Enter the team manager’s ID',
        validate: (idInput) => {
          if (!isNaN(idInput) && idInput) {
            return true;              
          }else{
            return "Invalid entry, ID must be a number";
          }
        }
      },
      {
        type: 'input',
        name: 'email',
        message: 'Enter the team manager’s email',
        validate: emailInput => {
          if (isNaN(emailInput) && emailInput) {
            return true;
          } else {            
            return 'Please enter the team manager’s email';
          }
        }
      },
      {
        type: 'input',
        name: 'officenum',
        message: 'Enter the team manager’s office number',
        validate: ofNumInput => {
            if (!isNaN(ofNumInput) && ofNumInput) {
              return true;              
            }else{              
              return "Invalid entry, office number must be a number";
            }
        }
      },
    ]).then(data => {
      profileData.push(new Manager(data.name, data.id, data.email, data.officenum));
      return profileData;
    });
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
          return addEngineer(profileData);
        }else if(choice.nextChoice == 'Add an Intern'){
          return addIntern(profileData);
        }else{
          return profileData;
        }
    });
};

const addEngineer = profileData => {

  return inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'Enter the engineer’s name',
      validate: nameInput => {
        if (isNaN(nameInput) && nameInput) {
          return true;
        } else {
          return 'Please enter the engineer’s name';
        }
      }
    },
    {
      type: 'input',
      name: 'id',
      message: 'Enter the engineer’s ID',
      validate: (idInput) => {
        if (!isNaN(idInput) && idInput) {
          return true;              
        }else{
          return "Invalid entry, ID must be a number";
        }
      }
    },
    {
      type: 'input',
      name: 'email',
      message: 'Enter the engineer’s email',
      validate: emailInput => {
        if (isNaN(emailInput) && emailInput) {
          return true;
        } else {            
          return 'Please enter the engineer’s email';
        }
      }
    },
    {
      type: 'input',
      name: 'github',
      message: 'Enter the engineer’s Github username',
      validate: github => {
          if (isNaN(github) && github) {
            return true;              
          }else{              
            return "Please enter the engineer’s Github username";
          }
      }
    },
  ]).then(data => {
    profileData.push(new Engineer(data.name, data.id, data.email, data.github));
    return promptNext(profileData);
  });
};

const addIntern = profileData => {

  return inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'Enter the intern’s name',
      validate: nameInput => {
        if (isNaN(nameInput) && nameInput) {
          return true;
        } else {
          return 'Please enter the intern’s name';
        }
      }
    },
    {
      type: 'input',
      name: 'id',
      message: 'Enter the intern’s ID',
      validate: (idInput) => {
        if (!isNaN(idInput) && idInput) {
          return true;              
        }else{
          return "Invalid entry, ID must be a number";
        }
      }
    },
    {
      type: 'input',
      name: 'email',
      message: 'Enter the intern’s email',
      validate: emailInput => {
        if (isNaN(emailInput) && emailInput) {
          return true;
        } else {            
          return 'Please enter the intern’s email';
        }
      }
    },
    {
      type: 'input',
      name: 'school',
      message: 'Enter the intern’s school',
      validate: school => {
          if (isNaN(school) && school) {
            return true;              
          }else{              
            return "Please enter the intern’s school";
          }
      }
    },
  ]).then(data => {
    profileData.push(new Intern(data.name, data.id, data.email, data.school));
    return promptNext(profileData);
  });
};

promptManager().then(promptNext).then(profileData =>{
  console.log(profileData);
});