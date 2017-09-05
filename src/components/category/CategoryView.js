import React from 'react';

const CategoryView = ({category}) => {
    return (
        <div>
            <h1>{category.name}</h1>
        </div>
    );
};

export default CategoryView;