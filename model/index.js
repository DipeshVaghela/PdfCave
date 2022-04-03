const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://PdfCave2022:PdfCave2@022@pdfcavedatabase.i5mje.mongodb.net/pdfcavedatabase?retryWrites=true&w=majority",
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
