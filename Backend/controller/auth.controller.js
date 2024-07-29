const { hashPassword, conparePassword } = require("../helper/auth.hash");
const UserModel = require("../model/user.model");
const jwt = require('jsonwebtoken');


const registerController =async (req,res)=>{
    try {
        const {name,address,password,email,phone}= req.body;
        // validation
        if(!name){
            return res.send({error:'name is require'})
        }
        if(!email){
            return res.send({error:'email is require'})
        }
        if(!address){
            return res.send({error:'address is require'})
        }
        if(!password){
            return res.send({error:'password is require'})
        }
        if(!phone){
            return res.send({error:'phone is require'})
        }
        
        // check user
        const existingEmain = await UserModel.findOne({email});

        // // validate user 
        if(existingEmain){
            return res.status(200).send({
                sucsess: true,
                message: " Already Register Please login "
            })
        }

        // hasing password 
        const hashedPassword = await hashPassword(password)
        const newUser = await new UserModel({name,email,phone,address,password:hashedPassword});
        const User = await newUser.save()
        res.status(200).send({
            sucsess:true,
            message: ' Congrege ! Register Sucsessfull',
            User
        })

    } catch (error) {
        console.log(error)
        res.status(500).send({
            sucsess:false,
            message:'Register not Sucsessfull',
            error
        })

    }
};

// LOGIN ROUTE
const loginController = async (req,res)=>{
    try {

        const {email , password} = req.body;
        // validation
        if(!email || !password){
            return res.status(404).send({
                sucsess:false,
                message:"invalid email and password"
            })
        };
        // check user
     const user = await UserModel.findOne({email});
     if(!user){
        return res.status(404).send({
            sucsess: false,
            message:'invalid Email'
        })
     }
    //  match password
       const match = await conparePassword(password, user.password);
       if(!match){
        return res.status(404).send({
            sucsess: false,
            message: "invalid password"
        })
       }
        
    //    genarate jwt token 
    const token = await jwt.sign({_id: user._id}, process.env.JWT_TOKEN, { expiresIn: '7d' });

    // get response
       res.status(200).send({
        sucsess:true,
        message:'login sucsess,',
        user:{
            name: user.name,
            email:user.email,
            phone:user.phone,
            address:user.address

        },
        token,
       });

    } catch (error) {
        console.log(error);
        console.log(error.message);
        res.status(500).send({
            sucsess:false,
            message: 'Error Login',
            error
        })
    }
}

// test trouters
const testController = (req,res)=>{
    res.status(201).send('Protected route');
}


module.exports= {registerController, loginController, testController}