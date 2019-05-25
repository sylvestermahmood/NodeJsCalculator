

var inquirer = require('inquirer');

function operation ()
{
inquirer
  .prompt([
    {
      type: 'list',
      name: 'theme',
      message: 'What operation do you want to do?',
      choices: [
        'Addition',
        'Multiplication',
        'Substraction',
        'Division',
            ]
    },
    {
      type: 'input',
      name: 'First_Num',
      message: 'Enter First Num ',
      },
      {
        type: 'input',
        name: 'Second_Num',
        message: 'Enter Second Num ',
        }
  ])
  .then(answers => {
   // console.log(JSON.stringify(answers, null, '  '));
    var a = JSON.stringify(answers);
    var result = JSON.parse(a);
    if(result.theme == 'Addition')
    {
    console.log(parseInt(result.First_Num)+parseInt(result.Second_Num))
    }
    else if(result.theme == 'Multiplication')
    {
        console.log(parseInt(result.First_Num)*parseInt(result.Second_Num))
    }
    else if(result.theme == 'Substraction')
    {
        console.log(parseInt(result.First_Num)-parseInt(result.Second_Num))
    }
    else if(result.theme == 'Division')
    {
        console.log(parseInt(result.First_Num)/parseInt(result.Second_Num))
    }
    else {
        console.log("No such function ")
    }
  });


}

module.exports =
{
    operation : operation
}