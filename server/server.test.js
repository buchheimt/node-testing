const request = require('supertest');
const expect = require('expect');

const app = require('./server').app;

test('should return hello world response', done => {
  request(app)
    .get('/')
    .expect(res => {
      expect(res.body).toHaveProperty('error', 'Page not found.');
    })
    .end(done);
});

test('should return a 200 status code', done => {
  request(app)
    .get('/users')
    .expect(200)
    .end(done);
});

test('users array should contain my name', done => {
  request(app)
    .get('/users')
    .expect(res => {
      expect(res.body[0]).toHaveProperty('name', 'Tyler');
    })
    .end(done);
});

test('users array should contain my age', done => {
  request(app)
    .get('/users')
    .expect(res => {
      expect(res.body[0]).toHaveProperty('age', '26');
    })
    .end(done);
});