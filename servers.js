// Import dependencies
const express = require("express");
const app = express()

const PORT = 3000;

//Routes
// URI that responds to 'calc'
// Two Params, num1, and num2

app.get("/calc/:num1/:num2", (req, res) => {
    // We want to return the sum of the two numbers the user provide
    // Params are strings, so they must be converted into numbers either with ParesInt or numbers
    // If we try to send only a number in a response, that will be treated as a status code
    const sum = parseInt(req.params.num1) + (Number(req.params.num2))

    res.send("this is the sum " + sum)
})

//req.query

app.get("/foo", (req, res) => {
    // to add values to the query use the ? followed by key=value pairs
    // ?key=value, key2=value2
    console.log("req.query: ", req.query)
    res.send("you reached the bar")
})

// Get route
// 'calcquery' URI "calcquery": unknown word
// params num1, num2
app.get("/calcquery/:num1/:num2", (req, res) => {

    // create placeholders for params and query
    const num1 = parseInt(req.params.num1)
    const num2 = parseInt(req.params.num2)
    const opt = req.query.opt
    // handle is num1 and num2 are indeed numbers
    // if (typeof num1 === Nan || typeof num2 === Nan) {
    //     res.send('I am here')
    // }
    // Change the response based on the provided query param question
    if (opt === "add") {
        res.send(`the sum of ${num1} and ${num2} is ${num1 + num2}\n`)
    }

    if (opt === "sub") {
        res.send(`the difference of ${num1} and ${num2} is ${num1 - num2}\n`)
    }

    if (opt === "multi") {
        res.send(`the product of ${num1} and ${num2} is ${num1 * num2}\n`)
    }

    if (opt === "div") {
        res.send(`the quocient of ${num1} and ${num2} is ${num1 / num2}\n`)
    }
    // Handle is no operation is given

    if (!opt) {
        res.send(`provide query param of either add, sub, multi, div`)
    }
})  


//Listener
app.listen(PORT, () => console.log(`express is listening on port: ${PORT}`))