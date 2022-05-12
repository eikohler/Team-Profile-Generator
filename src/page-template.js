const Manager = require('../lib/Manager');
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');

const generateEmployees = templateData => {
  let html = '';
  templateData.forEach(data => {
    let icon = '';
    let special = '';
    switch(data.getRole()){
      case "Manager":
        icon = '<i class="fa fa-coffee" aria-hidden="true"></i>';
        special = 'Office number: ' + data.getOfficeNum();
        break;
      case "Engineer":
        icon = '<i class="fa fa-wrench" aria-hidden="true"></i>';
        special = `GitHub: <a href="https://github.com/${data.getGithub()}" target="_blank">${data.getGithub()}</a>`;
        break;
      case "Intern":
        icon = '<i class="fa fa-graduation-cap" aria-hidden="true"></i>';
        special = 'School: ' + data.getSchool();
        break;
    };

    html += `
    <div class="col-md-4 col-12">
    <div class="card">
      <div class="em-heading bg-primary text-white p-3">
        <h4>${data.getName()}</h4>
        ${icon}<span>${data.getRole()}</span>
      </div>
      <div class="bg-light px-3 py-4 card-info">
        <section>
          <p>ID: ${data.getID()}</p>
        </section>
        <section>
          <p>Email: <a href="mailto:${data.getEmail()}">${data.getEmail()}</a></p>
        </section>
        <section>
          <p>${special}</p>
        </section>
      </div>
    </div>
  </div>
    `;
  });
  return html;
};

module.exports = templateData => {
  
    return `
    <!DOCTYPE html>
    <html lang="en">
  
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Team Profile</title>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
      <link rel="stylesheet" href="style.css">
    </head>
    <body>
      <header class="container-fluid bg-danger text-white text-center">
        <h3>My Team</h3>
      </header>
      <main class="container p-5">
        <section class="row justify-content-center">
          ${generateEmployees(templateData)}
        </section>
      </main>
    </body>
    </html>
    `;
};