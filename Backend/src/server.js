require('dotenv').config();
const { config } = require('dotenv');
const app = require("./app");
const PORT = 3001;



app.listen(PORT, ()=>{
    console.log(`Server is running at http://localhost:${PORT}`)
})
