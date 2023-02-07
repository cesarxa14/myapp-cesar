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


describe('GET /categories', () => {
    test('should respond with status 200', async () => {
        await request(app).get("/categories")
            .then(response => {
                expect(response.statusCode).toBe(200)
            })
        
    });

    test('should respond with a object', async () => {
        await request(app).get("/categories")
            .then(response => {
                console.log('marley', response.headers)
                expect(response.header['content-type']).toEqual(expect.stringContaining("json"))
                expect(response.body).toBeInstanceOf(Object);
            })
    })
})

describe('/POST /categories', () => {
    // deberia responder con un status code 201 y content-type json

    test('Create category', async () => {
        await request(app).post("/categories").send({
            name: 'categorytest'
        })
        .expect('Content-Type', /json/)
        .then((response) => {
            expect(response.header['content-type']).toEqual(expect.stringContaining("json"));
            expect(response.statusCode).toBe(201);
        })
    })

    // deberia devolver un name y un active

    test('After create category get data, name and active', async () => {
        await request(app).post("/categories").send({
            name: 'categorytest'
        })
        .expect('Content-Type', /json/)
        .then((response) => {
            // console.log(response.body);
            expect(response.body.data).toBeDefined();
            expect(response.body.data.name).toBeDefined();
            expect(response.body.data.active).toBeDefined();

        })
    })

})


describe('/PUT /categories/{id}', () => {
    // deberia responder con un status code 200 y content-type json

    test('Expect status code 200 and content-type json', async () => {
        await request(app).put(`/categories/63d8762e066236807c814a1b`).send({
            name: 'categorytest'
        })
        .expect('Content-Type', /json/)
        .then((response) => {
            expect(response.header['content-type']).toEqual(expect.stringContaining("json"));
            expect(response.statusCode).toBe(200);
        })
    })

    // deberia devolver un name y un active

    test('Expect name and active', async () => {
        await request(app).put("/categories/63d8762e066236807c814a1b").send({
            name: 'categorytest'
        })
        .expect('Content-Type', /json/)
        .then((response) => {
            console.log(response.body);
            expect(response.body.data).toBeDefined();
            expect(response.body.data.name).toBeDefined();
            expect(response.body.data.active).toBeDefined();

        })
    })

})

describe('/DELETE /categories/{id}', () => {
    // deberia responder con un status code 200 y content-type json

    test('Expect status code 200 and content-type json', async () => {
        await request(app).delete(`/categories/63d8762e066236807c814a1b`)
        .then((response) => {
            expect(response.header['content-type']).toEqual(expect.stringContaining("json"));
            expect(response.statusCode).toBe(200);
        })
    })

    // deberia devolver un name y un active

})