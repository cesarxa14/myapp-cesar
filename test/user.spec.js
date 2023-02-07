const app = require('../src/app');
const request = require('supertest');
const mongoose = require('mongoose');

beforeAll(() => {
    require('../src/database');
});

afterAll(done => {
    // Closing the DB connection allows Jest to exit successfully.
    mongoose.connection.close()
    done();
})


describe('GET /users', () => {
    test('should respond with status 200', async () => {
        await request(app).get("/users")
            .then(response => {
                expect(response.statusCode).toBe(200)
            })
        
    });

    test('should respond with a object', async () => {
        await request(app).get("/users")
            .then(response => {
                console.log('marley', response.headers)
                expect(response.header['content-type']).toEqual(expect.stringContaining("json"))
                expect(response.body).toBeInstanceOf(Object);
            })
    })
})