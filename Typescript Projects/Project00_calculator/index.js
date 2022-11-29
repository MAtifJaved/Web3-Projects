import figlet from "figlet";
import chalkAnimation from 'chalk-animation';
const sleep = (ms = 2000) => new Promise((r) => setTimeout(r, ms));
async function welcome() {
    const welcomeTitle = chalkAnimation.rainbow('Welcome to the CLI Based Calculator\n');
    await sleep();
    // welcomeTitle.stop()
}
async function heading() {
    figlet.text('Calculator', {
        font: 'Avatar',
        horizontalLayout: 'fitted',
        verticalLayout: 'default',
        width: 150,
        whitespaceBreak: false
    }, function (err, data) {
        if (err) {
            console.log('Something went wrong...');
            console.dir(err);
            return;
        }
        console.log(data);
    });
    await welcome();
}
await heading();
