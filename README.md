# NationalIDValidator


### To run the app:
1. clone repo
2. run *npm install* to install dependencies
3. run *npm run test* to run the automated tests
4. run *npm start* or *node root.js* to start the app


### Resources consulted:
1. https://morecoding.wordpress.com/tag/egyptian-national-id-regex/
2. https://codereview.stackexchange.com/questions/221899/extract-information-from-egyptian-national-id
3. https://regexlib.com/REDetails.aspx?regexp_id=5305
4. https://glebbahmutov.com/blog/how-to-correctly-unit-test-express-server/


### Notes:
* Not enough reources were found as to how the checksum digit at the rightmost of the national identity is calculated, many algorithms were tested but none proved to be the one used
* Spaces and hyphens could be removed as an input cleaning process however it was decided they should be rejected instead
* The century digit on the leftmost of the national identity was allowed to increase more than *3* to allow for future proofing the app (at least untill the year 2699)
* Data returned from the API in JSON format was chosen to have two fields (*error* and *extracted.valid*) that always exist so as to facilitate usage at the receiver side
* Data sent to the API throught the URL using a GET request to allow for the most compatibility 
