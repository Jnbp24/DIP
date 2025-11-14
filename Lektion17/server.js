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
        request.session.cart = [] //
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


// Add to cart 
app.get('/cart/:id', (request,response) => {
    const id = parseInt(request.params.id)

    const item = items.find(i => i.id === id); // Find the matching id in the items array
    if(!item){
        return response.status(404).send("Item not found")
    }

    request.session.cart.push(item); // Add the item to the session cart

    
    response.redirect('/') // Redirect back to the home page after adding the item
})

app.get('/cart/:id/:quantity', (request, response) => {
    const id = parseInt(request.params.id);
    const quantity = parseInt(request.params.quantity);


    const item = items.find(i => i.id === id) // Look for the specific id
    if(!item){
        return response.status(404).send("Item not found")
    }

    const existingItem = request.session.cart.find(i => i.id === id) // Check if item already exists in cart

    if(existingItem){
        existingItem.quantity += quantity // Increase quantity of specific item
    } else {
        request.session.cart.push({ // If item does not exist, push it to the session cart
            id: item.id,
            name: item.name,
            price: item.price,
            quantity: quantity
        })
    }

    response.redirect('/cart') // Redirect to the cart page 


})



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