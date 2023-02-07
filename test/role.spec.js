const app = require('../src/app');
const request = require('supertest');
const mongoose = require('mongoose');
const Role = require('../src/models/Role');


beforeAll(async () => {
    require('../src/database');
});

afterAll(done => {
    // Closing the DB connection allows Jest to exit successfully.
    mongoose.connection.close()
    done();
})

describe('GET /roles', () => {
    test('deberia responder con un content type application json y status 200', async () => {
        const response = await request(app).get("/roles")
            .expect('Content-Type', /json/)
            .then(response => {
                expect(response.statusCode).toBe(200);
            })

        
        return response;
    })
})

describe('POST /roles', () => {
    test('crear role', async () => {
        const response = await request(app).post("/roles").send({name: "Leder"})
            .expect('Content-Type', /json/)
            .then(response => {
                expect(response.statusCode).toBe(201);
            })

        
        return response;
    })
})


describe('/PUT /roles/{id}', () => {
    // deberia responder con un status code 200 y content-type json

    
    test('Expect status code 200 and content-type json', async () => {
        // const role = await Role.findOne();
        await request(app).put(`/roles/63d787d5550e6bc6939d1f6c`).send({
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
        // const role = await Role.findOne();
        await request(app).put(`/roles/63d787d5550e6bc6939d1f6c`).send({
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

describe('/DELETE /roles/{id}', () => {
    // deberia responder con un status code 200 y content-type json

    test('Expect status code 200 and content-type json', async () => {
        await request(app).delete(`/roles/63d787d5550e6bc6939d1f6c`)
        .then((response) => {
            expect(response.header['content-type']).toEqual(expect.stringContaining("json"));
            expect(response.statusCode).toBe(200);
        })
    })
})