let fs = require('fs');

function getBeers() {

    return new Promise((resolve, reject) => {
       
         fs.readFile("beers.txt", "utf8", (error, data) => {

            if (error != null) {
                reject(error)
                
                
            } else {
                resolve(data)
            }
        }) // if an error is caught, the results are rejected.
        //an error is rang up whereas if there is no error, the results are displayed.
        //these are the conditions set if either result occurs.
        
    })
   

}

module.exports = getBeers
//exporting allows for this module and its contents to be usable by the other files in the folder