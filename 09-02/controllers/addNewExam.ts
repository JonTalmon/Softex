const exams = require("./models/model");

function addNewExam(id_exam:number, emission_date:string,expiration_date:string, patiente:string, exam_date:string) {
    const newExam = {
        id_exam,
        emission_date,
        expiration_date,
        patiente,
        exam_date,
    };
    exams.push(newExam);
    return console.log(`Exame marcado para o paciente ${newExam.patiente} na data ${newExam.exam_date}"`);
};

module.exports = {
    addNewExam,
}