const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/pumpSquad2', { useNewUrlParser: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {console.log('db successfully connected')});

const productSchema = new mongoose.Schema({
  id: Number,
  imgUrl: [String],
  technicalFeatures: [String], //around 5 keywords/not sentences for bullet points
  designAndFit: String, //ex: 'Trim fit for base layer or light mid-layer use'
  zippersAndFly: String,
  pocketConfig: String,
  construction: [String], //2 bullet points of full sentences
  collarConfig: [String], //2 bullet points of keywords
  hemConfig: String, //hardcode ? : 'Adjustable hem cord seals out drafts'
  fabricTreatment: String, //hardcode ? : DWR (Durable Water Repellent) finish repels moisture
  materials: [String], //3 bulletpoints of full sentences
  care: [String],
  questionHeader: [String],
  questionContent: [String],
  answer: [String],
  questionCount: Number,
  answerCount: Number,
  date: [String], //or 'Date' ex: '2 months, 1 week ago'
  age: [String], //ex "Over 65", "35-44"
  numberOfThumbsUp: Number,
  numberOfThumbsDown: Number,
  username: String, //ex "Gabby"
  cityAndStateAndCountry: String,
  activity: String
});
const techSpecSchema = new mongoose.Schema({
  id: Number,
  technicalFeatures: [String], //around 5 keywords/not sentences for bullet points
  designAndFit: String, //ex: 'Trim fit for base layer or light mid-layer use'
  zippersAndFly: String,
  pocketConfig: String,
  construction: [String], //2 bullet points of full sentences
  collarConfig: [String], //2 bullet points of keywords
  hemConfig: String, //hardcode ? : 'Adjustable hem cord seals out drafts'
  fabricTreatment: String, //hardcode ? : DWR (Durable Water Repellent) finish repels moisture
  materials: [String], //3 bulletpoints of full sentences
  care: [String]
})

mongoose.Promise = global.Promise;

const Product = mongoose.model('Product', productSchema);
const TechSpec = mongoose.model('TechSpec', techSpecSchema)

module.exports = { Product, TechSpec };