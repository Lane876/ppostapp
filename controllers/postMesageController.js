const express = require("express");
const PostMessage = require("../models/postMessage");
const router = express.Router();
const ObjectId = require("mongoose").Types.ObjectId;

router.get("/", (req, res) => {
  PostMessage.find((error, docs) => {
    if (!error) {
      res.send(docs);
    } else {
      console.log("Error while retriving");
    }
  });
});

router.post("/", (req, res) => {
  const newRecord = new PostMessage({
    title: req.body.title,
    message: req.body.message,
  });

  newRecord.save((error, docs) => {
    if (!error) {
      res.send(docs);
    } else {
      console.log("Error while creating");
    }
  });
});

router.put("/:id", (req, res) => {
  if (!ObjectId.isValid(req.params.id)) {
    return res.status(400).send("No record with given id" + req.params.id);
  }
  const updatedRecord = {
    title: req.body.title,
    message: req.body.message,
  };

  PostMessage.findByIdAndUpdate(
    req.params.id,
    { $set: updatedRecord },
    { new: true },
    (error, docs) => {
      if (!error) {
        res.send(docs);
      } else {
        console.log("Error while updating record");
      }
    }
  );
});

router.delete("/:id", (req, res) => {
  if (!ObjectId.isValid(req.params.id)) {
    return res.status(400).send("No record with given id" + req.params.id);
  }

  PostMessage.findByIdAndRemove(req.params.id, (error, docs) => {
    if (!error) {
      res.send(docs);
    } else {
      console.log("Error while deleteing record");
    }
  });
});

module.exports = router;
