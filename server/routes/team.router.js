const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {rejectUnauthenticated, rejectUser} = require('../modules/authentication-middleware');

 // GET
router.get('/', rejectUnauthenticated, (req, res) => {
  let queryString = 'SELECT * FROM "team" WHERE "id" = $1';
  pool.query(queryString, [req.user.team_id])
    .then(result => {
        res.send(result.rows);
    }).catch(err => {
        console.error('/team GET failed', err);
        res.sendStatus(500);
    });
});

// PUT
router.put('/:id', rejectUnauthenticated, rejectUser, (req, res) => {
  let queryString = `UPDATE "team" SET "name" = COALESCE($1, "name"), "coach" = COALESCE($2, "coach"), "image_url" = COALESCE($3, "image_url"), "bio" = COALESCE($4, "bio");`;
  pool.query(queryString, [req.body.name, req.body.coach, req.body.image_url, req.body.bio])
    .then(result => {
      res.sendStatus(200);
    }).catch(err => {
      console.error('/team PUT failed', err);
      res.sendStatus(500);
    });
});

// POST
router.post('/', rejectUnauthenticated, rejectUser, (req, res) => {
  let queryString = `INSERT INTO "team" ("name", "coach", "image_url", "bio")
                    VALUES ($1, $2, $3, $4) RETURNING *;`;
  pool.query(queryString, [req.body.name, req.body.coach, req.body.image_url, req.body.bio])
    .then(result => {
      console.log('result.rows', result.rows);
      let queryText = 'UPDATE "user" SET "team_id" = $1 WHERE "id" = $2;';
      pool.query(queryText, [result.rows[0].id, req.user.id])
        .then(result => {
          res.sendStatus(201);
        }).catch(err => {
          res.sendStatus(500);
          console.error('/team user POST failed', err);
        });
      res.sendStatus(201);
    }).catch(err => {
      res.sendStatus(500);
      console.error('/team POST failed', err);
    });
});


// router.post('/', rejectUnauthenticated, rejectUser, (req, res) => {
//   const client = await pool.connect();
//   const {name, coach, image_url, bio} = req.body;

//   try {
//     await client.query('BEGIN');

//     // What goes here
//     const firstPartQuery = 'INSERT INTO "team' ("???", "")
//     // To here?

//     await client.query('COMMIT')
//     res.sendStatus(201)
//   }catch(error) {
//     await client.query('ROLLBACK')
//     throw error
//   }finally {
//     client.release()
//   }
// })

module.exports = router;