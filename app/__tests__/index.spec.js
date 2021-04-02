const request = require ('supertest');
const app = require('../index');

describe("Basic test", () => {
    test('test the hello route', async (done) => {
        try {
            // supertest fire up the app on an ephemeral port
            const response = await request(app).get("/hello")

            expect(response.status).toEqual(200)
            expect(response.text).toEqual("Hello Sonia")

            done()
        } catch (error) {
            console.log(`error ${error.toString()}`);
        }
    });
  });
