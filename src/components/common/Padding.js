import React, {PropTypes} from 'react';

const Padding = ({size}) => {
    var dots = [];
    for(var i=0; i < size; ++i) {
        dots.push(i);
    }
    
    return (
        <span>
        {dots.map((item, index) => <span key={index}>&nbsp;&nbsp;</span>)}
        </span>
    );
};

Padding.propTypes = {
    size: PropTypes.number.isRequired
};

export default Padding;