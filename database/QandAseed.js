const fs = require('fs')
const wStream = fs.createWriteStream('questions.txt');
const faker = require('faker')

const locations = [
    "New York, New York",
    "Los Angeles, California",
    "Chicago, Illinois",
    "Houston, Texas",
    "Phoenix, Arizona",
    "Philadelphia, Pennsylvania",
    "San Antonio, Texas",
    "San Diego, California",
    "Dallas, Texas",
    "San Jose, California",
    "Austin, Texas",
    "Jacksonville, Florida",
    "San Francisco, California",
    "Columbus, Ohio",
    "Fort Worth, Texas",
    "Indianapolis, Indiana",
    "Charlotte, North Carolina",
    "Seattle, Washington",
    "Denver, Colorado",
    "Washington, D.C.",
    "Boston, Massachusetts",
    "El Paso, Texas",
    "Detroit, Michigan",
    "Nashville, Tennessee",
    "Memphis, Tennessee",
    "Portland, Oregon",
    "Oklahoma City, Oklahoma",
    "Las Vegas, Nevada",
    "Louisville, Kentucky",
    "Baltimore, Maryland",
    "Milwaukee, Wisconsin",
    "Albuquerque, New Mexico",
    "Tucson, Arizona",
    "Fresno, California",
    "Sacramento, California",
    "Mesa, Arizona",
    "Kansas City, Missouri",
    "Atlanta, Georgia",
    "Long Beach, California",
    "Omaha, Nebraska",
    "Raleigh, North Carolina",
    "Colorado Springs, Colorado",
    "Miami, Florida",
    "Virginia Beach, Virginia",
    "Oakland, California",
    "Minneapolis, Minnesota",
    "Tulsa, Oklahoma",
    "Arlington, Texas",
    "New Orleans, Louisiana",
    "Wichita, Kansas",
    "Cleveland, Ohio",
    "Tampa, Florida",
    "Irvine, California",
    "Toledo, Ohio",
    "Jersey City, New Jersey",
    "Chula Vista, California",
    "Durham, North Carolina",
    "Fort Wayne, Indiana",
    "Des Moines, Iowa",
    "Spokane, Washington",
    "San Bernardino, California",
    "Modesto, California",
    "Tacoma, Washington",
    "Fontana, California",
    "Santa Clarita, California",
    "Birmingham, Alabama",
    "Oxnard, California",
    "Fayetteville, North Carolina",
    "Rochester, New York",
    "Moreno Valley, California",
    "Glendale, California",
    "Yonkers, New York",
    "Huntington Beach, California",
    "Aurora, Illinois",
    "Salt Lake City, Utah",
    "Amarillo, Texas",
    "Montgomery, Alabama",
    "Grand Rapids, Michigan",
    "Little Rock, Arkansas",
    "Akron, Ohio",
    "Augusta, Georgia",
    "Huntsville, Alabama",
    "Columbus, Georgia",
    "Grand Prairie, Texas",
    "Shreveport, Louisiana",
    "Overland Park, Kansas",
    "Tallahassee, Florida",
    "Mobile, Alabama",
    "Port St. Lucie, Florida",
    "Knoxville, Tennessee",
    "Worcester, Massachusetts",
    "Tempe, Arizona",
    "Cape Coral, Florida",
    "Brownsville, Texas",
    "McKinney, Texas",
    "Providence, Rhode Island",
    "Fort Lauderdale, Florida",
    "Newport News, Virginia",
    "Chattanooga, Tennessee",
    "Rancho Cucamonga, California",
    "Frisco, Texas",
    "Sioux Falls, South Dakota",
    "Oceanside, California",
    "Ontario, California",
    "Vancouver, Washington",
    "Santa Rosa, California",
    "Garden Grove, California",
    "Elk Grove, California",
    "Pembroke Pines, Florida",
    "Salem, Oregon",
    "Eugene, Oregon",
    "Peoria, Arizona",
    "Corona, California",
    "Springfield, Missouri",
    "Jackson, Mississippi",
    "Cary, North Carolina",
    "Fort Collins, Colorado",
    "Hayward, California",
    "Lancaster, California",
    "Alexandria, Virginia",
    "Salinas, California",
    "Palmdale, California",
    "Lakewood, Colorado",
    "Springfield, Massachusetts",
    "Sunnyvale, California",
    "Hollywood, Florida",
    "Pasadena, Texas",
    "Clarksville, Tennessee",
    "Pomona, California",
    "Kansas City, Kansas",
    "Macon, Georgia",
    "Escondido, California",
    "Paterson, New Jersey",
    "Joliet, Illinois",
    "Naperville, Illinois",
    "Rockford, Illinois",
    "Torrance, California",
    "Bridgeport, Connecticut",
    "Savannah, Georgia",
    "Killeen, Texas",
    "Bellevue, Washington",
    "Mesquite, Texas",
    "Syracuse, New York",
    "McAllen, Texas",
    "Pasadena, California",
    "Charleston, South Carolina",
    "Hampton, Virginia",
    "Surprise, Arizona",
    "Columbia, South Carolina",
    "Coral Springs, Florida",
    "Visalia, California",
    "Sterling Heights, Michigan",
    "Gainesville, Florida",
    "Cedar Rapids, Iowa",
    "New Haven, Connecticut",
    "Stamford, Connecticut",
    "Elizabeth, New Jersey",
    "Concord, California",
    "Thousand Oaks, California",
    "Kent, Washington",
    "Santa Clara, California",
    "Simi Valley, California",
    "Lafayette, Louisiana",
    "Topeka, Kansas",
    "Athens, Georgia",
    "Round Rock, Texas",
    "Hartford, Connecticut",
    "Norman, Oklahoma",
    "Victorville, California",
    "Fargo, North Dakota",
    "Berkeley, California",
    "Vallejo, California",
    "North Charleston, South Carolina",
    "Ventura, California",
    "Inglewood, California",
    "Pompano Beach, Florida",
    "Centennial, Colorado",
    "West Palm Beach, Florida",
    "Everett, Washington",
    "Richmond, California",
    "Clovis, California",
    "Billings, Montana",
    "Waterbury, Connecticut",
    "Broken Arrow, Oklahoma",
    "Lakeland, Florida",
    "West Covina, California",
    "Boulder, Colorado",
    "Wichita Falls, Texas",
    "El Cajon, California",
    "Rialto, California",
    "Lakewood, New Jersey",
    "Edison, New Jersey",
    "Davenport, Iowa",
    "South Bend, Indiana",
    "Woodbridge, New Jersey",
    "Las Cruces, New Mexico",
    "Vista, California",
    "Renton, Washington",
    "Sparks, Nevada",
    "Clinton, Michigan",
    "Allen, Texas",
    "Tuscaloosa, Alabama",
    "San Angelo, Texas",
    "Vacaville, California",
    "London, United Kingdom",
    "Manchester, United Kingdom",
    "Birmingham, United Kingdom",
    "Bristol, United Kingdom",
    "Dubai, United Arab Emirates",
    "Abu Dhabi, United Arab Emirates",
    "Istanbul, Turkey",
    "Bangkok, Thailand",
    "Zurich, Switzerland",
    "Stockholm, Sweden",
    "Barcelona, Spain",
    "Madrid, Spain",
    "Valencia, Spain",
    "Seoul, South Korea",
    "Singapore, Singapore",
    "Moscow, Russia",
    "Saint Petersburg, Russia",
    "Doha, Qatar",
    "Lisbon, Portugal",
    "Warsaw, Poland",
    "Oslo, Norway",
    "Auckland, New Zealand",
    "Amsterdam, Netherlands",
    "Luxembourg, Luxembourg",
    "Tokyo, Japan",
    "Osaka, Japan",
    "Rome, Italy",
    "Milan, Italy",
    "Venice, Italy",
    "Florence, Italy",
    "Tel Aviv, Israel",
    "Dublin, Ireland",
    "Budapest, Hungary",
    "Hong Kong, Hong Kong",
    "Athens, Greece",
    "Berlin, Germany",
    "Frankfurt, Germany",
    "Munich, Germany",
    "Hamburg, Germany",
    "Stuttgart, Germany",
    "Cologne, Germany",
    "Dusseldorf, Germany",
    "Nuremberg, Germany",
    "Paris, France",
    "Lyon, France",
    "Marseille, France",
    "Helsinki, Finland",
    "Copenhagen, Denmark",
    "Prague, Czech Republic",
    "Beijing, China",
    "Shanghai, China",
    "Toronto, Canada",
    "Vancouver, Canada",
    "Calgary, Canada",
    "Montreal, Canada",
    "Edmonton, Canada",
    "Ottawa, Canada",
    "Sao Paulo, Brazil",
    "Rio de Janeiro, Brazil",
    "Brussels, Belgium",
    "Vienna, Austria",
    "Sydney, Australia",
    "Melbourne, Australia",
    "Brisbane, Australia",
    "Perth, Australia"
  ];
  
