const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();


 // GET
router.get('/', (req, res) => {
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
router.put('/:id', (req, res) => {
  let queryString = `UPDATE "team" SET "name" = $1, "coach" = $2, "image_url" = $3, "bio" = $4;`;
  console.log('req.params', req.params);
  pool.query(queryString, [req.body.name, req.body.coach, req.body.image_url, req.body.bio])
    .then(result => {
      res.sendStatus(200);
    }).catch(err => {
      console.error('/team PUT failed', err);
      res.sendStatus(500);
    });
});

module.exports = router;