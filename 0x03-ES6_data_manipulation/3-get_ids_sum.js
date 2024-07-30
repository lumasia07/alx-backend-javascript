export default function getStuentIdsSum(students) {
  return students.reduce((sum, student) => sum + student.id, 0);
}
