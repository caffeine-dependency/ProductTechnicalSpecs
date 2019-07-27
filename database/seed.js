const {TechSpec, Product} = require("./index.js");
const mongoose = require("mongoose");
const fs = require('fs');
const zlib = require('zlib')

const {
  imageURLGenerator,
  technicalFeaturesGenerator,
  designAndFitGenerator,
  zippersAndFlyGenerator,
  pocketConfigGenerator,
  constructionGenerator,
  collarConfigGenerator,
  hemConfigGenerator,
  fabricGenerator,
  materialsGenerator,
  careGenerator,
  questionHeaderGenerator,
  questionContentGenerator,
  answerGenerator,
  questionCountGenerator,
  answerCountGenerator,
  dateGenerator,
  ageGenerator,
  thumbsUpGenerator,
  thumbsDownGenerator,
  nameGenerator,
  locationGenerator,
  activityGenerator
} = require('./datagen')





  
// fs.createWriteStream('test.csv').write(`${i},[${technicalFeaturesGenerator()}],${designAndFitGenerator()},${zippersAndFlyGenerator()},${pocketConfigGenerator()},[${constructionGenerator()}],[${collarConfigGenerator()}],${hemConfigGenerator()},${fabricGenerator()},[${materialsGenerator()}],[${careGenerator()}]`)
// for(var i = 1; i < 10000001; i++) {
//   fs.createWriteStream('test.csv').write('id,technicalFeatures,designAndFit,zippersAndFly,pocketConfig,construction,collarConfig,hemConfig,fabricTreatment,materials,care')
// }

// fs.createWriteStream('test.csv').on('finish', function () {
//   console.log('file has been written');
// });
// fs.createWriteStream('test.csv').end()


// const csvFileGenerator = function() {
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

const csvFileGenerator = function() {
  const wstream = fs.createWriteStream('data2.txt')
 
  for(i = 1; i < 10000001; i++) {

    wstream.write(`${i}|{${technicalFeaturesGenerator()}}|${designAndFitGenerator()}|${zippersAndFlyGenerator()}|${pocketConfigGenerator()}|{${constructionGenerator()}}|{${collarConfigGenerator()}}|${hemConfigGenerator()}|${fabricGenerator()}|{${materialsGenerator()}}|{${careGenerator()}}\n`)
    
  }
  wstream.on('finish', function () {
    console.log('file has been written');
  });
  wstream.end()
}

csvFileGenerator()