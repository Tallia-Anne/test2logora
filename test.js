let chai = require("chai");
let chaiHttp = require("chai-http");
let server = require("./server");

chai.should();

chai.use(chaiHttp());

describe('POST /api/moderation/score', () => {
    it('It should POST a new score', (done) => {
        chai.request(server)
            .post('/api/moderation/score')
            .send({ text: 'Sample text', language: 'en' })
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.have.property('score');
                done();
            });
    });
    
    it('It should POST a new prediction', (done) => {
        chai.request(server)
            .post('/api/moderation/predict')
            .send({ text: 'Sample text', language: 'en' })
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.have.property('prediction');
                done();
            });
    });
    
});
