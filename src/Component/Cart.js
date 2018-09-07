import React, { Component } from 'react';
import axios from 'axios';


class Cart extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            cart:[
                {
                    product: 'Shoe',
                    price: 200
                },
                {
                    product:'other shoe',
                    price: 42
                }
            ]
         }
    }

componentDidMount(){
    this.addToCart();
}
addToCart(){
        let { cart } = this.state
        axios.post('/api/cart', {cart}).then(res => {
            console.log('I hate session', res.data.cart)
        })
    }



    render() { 
        return (  
            <div>
                nasoidfgnoiuadnsfbgiouadfsog
            </div>
        );
    }
}
 
export default Cart;