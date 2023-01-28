import chalkAnimation from 'chalk-animation';
import { title } from '../Title/title.js';
const sleep = (ms = 1000) => new Promise((r) => setTimeout(r, ms));
export async function welcome(input) {
    title();
    const welcomeTitle = chalkAnimation.rainbow(input);
    await sleep();
    welcomeTitle.stop();
}
