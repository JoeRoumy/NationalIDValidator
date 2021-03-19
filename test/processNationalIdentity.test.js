let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../root');
let should = chai.should();


chai.use(chaiHttp);

describe('Process national identity endpoint test', function(){
    
    
    it('it should return length error', function() {

        chai.request(server).get('/national-identity/298012101224568').end(function(err, res) {
                
            res.should.have.status(200);
            res.body.error.should.equal('Wrong Length: 15');
            res.body.extracted.valid.should.equal(false);

        });


        chai.request(server).get('/national-identity/2980121012245').end(function(err, res) {
                
            res.should.have.status(200);
            res.body.error.should.equal('Wrong Length: 13');
            res.body.extracted.valid.should.equal(false);

        });



    });



    it('it should return format error', function() {
        
        chai.request(server).get('/national-identity/29801410122456').end(function(err, res) {
                
            res.should.have.status(200);
            res.body.error.should.equal('Bad National ID Format');
            res.body.extracted.valid.should.equal(false);

        });


        chai.request(server).get('/national-identity/29801214122145').end(function(err, res) {
                
            res.should.have.status(200);
            res.body.error.should.equal('Bad National ID Format');
            res.body.extracted.valid.should.equal(false);

        });


        chai.request(server).get('/national-identity/29801214122105').end(function(err, res) {
                
            res.should.have.status(200);
            res.body.error.should.equal('Bad National ID Format');
            res.body.extracted.valid.should.equal(false);

        });



    });





    it('it should return logical year error', function() {
        
        chai.request(server).get('/national-identity/49801110122456').end(function(err, res) {
                
            res.should.have.status(200);
            res.body.error.should.equal('Bad Birth Year');
            res.body.extracted.valid.should.equal(false);

        });


        chai.request(server).get('/national-identity/30801212122145').end(function(err, res) {
                
            res.should.have.status(200);
            res.body.error.should.equal('Bad Birth Year');
            res.body.extracted.valid.should.equal(false);

        });



    });



    it('it should return valid national identity information', function() {
        
        chai.request(server).get('/national-identity/29801110122456').end(function(err, res) {

            res.should.have.status(200);
            should.not.exist(res.body.error);
            res.body.extracted.valid.should.equal(true);
            res.body.extracted.birthYear.should.equal(1998);
            res.body.extracted.birthMonth.should.equal(1);
            res.body.extracted.birthDay.should.equal(11);
            res.body.extracted.birthCity.should.equal('Cairo');
            res.body.extracted.gender.should.equal('Male');


        });


        chai.request(server).get('/national-identity/30110028822181').end(function(err, res) {
                
            res.should.have.status(200);
            should.not.exist(res.body.error);
            res.body.extracted.valid.should.equal(true);
            res.body.extracted.birthYear.should.equal(2001);
            res.body.extracted.birthMonth.should.equal(10);
            res.body.extracted.birthDay.should.equal(2);
            res.body.extracted.birthCity.should.equal('Foreign');
            res.body.extracted.gender.should.equal('Female');


        });



    });



});
    
    
    






server.close();
