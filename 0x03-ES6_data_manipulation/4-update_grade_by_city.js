export default function updateStudentGradeByCity(students, city, newGrades) {
  if (!(Array.isArray(newGrades) || !(Array.isArray(students)))) {
    return [];
  }
  return students
    .filter((student) => student.location === city)
    .map((student) => {
      const updatedGrade = newGrades.find((grade) => grade.studentId === student.id);
      if (updatedGrade) {
        return { ...student, grade: updatedGrade.grade };
      }
      return { ...student, grade: 'N/A' };
    });
}
