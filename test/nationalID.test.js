var should = require('chai').should();
var NationalID = require('../models/NationalID')


describe('NationalID object test', function(){

    it('should return empty object on bad centruy format', function() {
        nationalIDString = '09911220112314'
        nationIDObject = new NationalID(nationalIDString)
        should.not.exist(nationIDObject.birthMonth);

        nationalIDString = '19911220112314'
        nationIDObject = new NationalID(nationalIDString)
        should.not.exist(nationIDObject.birthMonth);
    });
    

    it('should return empty object on bad month format', function() {
        nationalIDString = '29913220112314'
        nationIDObject = new NationalID(nationalIDString)
        should.not.exist(nationIDObject.birthMonth);

        nationalIDString = '29930220112314'
        nationIDObject = new NationalID(nationalIDString)
        should.not.exist(nationIDObject.birthMonth);

        nationalIDString = '29900220112314'
        nationIDObject = new NationalID(nationalIDString)
        should.not.exist(nationIDObject.birthMonth);
    });
    


    it('should return empty object on bad day format', function() {
        nationalIDString = '29911350112314'
        nationIDObject = new NationalID(nationalIDString)
        should.not.exist(nationIDObject.birthMonth);

        nationalIDString = '29911000112314'
        nationIDObject = new NationalID(nationalIDString)
        should.not.exist(nationIDObject.birthMonth);
    
        nationalIDString = '29911400112314'
        nationIDObject = new NationalID(nationalIDString)
        should.not.exist(nationIDObject.birthMonth);
    
    });


    it('should return empty object on bad city format', function() {
        nationalIDString = '29911220612314'
        nationIDObject = new NationalID(nationalIDString)
        should.not.exist(nationIDObject.birthMonth);

        nationalIDString = '29911221012314'
        nationIDObject = new NationalID(nationalIDString)
        should.not.exist(nationIDObject.birthMonth);

        nationalIDString = '29911223612314'
        nationIDObject = new NationalID(nationalIDString)
        should.not.exist(nationIDObject.birthMonth);

        nationalIDString = '29911224012314'
        nationIDObject = new NationalID(nationalIDString)
        should.not.exist(nationIDObject.birthMonth);


    });



    it('should return empty object on bad gender format', function() {
        nationalIDString = '29911220112304'
        nationIDObject = new NationalID(nationalIDString)
        should.not.exist(nationIDObject.birthMonth);

    });


    it('should return a valid object', function() {
        nationalIDString = '29911220112314'
        nationIDObject = new NationalID(nationalIDString)
        should.equal(nationIDObject.valid,true);
        should.equal(nationIDObject.birthYear,1999);
        should.equal(nationIDObject.birthMonth,11);
        should.equal(nationIDObject.birthDay,22);
        should.equal(nationIDObject.birthCity,'Cairo');
        should.equal(nationIDObject.gender,'Male');


        nationalIDString = '30104301112348'
        nationIDObject = new NationalID(nationalIDString)
        should.equal(nationIDObject.valid,true);
        should.equal(nationIDObject.birthYear,2001);
        should.equal(nationIDObject.birthMonth,4);
        should.equal(nationIDObject.birthDay,30);
        should.equal(nationIDObject.birthCity,'Damietta');
        should.equal(nationIDObject.gender,'Female');


        nationalIDString = '28407158812381'
        nationIDObject = new NationalID(nationalIDString)
        should.equal(nationIDObject.valid,true);
        should.equal(nationIDObject.birthYear,1984);
        should.equal(nationIDObject.birthMonth,7);
        should.equal(nationIDObject.birthDay,15);
        should.equal(nationIDObject.birthCity,'Foreign');
        should.equal(nationIDObject.gender,'Female');

    }); 



});


