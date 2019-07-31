const fs = require('fs');
const {
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



const questionFileGenerator = function() {
    const wstream = fs.createWriteStream('question.txt')
    for(var i = 1; i < 10000001; i++) {
        let randomNumber = Math.floor(Math.random() * (10 - 4 + 1)) + 4;
        while(randomNumber !== 0) {
            wstream.write(`${i}|${questionHeaderGenerator()}|${questionContentGenerator()}|${dateGenerator()}|${thumbsUpGenerator()}|${thumbsDownGenerator()}|${nameGenerator()}|${locationGenerator()}|${ageGenerator()}|${activityGenerator()}\n`)
            randomNumber--
        }
    }
    wstream.on('finish', function () {
        console.log('file has been written');
    });
    wstream.end()
}

questionFileGenerator()

