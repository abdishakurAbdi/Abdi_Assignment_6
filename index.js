const express = require('express');
const app = express();
const nodemon = require('nodemon');
app.use(express.json());

const PORT = 100;

let users = {
    username: "Abdi",
    password: "abdi1234",
    email: "hahahaha@gmail.com",
    Courses: {
        course: {
            courseID: "CMSC1212",
            courseName: "HTML & CSS",
            startDate: "10/10/2022",
            endDate: "05/10/20232"
        },
        course1: {
            courseID: "CMSC1255",
            courseName: "PHP & MYSQL",
            startDate: "10/10/2022",
            endDate: "05/10/20232"
        },
        course2: {
            courseID: "CMSC2204",
            courseName: "MOBLE",
            startDate: "10/10/2022",
            endDate: "05/10/20232"
        }
    }
}

app.get('/getUser', (req, res) => {
    try {
        return res.status(200).json(users);
        
    } 
    catch {
        return res.status(500)
        
    }
})

app.post('/addUser', (req, res) => {
    try {
        let user = req.body.users
        let name = req.body.users.username

        console.log(user)
        return res.status(200).json(`Added user ${name} successfully.`)
    } 
    catch {
        return res.status(500);
    }
})

app.listen(PORT, () => {
    console.log(`Server ${PORT} started`)
});