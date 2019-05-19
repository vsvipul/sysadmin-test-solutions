# Encryption Software

## Solution
To solve this problem, i built a password encrypt-decrypt program which you can use as follows -

1. Install all dependencies
``` bash
npm install
```

2. Place the text file in this directory and rename it to ```input.txt```.

3. Run the program.
``` bash
node index.js
```

4. Enter a key of your choice when prompted. It will encrypt the file to create a new file ```output.dat``` which can only be decrypted using the key you entered earlier. It will also delete ```input.txt``` automatically.

5. To recover ```input.txt``` to update it, run ```node index.js``` again and enter the key you used earlier to decrypt the file. This will delete the ```output.dat``` file.


## The Good
- This method is safe and secure as it uses ```aes-256``` algorithm to encrypt the files, which is used worldwide.
- File is stored on the PC.
- Updating the file for a non-technical background user is also easy.

## The Bad
- If hard disk goes corrupt, this will not be effective, as the encrypted file will be lost. To counter this, we can create a copy of the encrypted file on a server, as backup.