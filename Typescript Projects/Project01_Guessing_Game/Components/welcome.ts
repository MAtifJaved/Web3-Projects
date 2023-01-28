import chalk from 'chalk';

const log = console.log;

export default async function welcome(){
    log(chalk.blue('Welcome') +' to the '+chalk.redBright('Guessing Game'));
}
