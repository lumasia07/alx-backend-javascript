export default function updateStudentGradeByCity(students, city, newGrades) {
  return students
    .filter((student) => student.location === city)
    .map((student) => {
      const gradeRec = newGrades.find((grade) => grade.studentId === student.id);
      return {
        ...student,
        grade: gradeRec ? gradeRec.grade : 'N/A',
      };
    });
}
