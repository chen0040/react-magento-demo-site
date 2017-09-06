import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import initialStates from '../../reducers/initialStates';
import * as categoryActions from '../../actions/categoryActions';

class CategoryProductView extends React.Component {
    constructor(props, context) {
        super(props, context);
        
        this.state = {
            product: []  
        };
    }
    
    componentWillMount() {
        let sku = this.props.categoryProduct.sku;
    }
    
    render() {
        
        return (
            <div>
                {this.props.categoryProduct.sku}
            </div>
        );
    }
}

CategoryProductView.propTypes = {
    categoryProduct: PropTypes.object.isRequired
};

export default CategoryProductView;