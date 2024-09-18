import express from "express"
require('dotenv').config()
const app = express()



app.get('/', (req, res)=> {
    res.send("Server is ready")
})

// get a list of 5 jokes

app.get('/api/jokes', (req, res)=> {
    const jokes =  [
            {
                "id": 1,
                "title": "Knock-Knock Joke",
                "content": "Knock, knock. Who’s there? Lettuce. Lettuce who? Lettuce in, it’s freezing out here!"
            },
            {
                "id": 2,
                "title": "Programming Joke",
                "content": "Why do programmers prefer dark mode? Because light attracts bugs!"
            },
            {
                "id": 3,
                "title": "Dad Joke",
                "content": "Why did the scarecrow win an award? Because he was outstanding in his field!"
            },
            {
                "id": 4,
                "title": "Math Joke",
                "content": "Why was the equal sign so humble? Because it knew it wasn’t less than or greater than anyone else."
            },
            {
                "id": 5,
                "title": "Animal Joke",
                "content": "What do you call an alligator in a vest? An Investigator!"
            }
        ]

        res.send(jokes)
    
})

const port = process.env.PORT || 3000

app.listen(port, ()=> {
    console.log("Server is running on port 3000")
})