// const app = require('../src/app');
// const request = require('supertest');
// const mongoose = require('mongoose');

// beforeAll(() => {
//     require('../src/database');
// });

// afterAll(done => {
//     // Closing the DB connection allows Jest to exit successfully.
//     mongoose.connection.close()
//     done();
// })


// describe('GET /categories', () => {
//     test('should respond with status 200 and an object', async () => {
//         const response = await request(app).get("/categories")
//             .expect('Content-Type', /json/)
//             .expect(200)

        
//         return response;
//     })
// })

// describe('/POST /categories', () => {
//     // deberia responder con un status code 201

//     test('Create task', async () => {
//         const response = await request(app).post("/categories").send({
//             name: 'cesar1'
//         })
//         .expect('Content-Type', /json/)
//         .then((response) => {
//             console.log(response.body);
//             expect(response.body.data.name).toBeDefined();
//             expect(response.statusCode).toBe(201);

//         })
//     })

//     // deberia responde con un content-type application/json

//     // test('should have a content-type application/json in header', async () => {
//     //     const response = await request(app).post("/categories").send();
//     //     expect(response.header['content-type']).toEqual(expect.stringContaining("json"));
//     // })

//     // deberia responder con un objecto y dentro la nueva categoria
// })

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