document.write('Versão: '+process.version);

var fs = require('fs');

var contents = fs.readFileSync('./teste', 'utf-8');
alert(contents);
