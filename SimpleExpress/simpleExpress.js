let express = require('express')

// creation of our express app
let app=express()

app.set('view engine', 'ejs')
app.use(express.static('public'))

app.get('/profile',(req, res) => {

    res.render("profile", {data: "a test"})

})


let server = app.listen(3000,() => {})