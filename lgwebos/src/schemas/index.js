var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
const options = {useUnifiedTopology: true};

async function mongod() {
    MongoClient.connect(url, options, function (err, db) {

        if (err) throw err;
        var dbo = db.db("Whatch");
        dbo.collection("Netflix upcoming").find({date: "August 10th"}).toArray(function (err, result) {

            if (err) throw err;

            console.log(result[0].data[0]);

            db.close();

        });
    });

}
await mongod();
