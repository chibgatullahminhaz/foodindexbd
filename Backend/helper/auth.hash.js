const bcrypt = require('bcrypt');
const saltRounds = 10;

// bcrypt.hash(password, saltRounds, (err, hash)=>{
//     // Store hash in your password DB.
// });

// to hash password
const hashPassword = async (password)=>{
    try {
        return await bcrypt.hash(password,saltRounds)
        
    } catch (error) {
        console.log(error.messager)
        
    }
}

// bcrypt.compare(password, hash, (err, result)=>{
    
// });
// conpare password 
const conparePassword = async (password,hashPassword)=>{
return await bcrypt.compare(password, hashPassword)
}

module.exports ={hashPassword,
    conparePassword
}