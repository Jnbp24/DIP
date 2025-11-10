import express from 'express'

const app = express();
const PORT = 8800;

app.set('view engine', 'pug');
app.use(express.json());
app.use(express.urlencoded({extended: true}));

let users = [
  {name: "Simon", age: 17, gender: "Male"},
  {name: "Alfred", age: 21, gender: "Male"},
  {name: "Theodore", age: 18, gender: "Non-Binary"}
];

app.get('/', (request, response) => {
    response.render('homepage', {title: "Users"})
})

app.get('/allUsers', (request, response) => {
    response.render('users', {title: "Users", users: users})
})

app.post('/createUser', (request, response) => {
    const newUser = {name: request.body.name, age: request.body.age, gender: request.body.gender} 
    users.push(newUser);
    response.render('users', {title: "Users", users: users});
})


app.listen(PORT, (error) => {
    console.log(`Server is running on http://localhost:${PORT}`);
})

