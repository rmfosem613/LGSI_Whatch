var MongoClient = require('mongodb').MongoClient;
// import {MongoClient} from 'mongodb';
var url = "mongodb://localhost:27017/";
// const assert = require('assert');
// const url = 'mongodb+srv://whatchadmin:whatchadmin@cluster0.pmth6.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
const options = {useUnifiedTopology: true};

// MongoClient.connect(url, options, function (err, db) {
//
//     if (err) throw err;
//     var dbo = db.db("Whatch");
//     dbo.collection("Netflix upcoming").find({date: "August 10th"}).toArray(function (err, result) {
//
//         if (err) throw err;
//
//         console.log(result[0].data[0]);
//
//         db.close();
//     });
// });

async function mongod(callback) {
    const a = await MongoClient.connect(url, options);
    let c;
    try {
        c = await a.db("Whatch").collection("Netflix upcoming").find({}).toArray();
        const ret = [];
        const allData = c.map((data) => {
            const ret = [];
            const date = data.date;

            for (const datum of data.data) {
                const obj = {};
                obj.date = date;
                obj.title = datum.title;
                obj.description = datum.description;
                obj.poster = datum.poster;
                ret.push(obj);
            }
            return ret;

        });

        for (const dataAry of allData) {
            for (const data of dataAry) {
                ret.push(data);
            }
        }

        console.log(ret);
        // callback({data: ret});

        return c;
    } catch (err) {
        console.error(err);
    } finally {
        a.close();
    }

}

mongod();