const mongoose =require('mongoose')

const connect=async(url)=>{
  try {
await mongoose.connect(url)
    console.log('connected to mongoDb')
  } catch (error) {
    console.log("couldn't connect to mongoDb")
  }
}
module.exports=connect