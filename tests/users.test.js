process.env.TEST === true;

const supertest = require('supertest');
const app = require('../server/server');
const agent = supertest.agent(app);
const pool = require('../server/modules/pool');

describe('Updating a team', () => {
    let user;

    // BeforeEach
    beforeEach(async() => {
        await pool.query('DELETE from "user"');

        let registerRes = await agent
            .post('/api/user/register')
            .send({
                username: 'CoachEthan',
                password: 'testpass'
            });
        expect(registerRes.statusCode).toBe(201);
        user = registerRes.body;
        expect(user.username).toBe('CoachEthan');

        let registerTeam = await agent
            .post('/team')
            .send({
                name: 'Wildcats',
                coach: 'Ethan Kavanagh',
                image_url: 'https://images.unsplash.com/photo-1566577739112-5180d4bf9390?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
                bio: `We are the Wildcats. Born and raised in the heart of Chisago Lakes, we do not play lightly. Football isn’t a hobby, it’s a lifestyle. Before 
                     playing us, you better practice up because we are some of the roughest and toughest players in Chisago county! SQUAD UP!`
            });
        expect(registerTeam.statusCode).toBe(201);
        user = registerTeam.body;
        expect(user.name).toBe('Wildcats');

        let loginRes = await agent
            .post('./api/user/login')
            .send({ username: 'CoachEthan', password: 'testpass'});
        expect(loginRes.statusCode).toBe(200);
    }); // end beforeEach

    // LOGGED IN test
    test('should fail if you\'re not logged in', async() => {
        let logoutRes = await agent
            .post('/api/user/logout');
        expect(logoutRes.statusCode).toBe(200);

        let getRes = await agent
            .get('/api/user')
        expect(getRes).toBe(403);
    }); // end test

    // ADMIN test
    test('should only allow ADMINS', async() => {
        let postRes = await agent
            .post('./players')
            .send({
                name: 'Nick Kavanagh',
                age: 13,
                number: 48,
                position: 'S',
                height: 4.10,
                weight: 90,
                team_id: 1
            });
        expect(postRes.statusCode).toBe(200);
    }); // end test
});