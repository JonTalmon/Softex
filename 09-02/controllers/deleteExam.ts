const exams = require("../models/model");

function deleteExamById(id:number):void {
    return exams.splice(exams.indexOf(exams.find(exam => exam.id_exame == id)));
};

module.exports = {
    deleteExamById,
};