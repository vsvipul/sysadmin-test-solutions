var encryptor = require('file-encryptor');
var options = { algorithm: 'aes256' };
var fs = require('fs')

exports.encryptFunc = (key) => {
    encryptor.encryptFile('input.txt', 'output.dat', key, options, function(err) {
        if (err) {
            console.log('\nAn error occured.\n');
            console.log(err);
            process.exit(0);
        }
        console.log('\nFile encrypted to output.dat.');
        fs.unlink('./input.txt');
        console.log('Also, deleted input.txt which you can recover anytime by entering\nthe same key you used here to encrypt.\n');
        console.log('Have a great day!\n');
        process.exit(0);
    });
};
