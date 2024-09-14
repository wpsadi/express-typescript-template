import express from "express"


const app = express() 
// console.log('app.ts') 

app.get("/", (req, res) => {
  res.send("A Code template made to make express development easier with typescript and automatically loading the variables from .env file")
})

export default app 