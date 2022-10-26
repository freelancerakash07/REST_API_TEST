
const {readFileSync, writeFileSync} = require('fs');
const path = require('path');


/**
 * @desc GET ALL USER
 * @name get / api/v1/user
 * @access public
 */


const getAllUser = (req, res) => {

  const user = JSON.parse(readFileSync(path.join(__dirname, '../db/userDb/user.json')));

  res.status(200).json(user)

}





/**
 * @desc create USER
 * @name post / api/v1/user
 * @access public
 */


const createUser = (req, res) => {

    // get from data value
   const {name, skil} = req.body ;

   // old data
   const user = JSON.parse(readFileSync(path.join(__dirname, '../db/userDb/user.json')));

   if(!name || !skil){
        res.status(400).json({
            message : "Name & Skil and require"
        })

   } else{

       // new data push for old data
   user.push({
    id : Math.floor(Math.random() * 1000000000).toString() ,
    name : name,
    skil : skil
   })
   
   writeFileSync(path.join(__dirname, '../db/userDb/user.json'), JSON.stringify(user))

   res.status(201).json({
    message : "student data created"
   })

   }




}











//module exprots 
module.exports = {
    getAllUser,
    createUser
}