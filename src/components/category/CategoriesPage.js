import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {createCategory} from '../../actions/categoryActions';

class CategoriesPage extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            category: { name: '' }
        };
        
        this.onClickSave = this.onClickSave.bind(this);
        this.onTitleChange = this.onTitleChange.bind(this);
    }
    
    onTitleChange(event) {
        const category = this.state.category;
        category.name = event.target.value;
        this.setState({category: category});
    }
    
    onClickSave() {
        this.props.dispatch(createCategory(this.state.category));
    }
    
    categoryRow(category, index) {
        return (<div key={index}>{category.name}</div>);
    }
    
    render() {
        return (
            <div>
                <h1>Categories</h1>
                {this.props.categories.map(this.categoryRow)}
                <h2>Add Category</h2>
            <input 
                type="text"
                onChange={this.onTitleChange}
                value={this.state.category.name} />
            <input 
                type="submit"
                value="Save"
                onClick={this.onClickSave} />
            </div>
        );
    }
}

CategoriesPage.propTypes = {
    dispatch: PropTypes.func.isRequired,
    categories: PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps) {
    return {
        categories: state.categories 
    };
}

export default connect(mapStateToProps)(CategoriesPage);