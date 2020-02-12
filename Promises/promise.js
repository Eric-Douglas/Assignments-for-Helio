let getBeers = require('./fileio') //this let function is dependent on information on the other file

async function main() {


    getBeers()
        .then(result => {

            return JSON.parse(result)
        }) //JSON translates all the hexadecimals and text while parse reads it
        
        .then(objBeers => {
            console.log(objBeers[0])
            throw new Error("Your mother was a hamster and your father smelled of elderberries!")
        }) //throwing an error creates an error message, but will not stop the code from running
          // or being displayed
        
        .catch(error => {
            console.log(error)
        }) //catch will search for ANY error throughout the whole run

        .finally(() => {
            console.log("End Line")
        })//finally returns a promise when a promise is settled (either fulfilled or rejected)
        //finally helps with processing and cleanup

    let newBeers = await getBeers()
    
    console.log("New beers!")
    console.log(JSON.parse(newBeers)[1])
    
    console.log("End of Program")
}


main()