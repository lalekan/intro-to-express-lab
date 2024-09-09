// Import Dependencies
const express = require("express")

const app = express()

const PORT = 3000

//Get route

//Problem 1
app.get('/greetings/:username', (req, res) => {

   const username = req.params.username
    res.send(`What a delight it is to see you once more, ${username}!`)
})

function randomInt(max) {
    return Math.floor(Math.random() * max)
}
 
// Problem 2
app.get('/roll/:number', (req, res) => {
    
    const number = parseInt(req.params.number)

    
    if (isNaN(number)) {

        res.send("You must provide a specific number")
    } else {
        res.send("you rolled: " + randomInt(number))
    }
})

// Problem 3
app.get('/collectibles/:index', (req, res) => {

    const collectibles = [
        { name: 'shiny ball', price: 5.95 },
        { name: 'autographed picture of a dog', price: 10 },
        { name: 'vintage 1970s yogurt SOLD AS-IS', price: 0.99 }
      ];

    const index = parseInt(req.params.index)

    if (isNaN(index)) {
        res.send("You must provide a specific number")

    } else if (index > collectibles.length) {
        res.send("This item is not yet in stock. Check back soon!")
    } else {
        res.send("So you want the " + collectibles[index].name + "? For " + collectibles[index].price + " it can be yours!")
    }
        
})

// Problem 4
app.get('/shoes', (req, res) => {

    const shoes = [
        { name: "Birkenstocks", price: 50, type: "sandal" },
        { name: "Air Jordans", price: 500, type: "sneaker" },
        { name: "Air Mahomeses", price: 501, type: "sneaker" },
        { name: "Utility Boots", price: 20, type: "boot" },
        { name: "Velcro Sandals", price: 15, type: "sandal" },
        { name: "Jet Boots", price: 1000, type: "boot" },
        { name: "Fifty-Inch Heels", price: 175, type: "heel" }
    ];
   
    let minPrice = req.query.minPrice
    let maxPrice = req.query.maxPrice
    let shoeType = req.query.shoeType
    let filtered = shoes

        console.log(minPrice, 'minnnnnnn')
        console.log(maxPrice, 'maxxxxxxx')
        console.log(shoeType, 'typeeeee')
        console.log(filtered, 'all Shoes')
    if (minPrice) {
        filtered = shoes.filter(shoe => shoe.price >= parseInt(minPrice))
    } if (maxPrice) {
        filtered = shoes.filter(shoe => shoe.price <= parseInt(maxPrice))
    } if (shoeType) {
        filtered = shoes.filter(shoe => shoe.type === shoeType)
    } 
   res.json(filtered)
})


// App Listener
app.listen(PORT, () => console.log(`Express is listening on port: ${PORT}`))
