import React, {PropTypes} from 'react';

const CategoryView = ({category}) => {
    return (
        <div>
            <h1>{category.name}</h1>
        </div>
    );
};

CategoryView.propTypes = {
    category: PropTypes.object.isRequired
};

export default CategoryView;