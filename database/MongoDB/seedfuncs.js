const {TechSpec, Product} = require("./index.js");
const mongoose = require("mongoose");


// const jsonFileGenerator = function() {
//   const wstream = fs.createWriteStream('data2.json')
//   const rstream = fs.createReadStream('data2.json')
//   //const compress = zlib.createGzip()
//   for(i = 1; i < 10000001; i++) {
//     let jsonObj = {
//     id: i,
//     technicalFeatures: technicalFeaturesGenerator(), 
//     designAndFit: designAndFitGenerator(), 
//     zippersAndFly: zippersAndFlyGenerator(),
//     pocketConfig: pocketConfigGenerator(),
//     construction: constructionGenerator(), 
//     collarConfig: collarConfigGenerator(), 
//     hemConfig: hemConfigGenerator(), 
//     fabricTreatment: fabricGenerator(),
//     materials: materialsGenerator(), 
//     care: careGenerator()
//     }
//     wstream.write(JSON.stringify(jsonObj))

//   }
  
//   wstream.on('finish', function () {
//     //rstream.pipe(compress).pipe(fs.createWriteStream('data.json.gz'))
//     console.log('file has been written');
//   });
//   wstream.end()
// }

// jsonFileGenerator()

const imageFileGenerator = function() {
    const wstream = fs.createWriteStream('imgdata.json')
    for(var i = 1; i < 10000001; i++) {
        let randomNumber = Math.floor(Math.random() * 11)
        while(randomNumber !== 0) {
            let imgObj = {
                id: i,
                imageURL: imageURLGenerator(),
                username: nameGenerator(),
                imageCaption: imageCaptionGenerator()
            }
            wstream.write(JSON.stringify(imgObj))
            randomNumber--
        }
    }
    wstream.on('finish', function () {
        console.log('file has been written');
    });
    wstream.end()
}
