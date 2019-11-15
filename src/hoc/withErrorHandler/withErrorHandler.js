import React, { Component } from 'react';
import Modal from '../../components/UI/Modal/Modal';
import Aux from '../Aux/Aux';

const withErrorHandler =  (WrappedComponent, axios ) => {
    return class extends Component {
        render () {
            return (
                <Aux>
                    <Modal>
                        Something went wrong.
                    </Modal>
                    <WrappedComponent {...this.props} />
                </Aux>
            );
        }
    } 
}

export default withErrorHandler;