var faker = require('faker');

//id: Number, 


var imageURLGenerator = function() {
    var results = []
    for(var i = 0; i < 6; i++) {
        results.push(faker.image.imageUrl())
    }
    return results
}


var technicalFeaturesGenerator = function() {
    var results = [];
    for(var i = 0; i < 5; i++) {
        results.push(faker.lorem.word())
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
        results.push(faker.lorem.word())
    }
    return results
}


var collarConfigGenerator = function() {
    return [faker.lorem.word(), faker.lorem.words()]
 }


var hemConfigGenerator = function() {
    return faker.lorem.words()
}

var fabricGenerator = function() {
    return faker.lorem.words()
}


var materialsGenerator = function() {
    var results = [];
    for(var i = 0; i < 3; i++) {
        results.push(faker.lorem.sentence())
    }
    return results
}


var careGenerator = function() {
    var results = [];
    for(var i = 0; i < 5; i++) {
        results.push(faker.lorem.words())
    }
    return results
}

 

var questionHeaderGenerator = function() {
    var results = [];
    for(var i = 0; i < 9; i++) {
        results.push(faker.lorem.sentence().slice(0, -1) + '?')
    }
    return results
}


var questionContentGenerator = function() {
    var results = [];
    for(var i = 0; i < 9; i++) {
        results.push(Math.floor(Math.random() * 2) === 0 ? faker.lorem.sentences() : faker.lorem.sentences());
    }
    return results
}


var answerGenerator = function() {
    var results = [];
    for(var i = 0; i < 9; i++) {
        results.push(Math.floor(Math.random() * 2) === 0 ? faker.lorem.sentences() : faker.lorem.paragraph());
    }
    return results
}


var questionCountGenerator = function() {
    return Math.floor(Math.random() * 4) + 1
}


var answerCountGenerator = function() {
    return Math.floor(Math.random() * 4) + 1
}


var dateGenerator = function() {
    return [faker.date.past()]
}


var ageGenerator = function() {
    return Math.floor(Math.random() * 55) + 18
}

var thumbsUpGenerator = function() {
    return Math.floor(Math.random() * 10) + 1
}


var thumbsDownGenerator = function() {
    return Math.floor(Math.random() * 10) + 1
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

}