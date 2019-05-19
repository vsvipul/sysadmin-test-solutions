const readline = require('readline');
const encryption = require('./encrypt');
const decryption = require('./decrypt');
const fs = require("fs"); 

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const mainfunc = () => {
    if (fs.existsSync('./input.txt')) {
        rl.question('Enter any encryption key to encrypt input.txt file: ', (key) => {
            encryption.encryptFunc(key);
        });
    } else if (fs.existsSync('./output.dat')) {
        rl.question('Enter your encryption key to decrypt output.dat: ', (key) => {
            decryption.decryptFunc(key);
        });
    } else {
        console.log('No input.txt file in current dir.\nPlease create one and then rerun the program.\n');
        console.log('Have a great day!\n');
        process.exit(0);
    }
}

mainfunc();