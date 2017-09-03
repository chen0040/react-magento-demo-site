import React, {PropTypes} from 'react';

class ProductPage extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
          product: { name: '' }  
        };
        this.onTitleChange = this.onTitleChange.bind(this);
        this.onClickSave = this.onClickSave.bind(this);
    }
    
    onTitleChange(event) {
        const product = this.state.product;
        product.name = event.target.value;
        this.setState({product: product});
    }
    
    onClickSave(event) {
        alert(`Saving ${this.state.product.name}`);
    }
    
    render () {
        return (
            <div>
                <h1>Category</h1>
                <h2>Add Product</h2>
                <input 
                    type="text"
                    onChange={this.onNameChange}
                    value={this.state.product.title} />
                <input
                    type="submit"
                    value="Save"
                    onClick={this.onClickSave} />
            </div>
        );
    }
}