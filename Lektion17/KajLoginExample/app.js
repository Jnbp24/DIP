import express from 'express'
import session from 'express-session'

const app = express()
app.set('view engine', 'pug')
app.use(express.static('assets'))
app.use(express.json())

app.use(session({
    secret: '82CE19E6-1E02-450C-B71F-E29393A209BA',
    resave: true,
    saveUninitialized: true
}))

app.get('/', (request, response)=>{
    const isLoggedIn = request.session.isLoggedIn  
    response.render('frontpage', {title: 'FORSIDE', isLoggedIn: isLoggedIn})
})

app.get('/secret', (request, response)=>{
    if (request.session.isLoggedIn === true) {
        response.render('secret', {title: 'Min hemmelige side', isLoggedIn: request.session.isLoggedIn})
    }
})

app.post('/login', (request, response)=>{
    if (request.body.username == 'ole' && request.body.password == 'lukkeøje'){
        request.session.isLoggedIn = true
        response.status(201).send({ok: true})
    } else {
        response.sendStatus(401)
    }   
})

app.get('/logout', (request, response)=>{
    request.session.destroy()
    response.redirect('/')
})

app.listen(8080, ()=>{
    console.log('Fut fut')
})