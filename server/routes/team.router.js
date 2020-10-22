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
                    VALUES ($1, $2, $3, $4);`;
  pool.query(queryString, [req.body.name, req.body.coach, req.body.image_url, req.body.bio])
    .then(result => {
      res.sendStatus(201);
    }).catch(err => {
      console.error('/team POST failed', err);
    });
});

module.exports = router;