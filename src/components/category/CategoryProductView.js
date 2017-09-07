import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import initialStates from '../../reducers/initialStates';
import * as productActions from '../../actions/productActions';

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
            return (
                <div>
                    {this.props.products[sku].name}
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