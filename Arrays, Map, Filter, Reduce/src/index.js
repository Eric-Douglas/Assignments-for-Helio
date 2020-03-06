const Senators = require('./data/senators')


// Republicans
export const republicans = () => {
  let republicans = Senators.filter((senator) => {

    return senator.party === "Republican"
  })
  console.log("republicans", republicans)
  return republicans
}


// Democrats
export const democrats = () => {
  let democrats = Senators.filter((senator) => {

    return senator.party === "Democrat"
  })
  console.log("democrats", democrats)
  return democrats
}


// Independents
export const independents = () => {
  let independents = Senators.filter((senator) => {

    return senator.party === "Independent"
  })
  console.log("independents", independents)
  return independents
}


// Men
export const males = () => {
  let males = Senators.filter((senator) => {

    return senator.person.gender === "male"
  })
  console.log("male", males)
  return males
}


// Women
export const females = () => {
  let females = Senators.filter((senator) => {

    return senator.person.gender === "female"
  })
  console.log("female", females)
  return females
}


// Utah
export const byState = (state = 'UT') => {
  let Utah = Senators.filter((senator) => {

    return senator.state === "UT"
  })
  console.log("UT", Utah)
  return Utah
}


// Mapping
export const mapping = () => {
   return Senators.map(senator => {
    
    let results = {
      firstName: senator.firstName,
      lastName: senator.lastName,
      party: senator.party,
      gender: senator.person.gender
    }
    return results
  })
  
}


// Reduce
export const reducedCount = () => {

  return Senators.reduce((result, value) => {


    console.log(value)

    let party = value.party.toLowerCase()
    if (result.hasOwnProperty(party)) {


      result[party]++
    
    } else {

      result[party] = 1

    }
    console.log(result)
    return result
  }, {})

}

