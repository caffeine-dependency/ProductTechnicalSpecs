var faker = require('faker');

//id: Number, 


var imageURLGenerator = function() {
    return faker.image.imageUrl()
}

var imageCaptionGenerator = function() {
    return faker.lorem.sentence()
}


var technicalFeaturesGenerator = function() {
    var results = [];
    var techFeats = ["Waterproof","Breathable","Ultralight","Compact","Durable","Natural odour resistance","Versatile","Moisture-wicking","Lightweight","Quick-drying","Wrinkle resistant","Compressible","Wind resistant","Air permeable","Abrasion resistant","Water resistant","Lightly insulated","Insulated","Great warmth-to-weight ratio","Windproof","Packs up small for easy travel storage","Highly air permeable—allows air and moisture to move through the fabric for speed drying"]
    for(var i = 0; i < 5; i++) {
        var randomIndex = Math.floor(Math.random() * techFeats.length)
        results.push(techFeats[randomIndex].toLowerCase())
        techFeats.splice(randomIndex, 1)
    }
    return results
}


var designAndFitGenerator = function() {
    return faker.lorem.sentence()
}


var zippersAndFlyGenerator = function() {
    return faker.lorem.words()
}



var pocketConfigGenerator = function() {
    return faker.lorem.words()
}


var constructionGenerator = function() {
    var results = [];
    for(var i = 0; i < 3; i++) {
        results.push(`${faker.lorem.word()}`)
    }
    return results
}


var collarConfigGenerator = function() {
    return [faker.lorem.word(),faker.lorem.words()]
 }


var hemConfigGenerator = function() {
    return faker.lorem.words()
}

var fabricGenerator = function() {
    return faker.lorem.words()
}


var materialsGenerator = function() {
    var materials = ["GORE-TEX (Waterproof)","Breathable","Fleece","Coreloft","Down Fill","Synthetic Insulation","Lightweight","Synthetic Fibre","Insulated","Softshell","Natural Fibre","Nylon","Wool Blend","Composite Construction","Phasic"]
    return `[${materials[Math.floor(Math.random() * materials.length)].toLowerCase()}, ${faker.lorem.words()},${faker.lorem.words()}]`
}


var careGenerator = function() {
    var results = [];
    for(var i = 0; i < 5; i++) {
        results.push(`${faker.lorem.words()}`)
    }
    return results
}

 

var questionHeaderGenerator = function() {
    return faker.lorem.sentence().slice(0, -1) + '?'
}


var questionContentGenerator = function() {
    return faker.lorem.sentences()
}


var answerGenerator = function() {
    var results = [];
    var randomNum = Math.floor(Math.random() * 3);

    while(randomNum !== 0) {
        results.push(faker.lorem.paragraph())
        randomNum--
    }
    return results
}



var dateGenerator = function() {
  
    var date = new Date(faker.date.past()).toLocaleDateString('en-US', {month : 'numeric',day: 'numeric',year : 'numeric'})
    return date
}



var ageGenerator = function() {
    return Math.floor(Math.random() * (65 - 18 + 1)) + 18;
}

var thumbsUpGenerator = function() {
    return Math.floor(Math.random() * 11)
}


var thumbsDownGenerator = function() {
    return Math.floor(Math.random() * 11)
}


var nameGenerator = function() {
    return Math.floor(Math.random() * 2) === 0 ? faker.name.firstName() : faker.internet.userName();
}


var locationGenerator = function() {
    return `${faker.address.city()}, ${faker.address.stateAbbr()}, USA`
}


var activityGenerator = function() {
    return  faker.lorem.word()
}


module.exports = {
    imageURLGenerator,
    imageCaptionGenerator,
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

}