import express from 'express';
import pizza from './pizza.js';
const app = express();
app.get('/pizza.js', (request, response)=>{
    response.send(pizza);
})
// app.get('/products',(request, response)=>{
//     // Array - Pizzas
//     response.send('Products');
// })
app.listen(4444, err=>{
    if(err){
        console.log('Server Crash ', err);
    }
    else{
        console.log('Server Up and Running');
    }
})