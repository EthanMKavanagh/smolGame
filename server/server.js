
const express = require('express');
require('dotenv').config();

const app = express();
const bodyParser = require('body-parser');
const sessionMiddleware = require('./modules/session-middleware');

const passport = require('./strategies/user.strategy');

// Route includes
const userRouter = require('./routes/user.router');
const gamesRouter = require('./routes/games.router');
const teamRouter = require('./routes/team.router');
const playersRouter = require('./routes/players.router');
const individualPlayerRouter = require('./routes/individual.player.router');
const individualGameRouter = require('./routes/individual.game.router');

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Passport Session Configuration //
app.use(sessionMiddleware);

// start up passport sessions
app.use(passport.initialize());
app.use(passport.session());

/* Routes */
app.use('/api/user', userRouter);
app.use('/games', gamesRouter);
app.use('/team', teamRouter);
app.use('/players', playersRouter);
app.use('/individual/player', individualPlayerRouter);
app.use('/individual/game', individualGameRouter);

// Serve static files
app.use(express.static('build'));

// App Set //
const PORT = process.env.PORT || 5000;

/** Listen * */
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
