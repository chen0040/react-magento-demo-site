import React, {PropTypes} from 'react';

class ProductsPage extends React.Component {
    constructor(props, context) {
        super(props, context);
        
        this.state = {
            product: { name: null }
        };
    }
    
    render() {
        return (
            <div>
                <h1>Products</h1>
            </div>
        );
    }
}

export default ProductsPage;