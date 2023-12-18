const { UserModel, BookModel } = require("../models");
const issuedBook = require("../dtos/book-dto");


// const bookModel = require("../models/book-model"); 

// const getAllBooks =  () => {};
// const getSingleBookById =  () => {};
// module.exports = { getAllBooks, getSingleBookById };

// direct export
exports.getAllBooks = async (req, res) => {
  const books = await BookModel.find();

  if (books === 0) {
    return res.status(404).json({
      success: false,
      message: "No book found",
    });
  }
  return res.status(200).json({
    success: true,
    message: "All books are here",
    data: books,
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

exports.getSingleBookById = async (req, res) => {
  const { id } = req.params;
  const book = await BookModel.findById(id);

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

exports.getAllIssuedBooks = async (req, res) => {
  const users = await UserModel.find({
    issuedBook: { $exists: true },
  }).populate("issuedBook");

  // calling DTO

  const issuedBooks = users.map((each) => new issuedBook(each));

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

// router.post("/", (req, res) => {
//   const { data } = req.body;

//   if (!data) {
//     return res.status(400).json({
//       sucess: false,
//       message: "No Data To Add A Book",
//     });
//   }

//   const book = books.find((each) => each.id === data.id);
//   if (book) {
//     return res.status(404).json({
//       success: false,
//       message: "Id Already Exists !!",
//     });
//   }
//   const allBooks = { ...books, data };
//   return res.status(201).json({
//     success: true,
//     message: "Added Book Succesfully",
//     data: allBooks,
//   });
// });

exports.addNewBook = async (req, res) => {
  const { data } = req.body;

  if (!data) {
    return res.status(400).json({
      sucess: false,
      message: "No Data To Add A Book",
    });
  }

  await BookModel.create(data); // create will add a new tupple(row)
  const allBooks = await BookModel.find();

  return res.status(201).json({
    success: true,
    message: "Added Book Succesfully",
    data: allBooks,
  });
};

// router.put("/updateBook/:id", (req, res) => {
//   const { id } = req.params;
//   const { data } = req.body;

//   const book = books.find((each) => each.id === id);

//   if (!book) {
//     return res.status(400).json({
//       success: false,
//       message: "Book Not Found For This ID",
//     });
//   }

//   const updateData = books.map((each) => {
//     if (each.id === id) {
//       return { ...each, ...data };
//     }

//     return each;
//   });
//   return res.status(200).json({
//     success: true,
//     message: "Updated a Book By Their Id",
//     data: updateData,
//   });
// });

exports.updateBookById = async (req, res) => {
  const { id } = req.params;
  const { data } = req.body;

  const updatedBook = await bookModel.findOneAndUpdate({ _id: id }, data, {
    new: true, // means rather than find previous data we'll get updated or latest data
  });
  return res.status(200).json({
    success: true,
    message: "Updated a Book By Their Id",
    data: updatedBook,
  });
};
