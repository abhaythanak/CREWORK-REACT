const express = require('express')
const app = express()

app.use(express.json());

const studentData = [
    {id:1,name: 'student1',class:5,},
    {id:2, name: 'student2',class:6,},
    {id:3, name: 'student3',class:7,},
];

app.get('/', (req, res)=> {
    res.send('Hello world');
})

app.get('/api/studentData',(req,res) => {
    res.send(studentData);
})

app.get('/api/studentData/:id',(req,res) => {
   // res.send(req.params.id)
   const course = studentData.find(c => c.id === parseInt(req.params.id));
   if (!course) res.status(404).send('404 not found')
   res.send(course);
});

app.post('/api/studentData',(req,res) => {
    const course = {
        id: studentData.length + 1,
        name: req.body.name ,
        class: req.body.class
    };
    studentData.push(course);
    res.send(course)
})

app.delete('/api/studentData/:id',(req,res) => {
    const course = studentData.find(c => c.id === parseInt(req.params.id));
    course.name = req.body.name;
    course.class = req.body.class;
    res.send(course)

});

app.put('/api/studentData/:id',(req,res) => {
    const course = studentData.find(c => c.id === parseInt(req.params.id));
    const index = studentData.indexOf(course);
    studentData.splice(index,1)

    res.send(course)
})

//port
const port = process.env.PORT || 3000;
app.listen(port, ()=> console.log(`Listening on port ${port}...`));

// app.get()
// app.post()
// app.put()
// app.delete()