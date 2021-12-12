const express = require("express")
const app = express()

let heroes = require("../heroes.json")

const checkHero = (req, res, next) => {
    const { slug } = req.body
    console.log("slug:",slug)
    const existHero = heroes.find(hero => hero.slug === slug)
    console.log("existhero:", existHero)
    if (existHero) {
        res.status(409).send("cet héro existe déjà")
    } else {
        next()
    }
}

app.get("/", (req, res) => {
    res.json(heroes)
})

app.get("/:slug", (req, res) => {
    const { slug } = req.params
    // console.log(slug)
    const hero = heroes.find(e => e.slug === slug)
    // console.log(hero)
    res.json(hero)
})

app.get("/:slug/powers", (req, res) => {
    const { slug } = req.params
    // console.log(slug)
    const hero = heroes.find(e => e.slug === slug)
    // console.log(hero)
    const powers = hero.power.map(e => e)
    // console.log(powers)
    res.json(powers)
})

app.get("/:slug/powers/:power", (req, res) => {
    const { slug, power } = req.params
    // console.log(slug)
    // console.log(power)
    const hero = heroes.find(e => e.slug === slug)
    // console.log(hero)
    const powers = hero.power.map(e => e)
    // console.log(powers)
    const heroPower = powers.find( e => e === power)
    // console.log(heroPower)
    res.json(heroPower)
})

app.post("/", checkHero, (req, res) => {

    const hero = {
        ...req.body,
    }
    
    heroes = [...heroes, hero]
    // console.log(heroes)
    // res.status(200).send('un héro est crée')
    res.json(hero)
})

app.put("/:slug/powers", (req, res) => {
    const { slug } = req.params
    // console.log(slug)
    const hero = heroes.find(e => e.slug === slug)
    // console.log(hero)
    const power = req.body.power
    // console.log(power)   
    const newPower = [...hero.power, power]
    // console.log(newPower)  
    res.json(newPower)
})

app.delete("/:slug", checkHero, (req, res) => {
    const { slug } = req.params
    // console.log("slug:", slug)
    const indexHero = heroes.findIndex(hero => hero.slug === slug)
    // console.log("index:", index)
    heroes.splice(indexHero, 1)
    res.status(204).send("effacé correctement")
})

app.delete("/:slug/powers/:power", checkHero, (req, res) => {
    const { slug, power } = req.params
    // console.log("power:", power)
    const hero = heroes.find(hero => hero.slug === slug)
    // console.log("hero:", hero)
    const powerIndex = hero.power.findIndex(e => e === power)
    // console.log("powerindex:", powerIndex)
    hero.power.splice(powerIndex, 1)
    res.status(204).send("effacé correctement")
})

app.put("/:slug", (req, res) => {
    const { slug } = req.params
    // console.log("slug:", slug)
    const indexHero = heroes.findIndex(e => e.slug === slug)
    // console.log("hero:", indexHero)
    heroes[indexHero].slug = req.body.slug
    heroes[indexHero].name = req.body.name
    heroes[indexHero].power = req.body.power
    heroes[indexHero].color = req.body.color
    heroes[indexHero].isAlive = req.body.isAlive
    heroes[indexHero].age = req.body.age
    heroes[indexHero].image = req.body.image
    res.json( heroes[indexHero])
})


module.exports = app