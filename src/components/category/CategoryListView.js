import React, {PropTypes} from 'react';
import CategoryView from './CategoryView';

const CategoryListView = ({categories}) => {
    return (
        <div>
        {categories.map(category => 
                <CategoryView key={category.id} category={category} />
            
        )}
        </div>
    );
};

CategoryListView.propTypes = {
    categories: PropTypes.array.isRequired
};

export default CategoryListView;