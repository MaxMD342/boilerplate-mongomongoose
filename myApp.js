require('dotenv').config();
let mongoose = require('mongoose');
const MONGO_URI = process.env['MONGO_URI'];

const Schema = mongoose.Schema;

var personSchema = new Schema( {
  name: { type: String, requred: true},
  age: Number,
  favoriteFoods: [String],
})

var Person = mongoose.model('Person', personSchema);

const createAndSavePerson = (done) => {
  var PersonOne = new Person({
    name : "Max",
    age : 45,
    favoriteFoods : ["Meat", "Alcohol"]
  }) 
  PersonOne.save(function(err, data){
    if (err) return console.error(err);
    done(null, data)
  })
};

const createManyPeople = (arrayOfPeople, done) => {
  Person.create(arrayOfPeople, (err, data) =>{
    if(err){
      done(err);
    }
    done(null, data);
  })
};

const findPeopleByName = (personName, done) => {
  Person.find({name: personName}, function(err, peopleFound){
    if(err){
      done(err);
    }
    done(null, peopleFound);
  })
};

const findOneByFood = (food, done) => {
  Person.findOne({favoriteFoods: food}, function(err, data){
    console.log(food);
    console.log(data);
    if(err){
      done(err);  
    }
    done(null, data);
  })
};

const findPersonById = (personId, done) => {
  Person.findById({_id: personId}, function(err,data){
    console.log(personId);
    console.log(data);
    if(err){
      done(err);
    }
    done(null, data);
  })
};

const findEditThenSave = (personId, done) => {
  const foodToAdd = "hamburger";

  done(null /*, data*/);
};

const findAndUpdate = (personName, done) => {
  const ageToSet = 20;

  done(null /*, data*/);
};

const removeById = (personId, done) => {
  done(null /*, data*/);
};

const removeManyPeople = (done) => {
  const nameToRemove = "Mary";

  done(null /*, data*/);
};

const queryChain = (done) => {
  const foodToSearch = "burrito";

  done(null /*, data*/);
};

/** **Well Done !!**
/* You completed these challenges, let's go celebrate !
 */

//----- **DO NOT EDIT BELOW THIS LINE** ----------------------------------

exports.PersonModel = Person;
exports.createAndSavePerson = createAndSavePerson;
exports.findPeopleByName = findPeopleByName;
exports.findOneByFood = findOneByFood;
exports.findPersonById = findPersonById;
exports.findEditThenSave = findEditThenSave;
exports.findAndUpdate = findAndUpdate;
exports.createManyPeople = createManyPeople;
exports.removeById = removeById;
exports.removeManyPeople = removeManyPeople;
exports.queryChain = queryChain;

mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });