var NationalID = require('./models/NationalID')


var CRUDFunctions =
{

  processNationalIdentity: function (req, res) {
    var ret = {'error':null}
    var nationalIDString = req.params.id;

    // validate length before regex to avoid correct formats but with extra characters
    if (nationalIDString.length != 14) {

      // return an error
      console.log('error length = ', nationalIDString.length);
      ret['error'] = 'Wrong Length: ' + nationalIDString.length
      ret['extracted'] = {'valid':false}

    }
    else {

      nationalIDObject = new NationalID(nationalIDString)

      // if pattern not found
      if (! nationalIDObject.valid) {

        // return an error
        console.log('error bad format', nationalIDString);
        ret['error'] = 'Bad National ID Format'
        ret['extracted'] = {'valid':false}

      }
      else{

        
        // logical data check
        todaysYear = new Date().getFullYear()
        // when they issued their national ID
        validIdentityYear = nationalIDObject.birthYear + 16
        
        // if too young to have an ID
        if (validIdentityYear>todaysYear){
          
          // return an error
          console.log('error bad birth year', nationalIDString);
          ret['error'] = 'Bad Birth Year'
          ret['extracted'] = {'valid':false}

        }
        else{
          console.log('got valid ID',nationalIDString);
          
          // all ok
          ret['extracted'] = nationalIDObject
          
        }
      }
    }
    // send response
    res.status(200).send(ret)
  }
}

module.exports = CRUDFunctions;
