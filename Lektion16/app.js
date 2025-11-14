import express from 'express'
import session from 'express-session'
const app = express()
const PORT = 8080

app.set('view engine', 'pug')

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(session({
    secret: 'dinmor',
    resave: true,
    saveUninitialized: true
}))
app.use(express.static('assets'))


app.get('/', (request,response) => {
    const isLoggedIn = request.session.isLoggedIn
    response.render('frontpage', {title: 'Front page', isLoggedIn: isLoggedIn})
})



app.post('/login', (request, response) => {
    if(request.body.username == 'Jonas'){
        response.status(201).send({username: request.body.username})
    } else{
        response.sendStatus(401);
    }
})





app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})