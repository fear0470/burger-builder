import React, { Component } from 'react'; 
import classes from './ContactData.css'
import Button from '../../../components/UI/Button/Button';

class ContactData extends Component {
    state = {
        name: '',
        email: '',
        address: {
            street: '',
            postalCode: ''
        },
        loading: false
    }

    orderHandler = (event) => {
      this.setState({ loading: true });
        const order = {
            ingredients: this.props.ingredients,
            price: this.state.totalPrice,
           customer: {
                name: 'Nick Fearns',
                address: {
                    street: '555 Test Lane',
                    postalCode: 'L0R1B7',
                    country: 'Canada'
                },
                email: 'test@test.com'
            },
            deliveryMethod: 'fastest'
        }
        axios.post('/orders.json', order)
            .then( response => {
                this.setState({ loading: false, purchasing: false })
            } )
            .catch(error => {
                this.setState({ loading: false, purchasing: false });
            } );
    }

    render () {
        return (
            <div className={classes.ContactData}>
                <h4>Enter your Contact Data</h4>
                <form>
                    <input className={classes.Input} type="text" name="" placeholder="Your Name" />
                    <input className={classes.Input} type="email" name="email" placeholder="Your Email" />
                    <input className={classes.Input} type="text" name="street" placeholder="Street" />
                    <input className={classes.Input} type="text" name="postal" placeholder="Postal Code" />
                    <Button btnType="Success" clicked={this.orderHandler}>ORDER</Button>
                </form>
            </div>
        );
    }
}

export default ContactData;