require('dotenv').config;

const devlopment = {
    app:{
        port:process.env.PORT || 8080
    },
    db:{
        url:process.env.DB_URL
    }
}
module.exports = devlopment;