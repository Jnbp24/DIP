import express from 'express';
const router = express.Router();


let AUDImodels = ['A2', 'A4', 'A8']

router.get('/', (request, response) => {
    response.json({brand: ['BMW', 'OPEL', 'AUDI', 'MERCEDES-BENZ', 'VOLKSWAGEN', 'PORSCHE']
    });
})

router.get('/:brand/models', (request, response) => {
    const brand = request.params.brand.toUpperCase();
    if (brand == 'AUDI'){
        return response.json({
            brand: brand,
            models: AUDImodels
        })
    }
    response.json('Only AUDI.')
})

router.post('/addModel', (request, response) => {
    const  newModel = request.body.Carmodel
    AUDImodels.push(newModel)
    response.send(AUDImodels, newModel)
})



export default router;