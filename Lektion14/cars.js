import express, { request, response, Router } from 'express';
const router = express.Router();



let audiModels = [
    {name:'A2', image: ''},
    {name: 'A4', image: 'a4.jpg'},
    {name: 'A8', image: '' }
]

router.get('/', (request, response) => {
    response.render('index', {title: 'Welcome to the carshow', models: audiModels})
})

router.get('/api/brands', (request, response) => {
    response.json({brands: ['BMW', 'MERCEDES-BENZ', 'AUDI', 'PEUGEOT', 'OPEL', 'PORSCHE']});
})

router.get('/api/:brand', (request, resp) => {
    if(request.params.brand == 'audi'){
        response.json({models: audiModels})
    }
})

router.get('/:brand/models', (request, response) => {
    const brand = request.params.brand.toUpperCase();
    if (brand == 'AUDI'){
        return response.render('index', {title: 'Welcome to the carshow', models: audiModels})
    }
    else{
        response.json('Sorry, we only have AUDI.')
    }
})

router.post('/addModel', (request, response) => {
    const  newModel = request.body.Carmodel
    audiModels.push(newModel)
    response.redirect('/');
})



export default router;