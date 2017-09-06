import React, {PropTypes} from 'react';

const CategoryView = ({category}) => {
    console.log(category);
    return (
        <div>
            <h1>Say something here</h1>
            <h1>{category.id}</h1>
        </div>
    );
};

CategoryView.propTypes = {
    category: PropTypes.object.isRequired
};

export default CategoryView;