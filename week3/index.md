//Start
mongo or mongosh

//show Data
test> show dbs
BlackMoney  40.00 KiB
admin       40.00 KiB
config      72.00 KiB
local       40.00 KiB

//only using db which data base u selected will show
test> db

//select your Data base
test> use BlackMoney
switched to db BlackMoney
BlackMoney> db

// create collection
 ex.BlackMoney> db.createCollection('comments')
{ ok: 1 }
BlackMoney> show collections
comments
Money

// delete collections
BlackMoney> show collections
comments
Money
BlackMoney> db.comments.drop()
true
BlackMoney> show collections
Money


// find database
db.Money.find()

//show all rows in collections (only for mongoDB previous version < 6.0.1 )
db.Money.find().pretty()


//Insert single Row
db.Money.insertMany([{
    'name': 'abhay',
    'city': 'Nashik',
    'language': 'node.js'
}

//Insert many Rows
db.Money.insertMany([{
    'name': 'abhay',
    'city': 'Nashik',
    'language': 'node.js'
},
{
    'name': 'honey',
    'city': 'bombay',
    'language': 'react.js'    
},
{
    'name': 'bunny',
    'city': 'pune',
      'language': 'python.js'  
}])

//show all rows in database
db.Money.find()

// limit the num. of data
db.Money.find().limit(2 or 5)

//count num. of rows
db.Money.find().count()


//update rows
we can Use updateOne(), updateMany(), or bulkWrite.
 db.Money.updateOne({ name: 'abhay' }, {$set:{ 'name': 'abhay',
  'city': 'Nashik and Goa', 'language': 'node.js'
  }
})

{
  acknowledged: true,
  insertedId: null,
  matchedCount: 1,   //match found
  modifiedCount: 1,  //updated
  upsertedCount: 0
}

// if it's match then Update OR Add as new Data //{upsert:true} using only this.
  db.Money.updateOne({ name: 'simon' },
   {$set:
   { 'name': 'simon',
    'city': 'LasVegas',
    'language': 'c++.js'}
},{upsert:true})
{
  acknowledged: true,
  insertedId: ObjectId("6395c32c3d40b85fcae9e0b8"),
  matchedCount: 0,
  modifiedCount: 0,
  upsertedCount: 1      //added as new data
}

// DELETE single data

BlackMoney> db.Money.remove({name:'honey'})

DeprecationWarning: Collection.remove() is deprecated. Use deleteOne, deleteMany, findOneAndDelete, or bulkWrite.
{ acknowledged: true, deletedCount: 1 }
