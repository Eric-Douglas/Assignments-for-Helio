var express = require('express');
var router = express.Router();
const db = require('../../../db/mongoose')


/* routes */
router.get('/', function (req, res, next) {

  let readObj = {
    usersCollection: req.app.locals.usersCollection
  }

  db.readAll(readObj)
    .then(response => {
      res.json(response)

    })
    .catch(error => {
      console.log(error)
      res.status(500).json(error)
    })
})


router.get('/:id', function (req, res, next) {

  let readObj = {
    id: req.params.id,
    usersCollection: req.app.locals.usersCollection
  }

  db.readOne(readObj)
    .then(response => {
      res.json(response)

    })
    .catch(error => {
      res.status(500).json(error)
    })
})

router.post('/signup', function (req, res, next) {

  let createObj = {
    doc: req.body,
    usersCollection: req.app.locals.usersCollection
  }
  db.create(createObj)
    .then(response => {
      res.json(response)
    })
    .catch(error => {
      res.status(500).json(error)
    })

})

/* another update */
router.put('/:id', function (req, res, next) {
  let putObj = {
    id: req.params.id,
    doc: req.body,
    usersCollection: req.app.locals.usersCollection
  }

  db.readOne(putObj)
    .then(response => {

      if (response == null) {
        db.create(putObj)

      } else {
        db.replace(putObj)
          .then(response => {
            db.readOne(putObj)
            .then(readRes => {
              res.json(readRes)
            }) 
           
          })
          .catch(error => {
            console.log(error)
          })
      }


    })
    .catch(error => {
      console.log(error)
      res.status(500).json(error)
    })
})

// login
router.post('/login', function (req, res, next){
    // to do
    // convert function to authenticate from db
    console.log("post")
    // temporary code
    if (req.body.password === 'password1234') {
      res.json({fName: "Joe", lName: "Volcano"})
    } else {
      res.json({})
    }
})

/* update route */
router.patch('/:id', async function (req, res, next) {

  let patchObj = {
    id: req.params.id,
    doc: req.body,
    usersCollection: req.app.locals.usersCollection
  }
  try {

    // check for one to update
    let response = await db.readOne(patchObj)

    // if no record is found
      if (response == null) {

        throw new Error("Not Found")

      } else {
        
        // update the one we find
         await db.update(patchObj)
          
        res.json(await db.readOne(patchObj))
        }
          
      } catch(error) {
        console.log(error)  
        res.status(500).json(error)
          }
     

})
/* end of update */

/* delete */
router.delete('/:id', function (req, res, next) {
  let deleteObj = {
    id: req.params.id,
    usersCollection: req.app.locals.usersCollection
  }
  db.del(deleteObj)
    .then(response => {

      if (response.deletedCount == 1) {
        res.json({})
      }
      throw new Error("Not deleted")

    })
    .catch(error => {
      res.status(500).json(error)
    })
});

/* end of delete */

/* retrieve */
router.get('/retrieve', function (req, res, next) {
  res.render('retrieve', { users, response: "" })
});

router.post('/retrieve', function (req, res, next) {
  let response = ""
  let foundUserIndex = users.findIndex((user) => {
    let rtnVal = false
    if (req.body.email.toLowerCase() == user.email.toLowerCase()) {
      rtnVal = true
    }
    return rtnVal
  })
  if (foundUserIndex != -1) {

    response = users[foundUserIndex].password
  }
  res.render('retrieve', { users, response })
});
/* end of retrieve */
/* end of routes. */

router.post('/', function (req, res, next) {
  let user = req.body
  user.id = users.length
  users.push(user)
  res.json(users[user.id])
});




module.exports = router;