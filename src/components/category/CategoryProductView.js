import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import initialStates from '../../reducers/initialStates';
import * as productActions from '../../actions/productActions';
import ProductImage from '../product/ProductImage';

class CategoryProductView extends React.Component {
    constructor(props, context) {
        super(props, context);
    }
    
    componentWillMount() {
        let sku = this.props.categoryProduct.sku;
        this.props.actions.loadProduct(sku);
    }
    
    render() {
        let sku = this.props.categoryProduct.sku;
        if(sku in this.props.products) {
            let product = this.props.products[sku];
            return (
                <div className="col-md-6">
                    <table>
                    <tbody>
                    <tr>
                        <td>
                            <ProductImage product={product} />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            {product.name}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            ${product.price}
                        </td>
                    </tr>
                    </tbody>
                    </table>
                </div>
            );
        } else {
            return (
                <div>
                    {sku}
                </div>
            );
        }
    }
}

CategoryProductView.propTypes = {
    categoryProduct: PropTypes.object.isRequired,
    products: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
    return {
        products: state.products 
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(productActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryProductView);