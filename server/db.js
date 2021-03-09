
var mongoose = require("mongoose");

mongoose.set("useFindAndModify", false);

mongoose.set("useCreateIndex", true);

mongoose
  .connect("mongodb://127.0.0.1/test1", {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => console.log("Database has connected!"));

mongoose.connection.on("connected", function () {
  console.log("Mongoose default connection open");
});

mongoose.connection.on("error", function (err) {
  console.log("Mongoose default connection disconnected");
});

mongoose.connection.on("disconnected", function () {
  console.log("Mongoose default connection disconnected");
});

process.on("SIGINT", function () {
  mongoose.connection.close(function () {
    console.log(
      "Mongoose default connection disconnected through app termination"
    );
    process.exit(0);
  });
});
