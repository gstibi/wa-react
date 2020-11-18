var fs = require('fs');
var stream = fs.createWriteStream("a_import.txt");

list = fs.readdirSync('./')

stream.once('open', function(fd) {
    list.forEach(element => {
        var up = element.toUpperCase().slice(0, -4)
        stream.write(`import {ReactComponent as ${up}} from '../icons/weathericon/svg/${element}'\n`)
    });

    stream.write('\n\n\n')

    list.forEach(element => {
        var up = element.toUpperCase().slice(0, -4)
        stream.write(`case '${up}':\n\ticon = <${up}/>\n\tbreak;\n`)
    })
    stream.end();
});