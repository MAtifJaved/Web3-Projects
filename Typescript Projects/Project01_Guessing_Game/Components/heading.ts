import figlet from "figlet";


export default async function Heading(){
figlet('Guessing Game !!', function(err, data) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    console.log(data)
});
}
