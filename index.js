console.log("server starts...");
require("dotenv").config();
const express = require("express");
// const cars = require("./mok/data");
const names = require("./mok/data2")

const app = express();

// app.get("/cars", (req, res, next) => {
//   console.log(++requests);
//   console.log(req.ip);
//   res.status(200).json(cars);
// });

// app.get("/cars/:model", (req, res, next) => {
//   const model = req.params.model;
//   let result = cars.filter(car => {
//     return car.model == model;
//   });
//   if (result.length > 0) {
//     res.json(result);
//   } else {
//     res.status(404).send("model not found!");
//   }
// });


app.get("/names/:name", (req, res, next) => {
  const name = req.params.name;
  let result = names.filter(user => {
    return user.name == name;
  });
  if (result.length > 0) {
    res.json(result);
  } else {
    res.status(404).send("name not found!");
  }
});



const port = process.env.PORT || 4500;

app.listen(port, () => {
  console.log(`api is running and listening to port ${process.env.PORT}`);
});
