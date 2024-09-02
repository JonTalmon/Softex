const exam = require("../models/model");

function updateExamById(changedValue:string,id:number,newValue:number) {
    switch(changedValue) {
        case "id_exam": 
            return exam[exam.indexOf(exam.find(exame => exame.id_exame == id))].id_exam = newValue;
        case "emission_date":
            return exam.exame[exam.indexOf(exam.find(exame => exame.id_exame == id))].emission_date = newValue;
        case "expiration_date":
            return exam.exame[exam.indexOf(exam.find(exame => exame.id_exame == id))].expiration_date = newValue;
        case "patiente":
            return exam[exam.indexOf(exam.find(exame => exame.id_exame == id))].patiente = newValue;
        case "exam_date":
            return exam[exam.indexOf(exam.find(exame => exame.id_exame == id))].exam_date = newValue;
        default:
            return console.log("insert a valid value to change!");
    };
};

module.exports = {
    updateExamById,
}

