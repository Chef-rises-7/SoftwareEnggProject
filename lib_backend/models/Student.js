const mongoose = require('mongoose')

const studentSchema = new mongoose.Schema({
    student_name: String,
    student_rollno: Number,
    student_due: Number,
});

module.exports = Student = mongoose.model("Student", studentSchema);