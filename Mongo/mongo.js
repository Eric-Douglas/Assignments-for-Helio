const MongoClient = require('mongodb').MongoClient;
const ObjectId = require('mongodb').ObjectID

let client
function connect(objConnect){

    const uri = "mongodb+srv://DominusMortem:suomi31@cluster0-lqik5.mongodb.net/test?retryWrites=true&w=majority"
    
     client = new MongoClient(uri, {useNewUrlParser: true, useUnifiedTopology: true});
    return client.connect()
        .then (connection => {
       objConnect.usersCollection = connection.db("Helio").collection("users");
    })
    .catch(error => {
        throw new Error(error)
    })



}

function close() {
    client.close()
}

function create(objCreate){

    return objCreate.usersCollection.insertOne(objCreate.doc)


}

function readAll(objRead){
    return new Promise((resolve, reject) => {
        objRead.usersCollection.find({}).toArray(function (err, result){
            if (err) {
                reject(err);
            }
            resolve(result)
        })
    })
}

function readOne(objRead){

   return objRead.usersCollection.findOne({_id: ObjectId(objRead.id)})
}

function update(objUpdate){

    delete objUpdate.doc._id
    return objUpdate.usersCollection.updateOne({_id: ObjectId(objUpdate.id)}, {$set: objUpdate.doc})
}


function replace(objReplace){

    delete objReplace.doc._id
    return objReplace.usersCollection.replaceOne({_id: ObjectId(objReplace.id)}, objReplace.doc)
}
// Unable to use "delete" as a function name since it is a keyword already
function del(objDelete){

   return objDelete.usersCollection.deleteOne({_id: ObjectId(objRead.id)})
}

module.exports.connect = connect
module.exports.close = close
module.exports.create = create
module.exports.readAll = readAll
module.exports.readOne = readOne
module.exports.update = update
module.exports.replace = replace
module.exports.del = del