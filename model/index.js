const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://PdfCave2022:PdfCave@2022@pdfcavedatabase.i5mje.mongodb.net/PdfCaveDataBase?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    }
  )
  .then(() => {
    console.log("connected successfully !!");
  })
  .catch((error) => {
    console.log(error);
  });

const Book = require("./book.model");
