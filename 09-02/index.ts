const exam = require("./models/model");
const {addNewExam} = require("./controllers/addNewExam");
const {deleteExam} = require("./controllers/deleteExam");
const {readExam} = require("./controllers/readExam");
const {updateExam} = require("./controllers/updateExam");

readExam();
addNewExam(2,"12/12/2012", "14/14/2014", "bob", "15/15/2015");
readExam();
deleteExam(1);
readExam();
updateExam("id_exam", 2, 1);
readExam();



