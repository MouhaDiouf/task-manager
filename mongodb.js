const { MongoClient, ObjectID } = require("mongodb");
// const mongoClient = mongodb.MongoClient;
// const ObjectID = mongodb.ObjectID;

const connectionURL = "mongodb://127.0.0.1:27017";
const databaseName = "task-manager";

MongoClient.connect(
  connectionURL,
  { useNewUrlParser: true },
  (error, client) => {
    if (error) {
      return console.log("Unable to connect to database");
    }

    const db = client.db(databaseName);

    // db.collection("users").insertOne(
    //   {
    //     name: "Mouhamadou",
    //     age: 27,
    //   },
    //   (error, data) => {
    //     if (error) {
    //       return console.log("Unable to create user");
    //     }
    //
    //     console.log(data.log);
    //   }
    // );
    //
    // db.collection("users").findOne(
    //   {
    //     name: "Mouhamadou",
    //   },
    //   (error, user) => {
    //     if (error) {
    //       return console.log("unable to fetch");
    //     }
    //     console.log(user);
    //   }
    // );

    // db.collection("users")
    //   .find({ age: 27 })
    //   .toArray((error, users) => {
    //     console.log(users);
    //   });
    //
    // db.collection("users")
    //   .find({ age: 27 })
    //   .count((error, users) => {
    //     console.log(users);
    //   });
    //
    // db.collection("tasks").findOne(
    //   {
    //     _id: new ObjectID("60d0dfe5b11a0ad6bd13642c"),
    //   },
    //   (error, data) => {
    //     if (error) {
    //       return console.log(error);
    //     }
    //     console.log(data);
    //   }
    // );

    //   db.collection("tasks")
    //     .find({
    //       completed: true,
    //     })
    //     .toArray((error, tasks) => {
    //       console.log(tasks);
    //     });
    // }

    // const updatePromise = db.collection("users").updateOne(
    //   {
    //     _id: new ObjectID("60d0e2ee9932c0f0d58a5c32"),
    //   },
    //   {
    //     $inc: {
    //       age: 1,
    //     },
    //   }
    // );
    //
    // updatePromise
    //   .then((result) => {
    //     console.log(result);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });

    // const updatePromise = db.collection("tasks").updateMany(
    //   {
    //     completed: true,
    //   },
    //   {
    //     $set: {
    //       completed: false,
    //     },
    //   }
    // );
    //
    // updatePromise
    //   .then((result) => {
    //     console.log(result.modifiedCount);
    //   })
    //   .catch((error) => console.log(error));

    // db.collection("users")
    //   .deleteMany({
    //     age: 27,
    //   })
    //   .then((result) => {
    //     console.log(result);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });

    db.collection("tasks")
      .deleteOne({
        description: "First task",
      })
      .then((result) => console.log(result))
      .catch((error) => console.log(error));
  }
);
