const express = require('express')
const app = express()
const db = require('./utils/db')
const userRoute = require('./routes/user.route.js')
const cookieParser = require("cookie-parser")
const cors = require('cors')

require('dotenv').config()

const PORT = process.env.PORT || 4000
app.use(express.json())
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());
const corsOptions = {
    origin:'*',
    credentials:true
}
app.use(cors(corsOptions));


app.use("/api/v1/user", userRoute);
// app.use("/api/v1/company", companyRoute);
app.use('/', (req, res)=> {
    res.json({
        message: "The server is working now!"
    })
})

app.listen(PORT, ()=> {
    db()
    console.log(`The server is running on port ${PORT}`)
})