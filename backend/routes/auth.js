const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");

//REGISTER
router.post("/signup", async (req, res) => {
  try {
    //generate a new password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    //create a new user
    const newUser = await new User({
      username: req.body.username,
      email: req.body.email,
      password: hashedPassword,
      desc:req.body.desc,
      followers:req.body.followers,
      following:req.body.following,
      from:req.body.from

    });

    //save user and return res
    const user = await newUser.save();
    res.status(200).json(user);
  } catch (err) {
    console.log(err);
  }
});

//LOGIN
router.post('/login',async(req,res)=>{
    try{
        const user =await User.findOne({email:req.body.email });
        !user && res.status(404).json("user not found");

        const validPassword = await bcrypt.compare(req.body.password,user.password)
        !validPassword && res.status(400).json("wrong password")
      res.status(200).json(user)
    }
    catch(err){
        res.status(500).json(err)
    }
   
})
module.exports = router;
