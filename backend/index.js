const express = require("express")
const app = express()
const port = 5000
const cors = require("cors")
const morgan = require("morgan")

app.use(express.json())
app.use(cors())
app.use(morgan('tiny'))


const heroes = require("./routes/heroes")

const log = (req, res, next) => {
    console.log("Vous avez reçu une requete")
    next()
}

app.use(log)
app.use("/heroes", heroes)

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})