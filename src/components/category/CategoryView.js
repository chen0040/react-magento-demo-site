import React, {PropTypes} from 'react';
import CategoryListView from './CategoryListView';

const CategoryView = ({category}) => {
    console.log(category);
    return (
        <div>
            <h1>{category.name}</h1>
            <CategoryListView categories={category.children_data} />
        </div>
    );
};

CategoryView.propTypes = {
    category: PropTypes.object.isRequired
};

export default CategoryView;