var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/sheauxrtleighdb');

var database = mongoose.connection;

database.on("error",console.error.bind(console,"housTOn we have proBLEm: "));

database.once("open",function(){
  console.log("i peeped a hammer and opened mongo");
});

      // link.string('url', 255);
      // link.string('base_url', 255);
      // link.string('code', 100);
      // link.string('title', 255);
      // link.integer('visits');
      // user.string('username', 100).unique();
      // user.string('password', 100);

module.exports = db;
