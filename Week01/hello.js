var fs=require('fs');
function readFileMethod() {
    fs.readFile(this.fileName,  (err, data) => {
    if (!err) {
    console.log(this.fileName, 'has length', data.length);
    }
    });
}
var obj = {fileName: "no.txt", readFile: readFileMethod};
obj.readFile();
