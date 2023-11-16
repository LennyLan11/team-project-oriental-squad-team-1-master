import express from 'express'
const router = express.Router();
import { check, validationResult } from 'express-validator';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import { auth } from '../../middleware/auth.js';
import User from '../../models/User.js';

router.get('/', auth, async (req,res)=> {
    try{
        const user = await User.findById(req.user.id).select('-password');
        res.json(user);
    } catch(err){
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

router.post('/',[
    
    check('email','Please include a valid email').isEmail(),
    check('password','Password is required').exists()
], 

async (req,res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()});
    }

    const { email, password } = req.body;

    try {
        let user = await User.findOne({email});

        if(!user){
            return res.status(400).json({errors: [{msg: 'Invalid Crendentials'}]});
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if(!isMatch){
            return res
            .status(400)
            .json({errors: [{msg: 'Invalid Crendentials'}]}); 
        }



        //Return jsonwebtoken
        const payload = {
            user:{
                id: user.id
            }
        }

        jwt.sign(
            payload,
            process.env.jwtSecret,
            { expiresIn:360000},
            (err,token) => {
                if(err)throw err;
                res.json({token});
            }
            );

    }catch(err){
        console.error(err.message);
        res.status(500).send('Server error... ');
    }
})

export default router;
