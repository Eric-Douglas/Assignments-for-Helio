const Senators = require('./data/senators')


const republicans = () => {
    let republicans = Senators.filter((senator) => {
    
       return senator.party === "Republican"
    })
    console.log("republicans", republicans )
      return republicans
  }

republicans()

  const democrats = () => {
  return REPLACE_ME_WITH_CODE
}

  const independents = () => {
  return REPLACE_ME_WITH_CODE
}

  const males = () => {
  return REPLACE_ME_WITH_CODE
}

  const females = () => {
  return REPLACE_ME_WITH_CODE
}

  const byState = (state = 'UT') => {
  return REPLACE_ME_WITH_CODE
}

  const mapping = () => {
  return REPLACE_ME_WITH_CODE
}

 const reducedCount = () => {
  return REPLACE_ME_WITH_CODE
}


const REPLACE_ME_WITH_CODE = false
