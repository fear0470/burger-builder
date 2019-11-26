import React, { Component } from 'react'; 

class ContactData extends Component {
    state = {
        name: '',
        email: '',
        address: {
            street: '',
            postalCode: ''
        }
    }

    render () {
        return (
            <div>
                <h4>Enter your Contact Data</h4>
                <form>
                    <input type="text" name="" placeholder="Your Name" />
                    <input type="email" name="email" placeholder="Your Email" />
                    <input type="text" name="street" placeholder="Street" />
                    <input type="text" name="postal" placeholder="Postal Code" />
                </form>
            </div>
        );
    }
}

export default ContactData;