const students = [
    {"name":"Вася","age":18},
    {"name":"Маша","age":20},
    {"name":"Катя","age":25}
];

const getOldStudents = (students) => {
    const oldStudents = [];

    students.forEach(student => {
        if (student.age >= 20) {
            oldStudents.push(student.name);
        }
    })

    return oldStudents;
};

console.log(getOldStudents(students));
