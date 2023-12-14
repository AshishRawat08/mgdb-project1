# mgdb-project1


MVC  Arch => controllers
>> M : Model - Its depicts the structure of mongodb collection  ( Combination of view and controller) 
>> V : View - Its is handle by reactjs (write in frontend (reactjs))
>> C : Controller - Brain or logical partof a route ...it is rspct to bckend part
            >> books.controller.js
            >> users.controller.js

Schema - how the data is represent is db (data type needed and have diff condition for particular fields)
    id : string (data type)
    name  : string
    age : number
    gender : char || varchar(15)

Model - data type not needed abutnd have value for particular fields
    id : 123
    name  : john
    age : 43
    gender : 'M'


Foreign key :
>> Referential integrity

users table                                  books table  (base table)
issuedBook : 2(Foreign key)                issuedBook : 2 (Priamry key)










