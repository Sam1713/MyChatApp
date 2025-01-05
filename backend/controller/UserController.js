import User from "../models/UserModel.js";
import bcryptjs from 'bcryptjs'

export const registerUser = async (req, res) => {
  console.log("rew", req.body);
  try {
    const { name, email, password,profilePic} = req.body;

    if (!name || !email || !password || !profilePic) {
      return res.status(404).json({ message: "All fields are required" });
    }
    const existedUser=await User.findOne({email})
    if(existedUser){
        return res.json({message:"Already registered User"})
    }
    console.log('haisd')

    const hashedPassword=bcryptjs.hashSync(password,10)

   console.log('ha',hashedPassword)
    const newUser=new User({
        name,
        email,
        password:hashedPassword,
        profilePic
    })
    console.log('ne',newUser)
    await newUser.save()
res.status(201).json({message:"User created Successfully",newUser})
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};
