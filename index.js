const express = require('express');
const app = express();
app.use(express.json());

const students = [
    {
        id: 1,
        firstName: 'KAGAMBEGA',
        lastName: 'RENE',
        age: '20'
    },
    {
        id: 2,
        firstName: 'KAGAM',
        lastName: 'ali',
        age: '25'
    },
    {
        id: 3,
        firstName: 'Zongo',
        lastName: 'Claude',
        age: '43'
    },
    {
        id: 4,
        firstName: 'Zongo',
        lastName: 'Jean',
        age: '30'
    },
];

app.get('/', (req, res) => {
    res.json("Welcome to my API");
});

app.get("/api/students", (req, res) => {
    res.status(200).json(students);
});

app.get("/api/studentId", (req, res) => {

    const student = students.find((s) => s.id === parseInt(req.params.studentsid) );
    if (!student) { 
        res.status(400).json({ message: "student not found" });
    } else {
        res.status(200).json(student);
    }
});

//Update a student

app.put("/api/studentId", (req, res) => {

    const student = students.findIndex((s) => s.id === parseInt(req.params.studentsid) );
    if(studentIndex===-1) return res.status(400).json({ message: "student not found" });
    students[studentIndex] = req.body;
    res.status(200).json(students[studentIndex]);
});

//create a student

app.post("/api/studentId", (req, res) => {

    const student = students.findIndex((s) => s.id === parseInt(req.params.studentsid) );
    if(studentIndex===-1) return res.status(400).json({ message: "student not found" });
    students[studentIndex] = req.body;
    res.status(200).json(students[studentIndex]);
});

//delete a student by id

app.delete("/api/studentId", (req, res) => {

    const student = students.findIndex((s) => s.id === parseInt(req.params.studentsid) );
    if(studentIndex===-1) return res.status(400).json({ message: "student not found" });
    students.splice(studentIndex, 1);
    res.status(200).json(students);
});



const port = 8001;

app.listen(port, () => console.log(`Listening on port ${port}`));
