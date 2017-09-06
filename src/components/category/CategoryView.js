import React, {PropTypes} from 'react';
import CategoryListView from './CategoryListView';
import Padding from '../common/Padding';
import {Link} from 'react-router';

const CategoryView = ({category}) => {
    
    return (
        <div>
            <div>
                <Padding size={category.level} />
                
                -<Link to={'/categories/' + category.id}>{category.name}</Link>
            </div>
            <CategoryListView categories={category.children_data} />
        </div>
    );
};

CategoryView.propTypes = {
    category: PropTypes.object.isRequired
};

export default CategoryView;