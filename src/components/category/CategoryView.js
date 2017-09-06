import React, {PropTypes} from 'react';
import CategoryListView from './CategoryListView';
import Padding from '../common/Padding';

const CategoryView = ({category}) => {
    console.log(category);
    return (
        <div>
            <div>
                <Padding size={category.level} />
                -{category.name}
            </div>
            <CategoryListView categories={category.children_data} />
        </div>
    );
};

CategoryView.propTypes = {
    category: PropTypes.object.isRequired
};

export default CategoryView;