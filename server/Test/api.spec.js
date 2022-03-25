const request = require("supertest");
const server = require('../server');

describe('API server', () => {
    let api

    beforeAll(() => {
        // start the server and store it in the api variable
        api = server.listen(5000, () => console.log('Test server running on port 5000'))
    })

    afterAll(done => { // `done` always gets passed in but if we want to use it, we must name it!
        // close the server, then run done
        console.log('Gracefully stopping test server')
        api.close(done) // `done` will be invoked when the `api.close` function is complete
    })


   // post tests

  it ('responds to get / with status 200', (done) => {
    request(api).get('/').expect(200, done);
  });



  it ('responds to non-existent paths with 404', (done) => {
    request(api).get('/no').expect(404, done);
  })



  //comment test

  it ('retrieves a comment by id with status 200', (done) => {
    request(api).get('/comment/1').expect(200).expect(["Sidar you should panic"], done);
    });

    it ('responds to get /comment/200 with status 500', (done) => {
        request(api).get('/comment/200').expect(500, done);
    });


    it ('responds to put /comment/7 with status 201', (done) => {
        request(api).put('/comment/7').send("posted comment").expect(201, done)
    })

    // reaction tests
    it ('responds to get specific happy reactions', (done) => {
        request(api).get('/1/happy/1').expect(200).expect({ reaction1: 0}, done);
    });

    it ('responds to get specific dizzy reactions', (done) => {
        request(api).get('/1/dizzy/1').expect(200).expect({ reaction2: 0}, done);
    });

    it ('responds to get specific angry reactions', (done) => {
        request(api).get('/1/angry/1').expect(200).expect({ reaction3: 0}, done);
    });

    it ('responds angry reaction increasing by 1', (done) => {
        request(api).patch('/1/angry/1').expect(201).expect({}, done);
    });

    it ('responds happy reaction increasing by 1', (done) => {
        request(api).patch('/1/happy/1').expect(201).expect({}, done);
    });

    it ('responds dizzy reaction increasing by 1', (done) => {
        request(api).patch('/1/dizzy/1').expect(201).expect({}, done);
    });

    it ('responds angry reaction decreasing by 1', (done) => {
        request(api).patch('/1/angry/2').expect(201).expect({}, done);
    });

    it ('responds happy reaction decreasing by 1', (done) => {
        request(api).patch('/1/happy/2').expect(201).expect({}, done);
    });

    it ('responds dizzy reaction decreasing by 1', (done) => {
        request(api).patch('/1/dizzy/2').expect(201).expect({}, done);
    });
})
