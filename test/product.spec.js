const app = require('../src/app');
const request = require('supertest');
const mongoose = require('mongoose');

let token;
beforeAll(async () => {
    require('../src/database');
    const signin = await request(app).post("/auth/sign-in").send({
        username: "cesarxavi",
        password: "123456"
    });

    token = signin.body.token;
});

afterAll(done => {
    // Closing the DB connection allows Jest to exit successfully.
    mongoose.connection.close()
    done();
})


describe('GET /products', () => {
    test('should respond with status 200', async () => {
        await request(app).get("/products")
            .set('Authorization', `Bearer ${token}`)
            .then(response => {
                expect(response.statusCode).toBe(200);
            })  
    });

    test('should respond with a object', async () => {
        await request(app).get("/products")
            .set('Authorization', `Bearer ${token}`)
            .then(response => {
                expect(response.header['content-type']).toEqual(expect.stringContaining("json"))
                expect(response.body).toBeInstanceOf(Object);
            })
    })
})


describe('/PUT /products/{id}', () => {
    // deberia responder con un status code 200 y content-type json

    test('Expect status code 200 and content-type json', async () => {
        await request(app).put(`/categories/63d78072e6632f0a1c48b8e9`)
            .set('Authorization', `Bearer ${token}`)
            .send({
                name: 'roletest'
            })
            .expect('Content-Type', /json/)
            .then((response) => {
                expect(response.header['content-type']).toEqual(expect.stringContaining("json"));
                expect(response.statusCode).toBe(200);
            })
    })

    // deberia devolver un name y un active

    test('Expect name and active', async () => {
        await request(app).put("/products/63d876997e5cb1aafbdee660")
            .set('Authorization', `Bearer ${token}`)
            .send({
                name: 'roletest'
            })
            .expect('Content-Type', /json/)
            .then((response) => {
                expect(response.body.data).toBeDefined();
                expect(response.body.data.name).toBeDefined();
                expect(response.body.data.active).toBeDefined();

            })
    })

})

describe('/DELETE /products/{id}', () => {
    // deberia responder con un status code 200 y content-type json

    test('Expect status code 200 and content-type json', async () => {
        await request(app).delete(`/products/63d876997e5cb1aafbdee660`)
            .set('Authorization', `Bearer ${token}`)
            .then((response) => {
                expect(response.header['content-type']).toEqual(expect.stringContaining("json"));
                expect(response.statusCode).toBe(200);
            })
        })
})