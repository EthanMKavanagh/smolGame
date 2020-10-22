const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {rejectUnauthenticated, rejectUser} = require('../modules/authentication-middleware');

router.put('/:id', rejectUnauthenticated, rejectUser, (req, res) => {
  console.log('req.body', req.body);
  console.log('req.params', req.params);

    let queryString = `UPDATE "games" SET "name" = $1, "score" = $2, "touchdowns" = $3, 
                      "field_goals" = $4, "interceptions" = $5, "rushing_yards" = $6, 
                      "passing_yards" = $7, "receiving_yards" = $8, "isWin" = $9, "team_id" = $10
                      WHERE "id" = $11;`;
    pool.query(queryString, [req.body.name, req.body.score, req.body.touchdowns, req.body.field_goals, req.body.interceptions, req.body.rushing_yards, 
                            req.body.passing_yards, req.body.receiving_yards, req.body.isWin, req.user.team_id, req.body.id])
      .then(result => {
        console.log('PUT result', result);
        console.log('PUT .then success');
        res.sendStatus(200);
      }).catch(err => {
        console.error('/player PUT failed', err);
        res.sendStatus(500);
      });
  });

module.exports = router;
