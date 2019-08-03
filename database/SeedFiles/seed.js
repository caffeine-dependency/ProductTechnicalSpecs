const fs = require('fs');


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
  dateGenerator,
  ageGenerator,
  thumbsUpGenerator,
  thumbsDownGenerator,
  nameGenerator,
  locationGenerator,
  activityGenerator
} = require('./datagen')











const csvFileGenerator = function() {
  const wstream = fs.createWriteStream('product.txt')
 
  for(i = 1; i < 10000001; i++) {

    wstream.write(`${i}|{${technicalFeaturesGenerator()}}|${designAndFitGenerator()}|${zippersAndFlyGenerator()}|${pocketConfigGenerator()}|{${constructionGenerator()}}|{${collarConfigGenerator()}}|${hemConfigGenerator()}|${fabricGenerator()}|{${materialsGenerator()}}|{${careGenerator()}}\n`)
   
  }
  wstream.on('finish', function () {
    console.log('file has been written');
  });
  wstream.end()
}

csvFileGenerator()