import express, { response } from 'express'
import session from 'express-session'
import morgan from 'morgan'

const PORT = 8080;
const app = express();

app.set('view engine', 'pug');
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(morgan('dev'));
app.use(express.static('assets'))
app.use(session({
    secret: 'Hej',
    saveUninitialized: true,
    resave: true
}))


const items = [
    {id: 1, name: 'Phone', price: 500.00, description: 'Big phone'},
    {id: 2, name: 'Fridge', price: 1200.00, description: 'Big fridge'},
    {id: 3, name: 'T-shirt', price: 50.00, description: 'Red T-shirt'},
    {id: 4, name: 'Melon', price: 500.00, description: 'Expensive melon'}
]

app.use((request, response, next) =>{
    if(!request.session.cart){
        request.session.cart = [] // Creates new cart per session
    
    }
    next()
})


// Frontpage
app.get('/', (request, response) => {
    response.render('frontpage', {
        items: items,
        cartCount: request.session.cart.length
    })
})

app.post('/cart/:id', (request, response) => {
    const id = parseInt(request.params.id);
    const item = items.find(i => i.id === id);
    if (!item) return response.status(404).send("Item not found");

    const quantity = request.body.quantity ? parseInt(request.body.quantity) : 1 // Get quantity from body, or default to 1

    const existingItem = request.session.cart.find(i => i.id === id);

    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        request.session.cart.push({
            id: item.id,
            name: item.name,
            price: item.price,
            description: item.description,
            quantity: quantity
        });
    }

    response.redirect('/cart');
});


// View Cart
app.get('/cart', (request, response) => {
    
    const total = request.session.cart.reduce((sum, item) => {
        return sum + item.price * item.quantity
    }, 0)
    
    response.render('cart', {
        cart: request.session.cart,
        total: total
    })
})










app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
})