const fs = require('fs');

fs.readdir('./foldersaya', async (err, files) => {
    if (!err) {
        console.log("Ini isi dalama foldernya")
        files.forEach(file => {

            console.log(file);
        });
    }

});