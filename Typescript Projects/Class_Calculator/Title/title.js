import figlet from "figlet";
export function title() {
    const title = figlet.text('Calculator', {
        font: 'Avatar',
        horizontalLayout: 'default',
        verticalLayout: 'default',
        width: 150,
        whitespaceBreak: true
    }, function (err, data) {
        if (err) {
            console.log('Something went wrong...');
            console.dir(err);
            return;
        }
        console.log(data);
    });
    return title;
}
;
// export default heading;
