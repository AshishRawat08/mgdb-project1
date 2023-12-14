const { BookModel, UserModel } = require("../models/index");

// const getAllBooks =  () => {};
// const getSingleBookById =  () => {};
// module.exports = { getAllBooks, getSingleBookById };

// direct export
exports.getAllBooks =  async(req, res) => {
    const books = await BookModel.find();

    if (books === 0){
        return res.status(404).json({
            success : false,
            message : "No book found",
        });
    }
    return res.status(200).json({
        success : true,
        message : "All books are here",
        data : books,
    });
};

// router.get("/:id", (req, res) => {
//   const { id } = req.params;
//   const book = books.find((each) => each.id === id);

//   if (!book) {
//     return res.status(404).json({
//       success: false,
//       message: "Book Not Found",
//     });
//   }
//   return res.status(200).json({
//     success: true,
//     message: "Found The Book By Their Id",
//     data: book,
//   });
// });
exports.getSingleBookById =  async(req, res) => {
    const { id } = req.params;
    const book = await Bookmodel.findById(id);

    
  if (!book) {
    return res.status(404).json({
      success: false,
      message: "Book Not Found",
    });
  }
  return res.status(200).json({
        success: true,
        message: "Found The Book By Their Id",
        data: book,
      });  
};


// router.get("/issued/by-user", (req, res) => {
//     const usersWithTheIssuedBook = users.filter((each) => {
//       if (each.issuedBook) return each;
//     });
//     const issuedBooks = [];
  
//     usersWithTheIssuedBook.forEach((each) => {
//       const book = books.find((book) => book.id === each.issuedBook);
  
//       book.issuedBy = each.name;
//       book.issuedDate = each.issuedDate;
//       book.returnDate = each.returnDate;
  
//       issuedBooks.push(book);
//     });
//     if (issuedBooks.length === 0) {
//       return res.status(404).json({
//         success: false,
//         message: "No Book Have Been Issued Yet..",
//       });
//     }
//     return res.status(200).json({
//       success: true,
//       message: "Users With The Issued Books...",
//       data: issuedBooks,
//     });
//   });

exports.getAllIssuedBooks = async(req, res) => {
        const users = await Usermodel.find({
            issuedBook :{$exists : true}
        }).populate("issuedBook");

        // DTO --- DATA TRANSFER OBJECT

       // const issuedBooks = users.map((each) = > new issuedBook(each))

            if (issuedBooks.length === 0) {
              return res.status(404).json({
                success: false,
                message: "No Book Have Been Issued Yet..",
              });
            }
            return res.status(200).json({
              success: true,
              message: "Users With The Issued Books...",
              data: issuedBooks,
            });
};

