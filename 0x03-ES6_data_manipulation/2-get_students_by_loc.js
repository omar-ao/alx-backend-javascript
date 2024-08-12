export default function getStudentsByLocation(students, city) {
  if (!(Array.isArray(students))) {
    return [];
  }
  return students.filter((obj) => obj.location === city);
}
