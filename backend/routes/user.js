const router = require("express").Router();
const bcrypt = require("bcrypt")
const User = require('../models/User')


//UPDATE user
router.put("/:id", async(req, res)=>{
    if(req.body.userId === req.params.id|| req.user.isAdmin){
     if(req.body.password){
        try{
 const salt = await bcrypt.genSalt(10);
 req.body.password = await bcrypt.hash(req.body.password,salt)

        }
        catch(err){
            return res.status(500).json(err)

        }
     }
     try{
    const user = await User.findByIdAndUpdate(req.params.id,{
        $set:req.body,
    },
    { new: true }
    )
    res.status(200).json(user)
     }
     catch(err){
     res.status(500).json(err);
     }
    }else{
        return res.status(403).json("you can update only your account")
    }
})


//DELETE user
router.delete("/:id", async(req, res)=>{
    if(req.body.userId === req.params.id|| req.body.isAdmin){
     
     try{
        // const user = await User.findById(req.params.id)
     await User.findByIdAndDelete(req.params.id)
    res.status(200).json("You have been deleted you account successfully.")
     }
     catch(err){
     res.status(500).json(err);
     }
    }else{
        return res.status(403).json("you can update only your account")
    }
})
//GET a user

router.get("/:id", async(req,res)=>{
    try{
        const user = await User.findById(req.params.id);
        const {password,updatedAt,...other} = user._doc//other variable contains all of the remaining properties from the _doc object.
        res.status(200).json(other)
    }
    catch(err){
        res.status(500).json(err)
    }
})
//follow a user

router.put("/:id/follow", async(req,res)=>{
    if(req.body.userId !== req.params.id){
    try{
     const user = await User.findById(req.params.id)
     const currentUser = await User.findById(req.body.userId);
     if(!user.followers.includes(req.body.userId)){
    await user.updateOne({$push:{followers:req.body.userId}})
    await currentUser.updateOne({$push:{following:req.params.id}})
    res.status(200).json("user has been followed")
     }else{
        res.status(403).json("you already follow this user")
     }
    }
    
    catch(err){
        res.status(500).json(err)
    }
    }
    else{
        res.status(403).json("You cant follow yourself")
    }
})
//unfollow  a user

router.put("/:id/unfollow", async(req,res)=>{
    if(req.params.id !== req.body.userId){
     try{
        const user = await User.findById(req.params.id);
        const currentUser = await User.findById(req.body.userId);
        if(user.followers.includes(req.body.userId)){
            await user.updateOne({$pull:{followers:req.body.userId}})
            await currentUser.updateOne({$pull:{following:req.params.id}})
            res.status(200).json("user has been unfollowed")
             }else{
                res.status(403).json("you have already unfollowed this user")
             }
     }
     catch(err){
        res.status(500).json(err)
     }
    }
    else{
        res.status(403).json("You cant unfollow yourself")
    }
})


module.exports = router