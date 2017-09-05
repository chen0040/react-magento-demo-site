import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as categoryActions from '../../actions/categoryActions';
import {CategoryView} from './CategoryView';

class CategoriesPage extends React.Component {
    constructor(props, context) {
        super(props, context);
    }
    
    render() {
        return (
            <div>
                <h1>Categories</h1>
                <CategoryView category={this.props.rootCategory} />
            </div>
        );
    }
}

CategoriesPage.propTypes = {
    actions: PropTypes.object.isRequired,
    rootCategory: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
    return {
        rootCategory: state.rootCategory 
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(categoryActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoriesPage);