var consts = require('../consts');

var nationalIDRegExp = new RegExp('(?<birthCentury>[2-9])(?<birthYear>[0-9]{2})(?<birthMonth>0[1-9]|1[0-2])(?<birthDay>0[1-9]|[12][0-9]|3[01])(?<birthCity>0[1-4]|[1-2][1-9]|3[1-5]|88)(?<serialNumber>[0-9]{3})(?<gender>[1-9])(?<checksum>[0-9])');

class NationalID {
  
// allow birthCentury more than 2 for future proofing


  constructor(stringID) {

    // apply regex for format check
    var dissectedNatioalID = nationalIDRegExp.exec(stringID)

    if (dissectedNatioalID == null){

      return
    }

    // when they were born
    var identityCentury = Number(dissectedNatioalID.groups.birthCentury)
    var identityYear = 1900 + 100*(identityCentury-2) + Number(dissectedNatioalID.groups.birthYear)
    

    this.valid = true
    this.birthYear = identityYear
    this.birthMonth =  Number(dissectedNatioalID.groups.birthMonth)
    this.birthDay =  Number(dissectedNatioalID.groups.birthDay)
    this.birthCity =  consts.cityCodes[dissectedNatioalID.groups.birthCity]
    this.gender =  Number(dissectedNatioalID.groups.gender)%2==1 ?'Male':'Female'



  }


}

module.exports = NationalID;
