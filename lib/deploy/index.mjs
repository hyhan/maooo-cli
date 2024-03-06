import shell from 'shelljs'
import inquirer from 'inquirer'

export function initDeployCommand(program) {
  program
    .command('deploy')
    .alias('dep') // 别名
    .description('部署项目')
    .action((project, args) => {
      inquirer
        .prompt([
          {
            type: 'list',
            name: 'project', // 用于接收答案的键值
            choices: ['admin', 'admin-test', 'h5'],
            message: '请选择要部署的项目',
          },
          {
            type: 'confirm',
            name: 'isBuild', // 用于接收答案的键值
            message: '是否需要打包项目',
          },
        ])
        .then((answer) => {
          console.log(
            '%c 🧐: initDeployCommand -> answer ',
            'font-size:16px;background-color:#79cca3;color:white;',
            answer
          )
          // shell.exec('npm run build')
        })
    })
}

