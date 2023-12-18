const { UserModel, BookModel } = require("../models");





// -- GET ALL USER
// router.get("/", (req, res) => {
//   res.status(200).json({
//     success: true,
//     data: users,
//   });
// });

exports.getAllUsers = async (req, res) => {
  const users = await UserModel.find();
  if (users.length === 0) {
    return res.status(404).json({
      success: false,
      message: "no Users not found in Database",
    });
  }
  res.status(200).json({
    success: true,
    message: "All users information in Database",
    data: users,
  });
};






// --- GET A SINGLE USER BY ID
// router.get("/:id", (req, res) => {
//   // const  id  = req.params.id;
//   const { id } = req.params;
//   console.log(req.params);
//   const user = users.find((each) => each.id === id);
//   if (!user) {
//     return res.status(404).json({
//       success: false,
//       message: "User Doesn't Exist !!",
//     });
//   }
//   return res.status(200).json({
//     success: true,
//     message: "User Found",
//     data: user,
//   });
// });

exports.getSingleUserById = async (req, res) => {
  const { id } = req.params;
  const user = await UserModel.findById({ _id: id });

  if (!user) {
    return res.status(404).json({
      success: false,
      message: "User not found or exist with this id ..!!!",
    });
  }
  return res.status(200).json({
    success: true,
    message: "User found with this id ",
    data: user,
  });
};





// CREATING A NEW USER
// router.post("/", (req, res) => {
//     const { id, name, surname, email, subscriptionType, subscriptionDate } =
//       req.body;
  
//     const user = users.find((each) => each.id === id);
  
//     if (user) {
//       return res.status(404).json({
//         success: false,
//         message: "User With The ID Exists",
//       });
//     }
  
//     users.push({
//       id,
//       name,
//       surname,
//       email,
//       subscriptionType,
//       subscriptionDate,
//     });
  
//     return res.status(201).json({
//       success: true,
//       message: "User Added Succesfully",
//       data: users,
//     });
//   });

exports.createNewUser = async (req, res) => {

}














// UPDATING A USER
// router.put("/:id", (req, res) => {
//   const { id } = req.params;
//   const { data } = req.body;

//   const user = users.find((each) => each.id === id);
//   if (!user) {
//     return res.status(404).json({
//       success: false,
//       message: "User Doesn't Exist !!",
//     });
//   }
//   const updateUserData = users.map((each) => {
//     if (each.id === id) {
//       return {
//         ...each,
//         ...data,
//       };
//     }
//     return each;
//   });
//   return res.status(200).json({
//     success: true,
//     message: "User Updated !!",
//     data: updateUserData,
//   });
// });

exports.updateUserdata = async (req, res) => {
    const { id } = req.params;
    const { data } = req.body;
    const updateUserdata = await UserModel.findOneAndUpdate(
        {_id:id},
        {$set: {...data}},
        {new:true});

  return res.status(200).json({
    success: true,
    message: "User Updated !!",
    data: updateUserdata,
  });
};





// DELETING A USER BY ID
// router.delete("/:id", (req, res) => {
//   const { id } = req.params;
//   const user = users.find((each) => each.id === id);
//   if (!user) {
//     return res.status(404).json({
//       success: false,
//       message: "User Doesn't Exist !!",
//     });
//   }
//   const index = users.indexOf(user);
//   users.splice(index, 1);

//   return res
//     .status(200)
//     .json({ success: true, message: "Deleted User..", data: users });
// });
exports.deleteUser = async (req, res) => {
  const { id } = req.params;
  const user = await UserModel.deleteOne({ _id: id });
  if (!user) {
    return res.status(404).json({
      success: false,
      message: "User Doesn't Exist !!",
    });
  }

  return res .status(200).json({ 
    success: true, 
    message: "User Deleted..", 
    data: users, 
});
};
