import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as categoryActions from '../../actions/categoryActions';
import initialStates from '../../reducers/initialStates';
import CategoryProductListView from './CategoryProductListView';

class CategoryPage extends React.Component {
    constructor(props, context) {
        super(props, context);
        
        this.state = {
          category: Object.assign({}, this.props.category)
        };
    }

    componentWillReceiveProps(nextProps) {
        console.log(nextProps);
        
        if (this.props.category.id != nextProps.category.id) {
          // Necessary to populate form when existing course is loaded directly.
          this.setState({category: Object.assign({}, nextProps.category)});
        }
    }
    
    redirect() {
        this.context.router.push('/categories');
    }
    
    render () {
        return (
            <div>
                <h1>Category: {this.state.category.name}</h1>
                <CategoryProductListView category={this.state.category} />
            </div>
        );
    }
}



CategoryPage.propTypes = {
    actions: PropTypes.object.isRequired,
    category: PropTypes.object.isRequired
};

//Pull in the React Router context so router is available on this.context.router.
CategoryPage.contextTypes = {
  router: PropTypes.object
};

function flatten(node) {
    let res = [];
    for(var i=0; i < node.children_data.length; ++i) {
        var child = node.children_data[i];
        res.push(child);
        var child_res = flatten(child);
        for(var j=0; j < child_res.length; ++j) {
            res.push(child_res[j]);
        }
    }
    return res;
}

function getCategoryById(categories, id) {
  const category = categories.filter(category => category.id == id);
  if (category) return category[0]; //since filter returns an array, have to grab the first.
  return initialStates.rootCategory;
}

function mapStateToProps(state, ownProps) {
    
    const categoryId = ownProps.params.id; // from the path `/categories/:id`

    let category = initialStates.rootCategory;

    let allCategories = flatten(state.rootCategory);
    if (categoryId && allCategories.length > 0) {
        category = getCategoryById(allCategories, categoryId);
    }
    
    return {
        category: category 
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(categoryActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryPage);