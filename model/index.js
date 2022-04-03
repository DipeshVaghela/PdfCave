const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://PdfCave2022:9558900155@pdfcavedatabase2022.i5mje.mongodb.net/PdfCaveDataBase2022?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      // useCreateIndex: true,
      // useFindAndModify: false,
    }
  )
  .then(() => {
    console.log("connected successfully !!");
  })
  .catch((error) => {
    console.log(error);
  });

const Book = require("./book.model");
