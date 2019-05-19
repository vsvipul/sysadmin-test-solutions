var encryptor = require('file-encryptor');
var options = { algorithm: 'aes256' };
var fs = require('fs');

exports.decryptFunc = (key) => {
    encryptor.decryptFile('output.dat', 'input.txt', key, options, function(err) {
        if (err) {
            console.log('\nWRONG ENCRYPTION KEY ENTERED.\n');
            console.log(err);
            process.exit(0);
        }
        console.log('\nFile decrypted to input.txt');
        fs.unlink('./output.dat');
        console.log('Also, deleted output.dat which you can create again here anytime.');
        console.log('Have a great day!\n');
        process.exit(0);
    });
};
