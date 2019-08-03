const fs = require('fs')
const wStream = fs.createWriteStream('techspecs.txt');
const {
    technicalFeaturesGenerator,
    designAndFitGenerator,
    zippersAndFlyGenerator,
    pocketConfigGenerator,
    constructionGenerator,
    collarConfigGenerator,
    hemConfigGenerator,
    fabricGenerator,
    materialsGenerator,
    careGenerator
  } = require('./datagen')
const faker = require('faker')


    var materials = ["GORE-TEX (Waterproof)","Breathable","Fleece","Coreloft","Down Fill","Synthetic Insulation","Lightweight","Synthetic Fibre","Insulated","Softshell","Natural Fibre","Nylon","Wool Blend","Composite Construction","Phasic"]


var i = 0;


    
function write() {
    var ok = true;
    do {
        i++
        var question = `${i}|{${technicalFeaturesGenerator()}}|${designAndFitGenerator()}|${zippersAndFlyGenerator()}|${pocketConfigGenerator()}|{${constructionGenerator()}}|{${collarConfigGenerator()}}|${hemConfigGenerator()}|${fabricGenerator()}|{${materials[Math.floor(Math.random() * materials.length)].toLowerCase()}, ${faker.lorem.words()},${faker.lorem.words()}}|{${careGenerator()}}\n`
        if(i === 5) {
            console.log('Woah, we\'re half way there')
        }
        if (i === 10) {
            wStream.write(question, 'utf8', () => {
                wStream.end()
            });
        
        } else {
            ok = wStream.write(question, 'utf8');
        }
    } while (i < 10 && ok);
    if (i > 0) {
        wStream.once('drain', write);
    }
}
write()