const names = [
    "topspatial",
    "immigrantsigma",
    "learnedprocedure",
    "streamnotice",
    "weatherboardallagash",
    "rawbeefphoebe",
    "harmoniousgauze",
    "utterchicken",
    "obeisantbollihope",
    "padlockduality",
    "deformitylichfield",
    "crumbedonward",
    "pythonscroll",
    "brandydiplomas",
    "tamefossil",
    "unlovableunfunded",
    "sordqualifier",
    "keenlychocolate",
    "hannahrefinance",
    "filletssureness",
    "chloridesresource",
    "swoonedglorms",
    "termsavor",
    "murderdisastrous",
    "nustersstellar",
    "alumnirhyme",
    "insomniaby",
    "gafferbold",
    "debonairawkward",
    "empireprint",
    "mustardassist",
    "portionmuseum",
    "onslaughttrent",
    "samsonskelton",
    "detailsdelay",
    "debtorwolds",
    "puffsulfate",
    "unopenedmental",
    "zerosalacia",
    "impulsivebell",
    "cohesiveacting",
    "crossboo",
    "skierpassword",
    "larkjot",
    "cynonwork",
    "driverlunation",
    "refrigeratorundone",
    "fruitplubming",
    "strongounce",
    "puzzlinghelvetica",
    "threadresigned",
    "seatonwipeout",
    "appearancecish",
    "belatedcruttery",
    "lungcircus",
    "paragraphdiscussion",
    "jabberingnotation",
    "lichfieldtwillight",
    "southvisitor",
    "violetcolossal",
    "ununseptiumjegs",
    "scallionretrograde",
    "hotterslaptop",
    "blagcombustion",
    "stucksauna",
    "stabilityhumid",
    "entrylint",
    "missionneon",
    "baboonhide",
    "cancersounce",
    "nikkibagnet",
    "nosyfancied",
    "messagetyne",
    "anemicsettling",
    "faradachiness",
    "gooseoutlast",
    "civilflannel",
    "canolalanky",
    "signalcoaching",
    "remaketotally",
    "cabooseramrod",
    "sanktillsonburg",
    "hairgranitic",
    "flairheadbiddy",
    "anncityscape",
    "Mui",
    "Lucas",
    "Wesley",
    "Particia",
    "Adah",
    "Catherine",
    "Roxann",
    "Trinh",
    "Bryce",
    "Thomasena",
    "Hulda",
    "Kanesha",
    "Mariel",
    "Nathan",
    "Betsy",
    "Bertie",
    "Rheba",
    "Gilda",
    "Loree",
    "Sunny",
    "Brittny",
    "Branda",
    "Chae",
    "Laurence",
    "Leena",
    "Rachele",
    "Rene",
    "Shamika",
    "Marquerite",
    "Thi",
    "Verda",
    "Mindy",
    "Willodean",
    "Kendall",
    "Rhea",
    "Estelle",
    "Claudio",
    "Winona",
    "Saturnina",
    "Jerrica",
    "Susannah",
    "Sallie",
    "Margery",
    "Shawnta",
    "Bernarda",
    "Angle",
    "Julie",
    "Sharan",
    "Gordon",
    "Voncile",
    "Stevie",
    "Denver",
    "Vita",
    "Tom",
    "Florida",
    "Darci",
    "Eli",
    "Alida",
    "Tad",
    "Angila",
    "Preston",
    "Louetta",
    "Brigida",
    "Winston",
    "Mora",
    "Nikia",
    "Merna",
    "Irene",
    "Nery",
    "Juan",
    "Quinton",
    "Hipolito",
    "Cordell",
    "Rosamaria",
    "Imelda",
    "Elene",
    "Lamar",
    "Keila",
    "Melani",
    "Stephenie",
    "Rhiannon",
    "Janel",
    "Katelynn",
    "Aubrey",
    "Eve",
    "Felipe",
    "Kimberley",
    "Taina",
    "Carmela",
    "Ollie",
    "Margorie",
    "Sarai",
    "Shirl",
    "Reita",
    "Zoe",
    "Kamala",
    "Jenniffer",
    "Silvia",
    "Francoise",
    "Dara"
  ];
  
