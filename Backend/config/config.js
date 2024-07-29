require('dotenv').config();
const DB_URL = "mongodb://localhost:27017/test";
const devlopment = {
    app:{
        port:process.env.PORT || 8080
    },
    db:{
        url:DB_URL
    }
}
module.exports = devlopment;