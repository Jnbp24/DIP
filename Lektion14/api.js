import express from 'express';
import carsRouter from './cars.js';

const app = express();
const PORT = 8080;

// Templating - looks for pug files in views folder always
app.set('view engine', 'pug');

app.use(express.static('assets'));

// Middleware to be able to parse request bodies, i.e - can use request.body
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/cars', carsRouter); // Mount cars.js with a /cars infront of its endpoints





app.get('/', (request, response) => {
    response.redirect('/homepage.html');
})


app.use((request, response, next) => { // Final middleware to catch any bad requests. Redirects to the 404.html page
    response.status(404).redirect('/404.html')
})

app.listen(PORT, (error) => {
    if(error) {
        console.log(`Something went wrong when running on http://localhost:${PORT}`)
    }
    console.log(`Server is running on http://localhost:${PORT}`);
})