const activities = [
    "All Round",
    "Around Town",
    "Hiking",
    "Alpine Climbing",
    "Trekking",
    "Ice Climbing",
    "Rock Climbing",
    "Ski/Snowboard",
    "Running",
    "Training/Fitness",
    "Backcountry Skiing",
    "Travel/Commute",
    "Expedition",
    "Big Mountain Skiing",
    "Ski Alpinism",
    "Mixed Climbing",
    "Freeride & Freeride Touring",
    "Nordic/Snowshoeing"
  ]

const dates = [
    "06-24-17",
    "11-02-17",
    "08-20-16",
    "07-21-16",
    "08-16-18",
    "12-13-18",
    "10-23-16",
    "02-02-19",
    "01-26-19",
    "11-27-18",
    "11-12-16",
    "07-19-17",
    "03-18-18",
    "07-04-19",
    "02-14-18",
    "09-20-16",
    "09-23-16",
    "05-09-19",
    "07-09-17",
    "11-19-16",
    "01-16-17",
    "09-22-18",
    "10-03-16",
    "08-19-18",
    "10-31-18",
    "01-07-19",
    "01-08-16",
    "11-22-17",
    "03-09-19",
    "06-20-17",
    "10-21-17",
    "07-12-16",
    "09-21-16",
    "11-20-17",
    "12-03-18",
    "09-01-18",
    "03-20-17",
    "03-06-16",
    "11-10-16",
    "07-19-18",
    "11-25-17",
    "08-14-16",
    "04-27-18",
    "01-09-16",
    "06-23-18",
    "07-25-16",
    "10-13-16",
    "02-18-18",
    "03-23-16",
    "02-06-18",
    "03-23-19",
    "03-06-16",
    "01-10-16",
    "03-25-18",
    "03-07-18",
    "06-21-17",
    "05-31-18",
    "03-18-16",
    "11-21-17",
    "05-20-16"
]

var i = 0;
var prodid = 1

    
function write() {
    var ok = true;
    do {
        i++
        var question = `${i}|${prodid}|${faker.lorem.sentence().slice(0, -1)}?|${faker.lorem.sentences()}|${dates[Math.floor(Math.random() * dates.length)]}|${Math.floor(Math.random() * 6)}|${Math.floor(Math.random() * 6)}|${names[Math.floor(Math.random() * names.length)]}|${locations[Math.floor(Math.random() * locations.length)]}|${Math.floor(Math.random() * (75 - 18 + 1)) + 18}|${activities[Math.floor(Math.random() * activities.length)]}|${faker.lorem.sentences()}}\n`
        if(i === 24) {
            console.log('Woah, we\'re half way there')
        }
        if (i % 3 === 0) {
            prodid++
        }
        if (i === 48) {
            wStream.write(question, 'utf8', () => {
                wStream.end()
            });
        
        } else {
            ok = wStream.write(question, 'utf8');
        }
    } while (i < 48 && ok);
    if (i > 0) {
        wStream.once('drain', write);
    }
}
write()
