const express = require("express");

const recordRoutes = express.Router();
 
// This will help us connect to the database
const dbo = require("../db/conn");
 
// This help convert the id from string to ObjectId for the _id.

const Article = require("../modeles/articleSchema");

// This section will help you get a list of all the records.



recordRoutes.get('/record', (req, res) => {
  Article.find()
    .then((result) => {
      res.json(result)
    })
    .catch((err) => {
      console.log(err);
    });
})


 
// This section will help you get a single record by id



recordRoutes.get('/record/:id', (req, res) => {
  const id = req.params.id;
  Article.findById(id)
  .then((result) => {
    res.json(result)
  })
  .catch((err) => {
    console.log(err);
  });
})
 
// This section will help you create a new record.


recordRoutes.post("/record/add", async (req, res) => {
  const article = new Article(req.body);
 
  console.log(req.body);

  await article
    .save( )
    .then( result => {
      res.json(result);
    })
    .catch( err => {
      console.log(err);
    });
});
 
// This section will help you update a record by id.

 
// This section will help you delete a record


recordRoutes.delete("/:id", (req, res)=> {
  Article.findByIdAndDelete(req.params.id)

  .then((params)=> {
    res.json(params);
  })

  .catch((err)=> {
    console.log(err);
  });
});
 
module.exports = recordRoutes;