import React, { Component } from 'react';
import Order from '../../components/Order/Order.js';
import axios from '../../axios-orders';

class Orders extends Component {
    componentDidMount() {

    }

    render () {
        return (
            <div>
                <Order />
            </div>
        );
    }
}

export default Orders;