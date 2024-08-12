const jwt = require('jsonwebtoken');
const User = require('../model/users');
const mongoose =require('mongoose')
const { use } = require('../routes/user');
const express=require('express')

const app=express()

const secret = 'COralie'; // Replace with your actual secret key

async function postUser(req, res) {
  try {
    console.log(req.body); // Log req.body to inspect its content

    const { firstname, lastname, email, age, phone, password,confirmPassword,height,weight } = req.body;

    // Create a new user instance
    const newUser = new User({
      firstname,
      lastname,
      email,
      height,
      weight,
      phone,
      password,
      confirmPassword
    });

    // Save the user to the database
    await newUser.save();

    // Generate JWT token
    const token = jwt.sign({ email,firstname, lastname}, secret, { expiresIn: '3d' });

    // Set token as a cookie
    res.cookie('token', token, { httpOnly: true });

    const db = mongoose.connection.db;
    const userCollection = email

    await db.createCollection(userCollection);

console.log(token)
    // Respond with a success message or any other response as needed
    res.status(200).json({ message: 'User registered successfully', token });

  } catch (err) {
    // Handle validation errors or other errors during registration
    console.error('Error registering user:', err);
    res.status(400).json({ error: err.message }); // Return specific error message
  }
}

async function getUser(req,res){
try {
  const token=req.cookies.token
  
  if(!token)
  {
    return res.status(401).json({ error: 'Unauthorized' });
  }
  const decoded = jwt.verify(token, secret);

  const user=await User.findOne({email:decoded.email})

  if(!user)
  {
    res.json({"Error":"no user found with this email"})
  }
  res.status(200).json({user})

} catch (error) {
  console.error('Error fetching user details:', err);
  res.status(400).json({ error: err.message });
}

}

module.exports={postUser,getUser}