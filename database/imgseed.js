const fs = require('fs');
const {imageURLGenerator, imageCaptionGenerator, nameGenerator} = require('./datagen')




const imageFileGenerator = function() {
    const wstream = fs.createWriteStream('imgdata.txt')
    for(var i = 1; i < 10000001; i++) {
        let randomNumber = Math.floor(Math.random() * 11)
        while(randomNumber !== 0) {
            wstream.write(`${i}|${imageURLGenerator()}|${nameGenerator()}|${imageCaptionGenerator()}\n`)
            randomNumber--
        }
    }
    wstream.on('finish', function () {
        console.log('file has been written');
    });
    wstream.end()
}

imageFileGenerator()