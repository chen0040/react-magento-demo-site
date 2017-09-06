import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import initialStates from '../../reducers/initialStates';
import * as categoryActions from '../../actions/categoryActions';

class CategoryProductListView extends React.Component {
    constructor(props, context) {
        super(props, context);
        
        this.state = {
            categoryProduts: []  
        };
    }
    
    componentWillReceiveProps(nextProps) {
        if (this.props.category.id != nextProps.category.id) {
            // Necessary to populate form when existing course is loaded directly.
            this.props.actions.loadCategoryProducts(nextProps.category.id);
        }
    }
    
    componentWillMount() {
        this.props.actions.loadCategoryProducts(this.props.category.id);
    }
    
    render() {
        
        return (
            <div>
                <h1>{this.props.category.name}</h1>
                <div>products: {this.props.categoryProducts.length}</div>
            </div>
        );
    }
}

CategoryProductListView.propTypes = {
    actions: PropTypes.object.isRequired,
    category: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
    return {
        categoryProducts: state.categoryProducts 
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(categoryActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryProductListView);