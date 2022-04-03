const express = require("express");
const mongoose = require("mongoose");

const BookModel = mongoose.model("book");

const router = express.Router();

router.get("/add", (req, res) => {
  res.render("addBook");
});

router.post("/add", (req, res) => {
  var book = new BookModel();
  book.name = req.body.name;
  book.subject = req.body.subject;
  book.sem = req.body.sem;
  book.branch = req.body.branch;
  book.coverpage_url = req.body.coverpage_url;
  book.download_link = req.body.download_link;

  book.save((err, doc) => {
    if (err) {
      res.send(err);
    } else {
      res.render("addbook");
    }
  });
});

router.get("/allbooks", (req, res) => {
  BookModel.find((err, docs) => {
    if (err) {
      res.send("error");
    } else {
      res.json(docs);
    }
  });
});

router.get("/", (req, res) => {
  var branch = req.query.branch;
  var sem = req.query.sem;
  if (branch == "Branch/Stream") {
    BookModel.find({ sem: sem }, (err, docs) => {
      if (err) {
        res.send("error");
      } else {
        res.json(docs);
      }
    });
  } else if (sem == "Sem") {
    BookModel.find({ branch: branch }, (err, docs) => {
      if (err) {
        res.send("error");
      } else {
        res.json(docs);
      }
    });
  } else {
    BookModel.find({ branch: branch, sem: sem }, (err, docs) => {
      if (err) {
        res.send("error");
      } else {
        res.json(docs);
      }
    });
  }
});

router.get("/recentlyAdded", (req, res) => {
  BookModel.find((err, docs) => {
    if (err) {
      res.send("error");
    } else {
      res.json(docs);
    }
  })
    .sort({ inserted_by: -1 })
    .limit(9);
});

module.exports = router;
